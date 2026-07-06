// Authentication and Rate-Limiting Utilities for KUSGC Portal

export interface KUSGCUser {
  name: string;
  enrollment: string;
  email: string;
  loggedInAt: number;
}

const USER_KEY = "kusgc_user_session";
const COOLDOWN_DURATION_MS = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds

/**
 * Get current logged in user from localStorage
 */
export function getAuthUser(): KUSGCUser | null {
  if (typeof window === "undefined") return null;
  try {
    const data = localStorage.getItem(USER_KEY);
    if (!data) return null;
    return JSON.parse(data) as KUSGCUser;
  } catch (e) {
    console.error("Error reading auth user:", e);
    return null;
  }
}

/**
 * Save logged in user to localStorage
 */
export function setAuthUser(user: Omit<KUSGCUser, "loggedInAt">): KUSGCUser {
  const fullUser: KUSGCUser = {
    ...user,
    loggedInAt: Date.now(),
  };
  if (typeof window !== "undefined") {
    localStorage.setItem(USER_KEY, JSON.stringify(fullUser));
  }
  return fullUser;
}

/**
 * Log out current user
 */
export function logoutAuthUser(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(USER_KEY);
  }
}

/**
 * Check cooldown status for a given feature (grievance or join)
 */
export function getCooldownStatus(
  type: "grievance" | "join",
  enrollment: string
): { canSubmit: boolean; daysRemaining: number; hoursRemaining: number; lastSubmittedAt: number | null } {
  if (typeof window === "undefined" || !enrollment) {
    return { canSubmit: true, daysRemaining: 0, hoursRemaining: 0, lastSubmittedAt: null };
  }

  const key = `kusgc_cooldown_${type}_${enrollment.toUpperCase().trim()}`;
  const val = localStorage.getItem(key);
  if (!val) {
    return { canSubmit: true, daysRemaining: 0, hoursRemaining: 0, lastSubmittedAt: null };
  }

  const lastSubmittedAt = parseInt(val, 10);
  if (isNaN(lastSubmittedAt)) {
    return { canSubmit: true, daysRemaining: 0, hoursRemaining: 0, lastSubmittedAt: null };
  }

  const elapsed = Date.now() - lastSubmittedAt;
  if (elapsed >= COOLDOWN_DURATION_MS) {
    // Cooldown expired
    return { canSubmit: true, daysRemaining: 0, hoursRemaining: 0, lastSubmittedAt };
  }

  const remainingMs = COOLDOWN_DURATION_MS - elapsed;
  const daysRemaining = Math.floor(remainingMs / (24 * 60 * 60 * 1000));
  const hoursRemaining = Math.floor((remainingMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));

  return {
    canSubmit: false,
    daysRemaining,
    hoursRemaining,
    lastSubmittedAt,
  };
}

/**
 * Record a submission timestamp for cooldown tracking
 */
export function recordSubmission(type: "grievance" | "join", enrollment: string): void {
  if (typeof window !== "undefined" && enrollment) {
    const key = `kusgc_cooldown_${type}_${enrollment.toUpperCase().trim()}`;
    localStorage.setItem(key, Date.now().toString());
  }
}

/**
 * Validate that the email address is an official Karnavati University student email
 */
export function isValidKarnavatiEmail(email: string): boolean {
  if (!email) return false;
  return email.toLowerCase().trim().endsWith("@karnavatiuniversity.edu.in");
}
