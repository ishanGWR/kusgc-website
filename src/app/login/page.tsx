"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimatedOrb from "@/app/components/AnimatedOrb";
import { getAuthUser, setAuthUser, logoutAuthUser, isValidKarnavatiEmail, KUSGCUser } from "@/app/utils/auth";
import { supabase, isSupabaseConfigured } from "@/app/utils/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<KUSGCUser | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Manual Form State
  const [name, setName] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [redirectPath, setRedirectPath] = useState<string | null>(null);

  // Google Modal / Fallback State
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [googleEmail, setGoogleEmail] = useState("");
  const [googleName, setGoogleName] = useState("");
  const [googleEnrollment, setGoogleEnrollment] = useState("");
  const [googleError, setGoogleError] = useState("");
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  // Enrollment Prompt Modal for Real Supabase OAuth Return
  const [showEnrollmentPrompt, setShowEnrollmentPrompt] = useState(false);

  useEffect(() => {
    const initSession = async () => {
      // Read local storage session first
      const user = getAuthUser();
      setCurrentUser(user);

      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const redirect = params.get("redirect");
        if (redirect) setRedirectPath(redirect);
      }

      // Check if returning from Supabase Google OAuth
      if (isSupabaseConfigured()) {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user?.email) {
          const authEmail = session.user.email;
          // STRICT DOMAIN RESTRICTION CHECK
          if (!isValidKarnavatiEmail(authEmail)) {
            await supabase.auth.signOut();
            setError(`Access Denied: (${authEmail}) is not an official @karnavatiuniversity.edu.in email.`);
          } else if (!user || user.email !== authEmail.toLowerCase()) {
            setGoogleEmail(authEmail);
            setGoogleName(session.user.user_metadata?.full_name || session.user.user_metadata?.name || authEmail.split("@")[0]);
            setShowEnrollmentPrompt(true);
          }
        }
      }

      setIsLoaded(true);
    };

    initSession();

    // Listen for Supabase OAuth sign in events
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user?.email) {
        const authEmail = session.user.email;
        if (!isValidKarnavatiEmail(authEmail)) {
          await supabase.auth.signOut();
          setError(`Access Denied: (${authEmail}) is not an official @karnavatiuniversity.edu.in email.`);
        } else {
          const u = getAuthUser();
          if (!u || u.email !== authEmail.toLowerCase()) {
            setGoogleEmail(authEmail);
            setGoogleName(session.user.user_metadata?.full_name || session.user.user_metadata?.name || authEmail.split("@")[0]);
            setShowEnrollmentPrompt(true);
          }
        }
      } else if (event === "SIGNED_OUT") {
        setCurrentUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Handle Manual Form Login
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name.trim() || !enrollment.trim() || !email.trim() || !password.trim()) {
      setError("Please fill in all verification fields.");
      return;
    }

    // STRICT DOMAIN RESTRICTION CHECK
    if (!isValidKarnavatiEmail(email)) {
      setError("Access Restricted: Only official @karnavatiuniversity.edu.in email addresses are permitted.");
      return;
    }

    const user = setAuthUser({
      name: name.trim(),
      enrollment: enrollment.trim().toUpperCase(),
      email: email.trim().toLowerCase(),
    });

    setCurrentUser(user);
    setSuccess("Student verification successful! Redirecting...");

    setTimeout(() => {
      if (redirectPath) {
        router.push(redirectPath);
      } else {
        router.push("/");
      }
    }, 1200);
  };

  // Handle Google Workspace Sign-In Button Click
  const handleGoogleSignInClick = async () => {
    setError("");
    setGoogleError("");

    if (isSupabaseConfigured()) {
      // Trigger real Supabase Google OAuth!
      setIsGoogleLoading(true);
      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: typeof window !== "undefined" ? `${window.location.origin}/login${redirectPath ? `?redirect=${redirectPath}` : ""}` : undefined,
        },
      });

      if (oauthError) {
        setIsGoogleLoading(false);
        setError("Supabase OAuth Error: " + oauthError.message);
      }
    } else {
      // Fallback modal if Supabase URL/Key are not yet configured in .env.local
      setShowGoogleModal(true);
    }
  };

  // Handle Google Fallback Modal Sign-In
  const handleGoogleFallbackSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGoogleError("");

    if (!googleEmail.trim() || !googleName.trim() || !googleEnrollment.trim()) {
      setGoogleError("Please complete your student profile details.");
      return;
    }

    // STRICT DOMAIN RESTRICTION FOR GOOGLE LOGIN
    if (!isValidKarnavatiEmail(googleEmail)) {
      setGoogleError("Couldn't sign you in. This portal is restricted to @karnavatiuniversity.edu.in Google Workspace accounts only.");
      return;
    }

    setIsGoogleLoading(true);

    setTimeout(() => {
      const user = setAuthUser({
        name: googleName.trim(),
        enrollment: googleEnrollment.trim().toUpperCase(),
        email: googleEmail.trim().toLowerCase(),
      });

      setIsGoogleLoading(false);
      setShowGoogleModal(false);
      setCurrentUser(user);
      setSuccess("Google Workspace authentication successful! Redirecting...");

      setTimeout(() => {
        if (redirectPath) {
          router.push(redirectPath);
        } else {
          router.push("/");
        }
      }, 1200);
    }, 1000);
  };

  // Finalize Enrollment Number after Supabase OAuth Return
  const handleEnrollmentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!googleEnrollment.trim()) return;

    const user = setAuthUser({
      name: googleName.trim(),
      enrollment: googleEnrollment.trim().toUpperCase(),
      email: googleEmail.trim().toLowerCase(),
    });

    setShowEnrollmentPrompt(false);
    setCurrentUser(user);
    setSuccess("Supabase Google Sign-In verified! Redirecting...");

    setTimeout(() => {
      if (redirectPath) {
        router.push(redirectPath);
      } else {
        router.push("/");
      }
    }, 1200);
  };

  const handleLogout = async () => {
    if (isSupabaseConfigured()) {
      await supabase.auth.signOut();
    }
    logoutAuthUser();
    setCurrentUser(null);
    setName("");
    setEnrollment("");
    setEmail("");
    setPassword("");
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#05050A] flex items-center justify-center text-white">
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[#05050A] text-white overflow-hidden pt-36 pb-32 flex items-center justify-center px-6">
        {/* Dynamic Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <AnimatedOrb />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="relative z-10 w-full max-w-lg">
          
          {/* Header Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span className="text-xs font-bold uppercase tracking-widest">Karnavati University Portal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Student
              <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-2 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">
                Authentication
              </span>
            </h1>
            <p className="text-zinc-400 text-sm mt-2">
              Strictly restricted to official <strong className="text-cyan-300 font-mono">@karnavatiuniversity.edu.in</strong> student accounts.
            </p>
          </div>

          {/* Main Card Container */}
          <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-8 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            {currentUser ? (
              /* ALREADY LOGGED IN VIEW */
              <div className="relative z-10 text-center py-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 mx-auto flex items-center justify-center text-black font-black text-2xl mb-6 shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">Welcome, {currentUser.name}!</h2>
                <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-2">
                  {currentUser.enrollment}
                </p>
                <p className="text-xs font-mono text-zinc-400 mb-6 bg-white/5 py-1.5 px-3 rounded-full inline-block border border-white/10">
                  {currentUser.email}
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-zinc-300 mb-8 leading-relaxed">
                  You are actively verified on the KUSGC Student Portal. You can now submit requests on restricted pages once every 14 days.
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link href={redirectPath || "/grievance"} className="w-full">
                    <button className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                      Go to Grievance
                    </button>
                  </Link>
                  <Link href="/join" className="w-full">
                    <button className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                      Go to Join Us
                    </button>
                  </Link>
                </div>

                <button
                  onClick={handleLogout}
                  className="text-xs text-zinc-500 hover:text-red-400 underline transition-colors font-semibold uppercase tracking-widest cursor-pointer"
                >
                  Logout & Switch Student ID
                </button>
              </div>
            ) : (
              /* LOGIN SELECTION FORM */
              <div className="relative z-10 flex flex-col gap-6">
                
                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold flex items-center gap-2">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{error}</span>
                  </div>
                )}

                {success && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>{success}</span>
                  </div>
                )}

                {/* 1. PRIMARY: LOGIN WITH GOOGLE WORKSPACE */}
                <div>
                  <button
                    type="button"
                    disabled={isGoogleLoading}
                    onClick={handleGoogleSignInClick}
                    className="w-full py-4 px-6 rounded-xl bg-white text-zinc-900 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3.5 cursor-pointer border border-white/20 disabled:opacity-50"
                  >
                    {isGoogleLoading ? (
                      <div className="w-5 h-5 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                      </svg>
                    )}
                    <span>Sign in with Google Workspace</span>
                  </button>
                  <p className="text-[11px] text-center text-zinc-400 mt-2 font-medium">
                    Powered by <strong className="text-white">Supabase Auth</strong> &bull; <span className="text-cyan-400 font-mono">@karnavatiuniversity.edu.in</span> only
                  </p>
                </div>

                {/* DIVIDER */}
                <div className="relative flex items-center justify-center my-1">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                  <span className="relative bg-zinc-950 px-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    Or sign in with Student ID
                  </span>
                </div>

                {/* MANUAL LOGIN FORM */}
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., John Doe"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-cyan-500/50 focus:bg-white/10 text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="enrollment" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      Enrollment No. <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="enrollment"
                      value={enrollment}
                      onChange={(e) => setEnrollment(e.target.value)}
                      placeholder="e.g., KU20261234"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-purple-500/50 focus:bg-white/10 text-sm font-mono uppercase"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        University Email <span className="text-cyan-400">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-cyan-400">@karnavatiuniversity.edu.in</span>
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@karnavatiuniversity.edu.in"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-cyan-500/50 focus:bg-white/10 text-sm font-mono"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      Student PIN / Password <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-purple-500/50 focus:bg-white/10 text-sm"
                    />
                  </div>

                  <div className="mt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-black font-black uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      Verify & Login &rarr;
                    </button>
                  </div>
                </form>

              </div>
            )}

          </div>

          <div className="text-center mt-8">
            <Link href="/" className="text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-widest font-bold">
              &larr; Return to Home
            </Link>
          </div>

        </div>
      </main>

      {/* ENROLLMENT PROMPT MODAL (FOR REAL SUPABASE OAUTH RETURN) */}
      {showEnrollmentPrompt && (
        <div className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl bg-zinc-900 border border-white/15 p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Link Enrollment Number</h3>
            <p className="text-xs text-zinc-400 mb-6">
              You verified your Google account as <strong className="text-cyan-400 font-mono">{googleEmail}</strong>. Enter your student ID to complete registration.
            </p>

            <form onSubmit={handleEnrollmentSubmit} className="flex flex-col gap-4 text-left">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Enrollment No. <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={googleEnrollment}
                  onChange={(e) => setGoogleEnrollment(e.target.value)}
                  placeholder="e.g., KU20261234"
                  className="w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 text-sm font-mono uppercase outline-none focus:border-cyan-500 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-black font-black uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all cursor-pointer mt-2"
              >
                Complete Sign-In &rarr;
              </button>
            </form>
          </div>
        </div>
      )}

      {/* GOOGLE FALLBACK SIMULATION MODAL (WHEN SUPABASE KEYS ARE NOT SET YET) */}
      {showGoogleModal && (
        <div className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl bg-zinc-900 border border-white/15 p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setShowGoogleModal(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Sign in with Google</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Use your official Karnavati University Workspace account
              </p>
            </div>

            {googleError && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold mb-5 flex items-start gap-2.5">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="leading-relaxed">{googleError}</span>
              </div>
            )}

            <form onSubmit={handleGoogleFallbackSignIn} className="flex flex-col gap-4">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Google Workspace Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={googleEmail}
                  onChange={(e) => setGoogleEmail(e.target.value)}
                  placeholder="student@karnavatiuniversity.edu.in"
                  className="w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 text-sm font-mono outline-none focus:border-blue-500 transition-all"
                />
                <p className="text-[10px] text-zinc-500 mt-1">Must end with @karnavatiuniversity.edu.in</p>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Student Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={googleName}
                  onChange={(e) => setGoogleName(e.target.value)}
                  placeholder="e.g., John Doe"
                  className="w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 text-sm outline-none focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Enrollment No. <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={googleEnrollment}
                  onChange={(e) => setGoogleEnrollment(e.target.value)}
                  placeholder="e.g., KU20261234"
                  className="w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 text-sm font-mono uppercase outline-none focus:border-blue-500 transition-all"
                />
              </div>

              <div className="mt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowGoogleModal(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isGoogleLoading}
                  className="px-6 py-2.5 rounded-xl bg-[#4285F4] hover:bg-[#3367D6] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isGoogleLoading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <span>Next &rarr;</span>
                  )}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      <div className="relative z-10 bg-[#05050A]">
        <Footer />
      </div>
    </>
  );
}
