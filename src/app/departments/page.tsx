"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimatedOrb from "@/app/components/AnimatedOrb";

// THE COMPLETE DATA WITH INSTA FIELDS
const committeesData = [
  {
    id: "tech",
    name: "Tech",
    image: "/council/ishan.jpg",
    description: "Building the digital infrastructure, managing web platforms, and driving technological innovation across the campus.",
    themeColor: "text-cyan-400",
    borderColor: "border-cyan-400",
    shadowColor: "shadow-[0_0_15px_rgba(34,211,238,0.4)]",
    glow: "rgba(34, 211, 238, 0.5)",
    heads: [{ name: "Ishan Chouhan", image: "/council/ishan.jpg", insta: "Ishann_412" },
            { name: "Maun Patel",  image: "/council/maun.jpg", insta: "maun_patel" 
    }],
    members: [
      { name: "Vadit Bhatti",  image: "/commities/tech/vadit.jpg", insta: "alex.codes" },
      { name: "Gayatri Raval",  image: "/commities/tech/gayatri.jpg", insta: "alex.codes" },
      { name: "Yug Mehta",  image: "/commities/tech/yug.jpg", insta: "alex.codes" },
      { name: "Harry Sijo",  image: "/commities/tech/harry.jpg", insta: "alex.codes" },
      { name: "Daksh Panchal",  image: "/commities/tech/daksh.jpg", insta: "alex.codes" },
      { name: "Rishi Patel",  image: "/commities/tech/rishi.jpg", insta: "alex.codes" },     
    ]
  },
  {
    id: "operation",
    name: "Operation",
    description: "The backbone of the council. Handling logistics, event execution, and ensuring seamless day-to-day management.",
    themeColor: "text-indigo-400",
    borderColor: "border-indigo-400",
    shadowColor: "shadow-[0_0_15px_rgba(129,140,248,0.4)]",
    glow: "rgba(129, 140, 248, 0.5)",
    heads: [{ name: "Maahi Agrawal", image: "/council/maahi.jpg", insta: "" },
            { name: "Vanshika Gupta",  image: "/council/vanshika.jpg", insta: "" }
    ],
    members: [
      { name: "Kavya patel",  image: "/commities/operation/kavya.jpg", insta: "alex.codes" },
      { name: "Piyush Pareek",  image: "/commities/operation/piyush.jpg", insta: "alex.codes" },
      { name: "Maitri Gattani",  image: "/commities/operation/maitri.jpg", insta: "alex.codes" },
      { name: "Samarsingh chavda",  image: "/commities/operation/samarsingh.jpg", insta: "alex.codes" },
      { name: "Mehak Khetan",  image: "/commities/operation/mehak.jpg", insta: "alex.codes" },
      { name: "Sanyam Patel",  image: "/commities/operation/sanyam.jpg", insta: "alex.codes" },
      { name: "Diya Dixit",  image: "/commities/operation/diya.jpg", insta: "alex.codes" },
      { name: "Sonam Arya",  image: "/commities/operation/sonam.jpg", insta: "alex.codes" },
      { name: "Kushal Bhavsar",  image: "/commities/operation/kushal.jpg", insta: "alex.codes" },
      { name: "Riddhima Chaturvedi",  image: "/commities/operation/riddhima.jpg", insta: "alex.codes" },
      { name: "Bhumika Vidhani",  image: "/commities/operation/bhumika.jpg", insta: "alex.codes" },
      { name: "Brij Bhut",  image: "/commities/operation/brij.jpg", insta: "alex.codes" }, 
      { name: "Dhairya Soni",  image: "/commities/operation/dhairya.jpg", insta: "alex.codes" },
      { name: "Vrunda Patel",  image: "/commities/operation/vrunda.jpg", insta: "alex.codes" },
      { name: "Nisarg Shah",  image: "/commities/operation/nisarg.jpg", insta: "alex.codes" },
      { name: "Pranya Mehra",  image: "/commities/operation/pranya.jpg", insta: "alex.codes" },
      { name: "Henil Patel",  image: "/commities/operation/henil.jpg", insta: "alex.codes" },
      { name: "Jaiveersingh Ratnoo",  image: "/commities/operation/jaiveersingh.jpg", insta: "alex.codes" },
      { name: "Vanshika Bhardwaj",  image: "/commities/operation/vanshika.jpg", insta: "alex.codes" },
      { name: "Priyansh Ravat",  image: "/commities/operation/priyansh.jpg", insta: "alex.codes" },  ]
  },
  {
    id: "cultural",
    name: "Cultural",
    description: "Curating unforgettable experiences, from massive annual fests to intimate celebrations of art, music, and dance.",
    themeColor: "text-purple-400",
    borderColor: "border-purple-400",
    shadowColor: "shadow-[0_0_15px_rgba(192,132,252,0.4)]",
    glow: "rgba(192, 132, 252, 0.5)",
    heads: [{ name: "Shambhavi Huddar", image: "/council/shambhavi.jpg", insta: "" },
            { name: "Sahana Rajesh Iyer", image: "/council/sahana.jpg", insta: "" }
    ],
    members: [
      { name: "Abeer Peter",  image: "/commities/cultural/abeer.jpg", insta: "alex.codes" },
      { name: "Archita Jaiswal",  image: "/commities/cultural/archita.jpg", insta: "alex.codes" },
      { name: "Arth Patel ",  image: "/commities/cultural/arth.jpg", insta: "alex.codes" },
      { name: "Devanshi Chhaniyara",  image: "/commities/cultural/devanshi.jpg", insta: "alex.codes" },
      { name: "Diwan Tanishka",  image: "/commities/cultural/diwan.jpg", insta: "alex.codes" },
      { name: "Drishti",  image: "/commities/cultural/drishti.jpg", insta: "alex.codes" },
      { name: "Geethika Krishna",  image: "/commities/cultural/geethika.jpg", insta: "alex.codes" },
      { name: "Kushal Shah",  image: "/commities/cultural/kushal.jpg", insta: "alex.codes" },
      { name: "Mahek Tiwar",  image: "/commities/cultural/mahek.jpg", insta: "alex.codes" },
      { name: "Manush Shah",  image: "/commities/cultural/manush.jpg", insta: "alex.codes" },
      { name: "Meet Thakkar",  image: "/commities/cultural/meet.jpg", insta: "alex.codes" },
      { name: "Neel Desai ",  image: "/commities/cultural/neel.jpg", insta: "alex.codes" }, 
      { name: "Pranshu Vaidya",  image: "/commities/cultural/pranshu.jpg", insta: "alex.codes" },
      { name: "Rishika Sorathiya",  image: "/commities/cultural/rishika.jpg", insta: "alex.codes" },
      { name: "Saanvi Kedia",  image: "/commities/cultural/saanvi.jpg", insta: "alex.codes" },
      { name: "Srijan Singh",  image: "/commities/cultural/srijan.jpg", insta: "alex.codes" },
      { name: "Taksh Trivedi",  image: "/commities/cultural/taksh.jpg", insta: "alex.codes" },]
  },
  {
    id: "creatives",
    name: "Creatives",
    description: "The visionary artists designing UI/UX, crafting posters, and maintaining the stunning visual identity of the council.",
    themeColor: "text-fuchsia-400",
    borderColor: "border-fuchsia-400",
    shadowColor: "shadow-[0_0_15px_rgba(232,121,249,0.4)]",
    glow: "rgba(232, 121, 249, 0.5)",
    heads: [{ name: "Kanishk Rathi", image: "/council/kanishk.jpg", insta: "" },
            { name: "Amatrra Aadal Sengupta ", image: "/council/amatrra.jpg", insta: "" }],
    members: [
      { name: "Priyanshu Pareek",  image: "/commities/creatives/priyanshu.jpg", insta: "alex.codes" },
      { name: "Aditi Kushwaha ",  image: "/commities/creatives/aditi.jpg", insta: "alex.codes" },
      { name: "Arlene Walia",  image: "/commities/creatives/arlene.jpg", insta: "alex.codes" },
      { name: "Harshdeep Singh Kohli",  image: "/commities/creatives/harshdeep.jpg", insta: "alex.codes" },
      { name: "Insiya Poonawala ",  image: "/commities/creatives/insiya.jpg", insta: "alex.codes" },
      { name: "Varuna Attarde",  image: "/commities/creatives/varuna.jpg", insta: "alex.codes" },
      { name: "Mayank Ghagre ",  image: "/commities/creatives/mayank.jpg", insta: "alex.codes" },
      { name: "Deep Gaherwar",  image: "/commities/creatives/deep.jpg", insta: "alex.codes" },
      { name: "Nisha Nair ",  image: "/commities/creatives/nisha.jpg", insta: "alex.codes" },
      { name: "Aahan Kulkarni ",  image: "/commities/creatives/aahan.jpg", insta: "alex.codes" },
      { name: "Carol Kuriala",  image: "/commities/creatives/carol.jpg", insta: "alex.codes" },
      { name: "Prarthana Acharya ",  image: "/commities/creatives/prarthana.jpg", insta: "alex.codes" }, 
      { name: "Shreya Joshi",  image: "/commities/creatives/shreya.jpg", insta: "alex.codes" },
      { name: "Dhanvi Khandelwal",  image: "/commities/creatives/dhanvi.jpg", insta: "alex.codes" },
      { name: "Suravi Choraria",  image: "/commities/creatives/suravi.jpg", insta: "alex.codes" },
      { name: "Dhrithi Vuppalapati ",  image: "/commities/creatives/dhrithi.jpg", insta: "alex.codes" },
      { name: "Ronit Shroff",  image: "/commities/creatives/ronit.jpg", insta: "alex.codes" },
      { name: "Saksham Mishra ",  image: "/commities/creatives/saksham.jpg", insta: "alex.codes" },
      { name: "Janhavi Jadhav",  image: "/commities/creatives/janhavi.jpg", insta: "alex.codes" },
      { name: "Tanvi Patil",  image: "/commities/creatives/tanvi.jpg", insta: "alex.codes" }, ]
  },
  {
    id: "outreach",
    name: "Digital Outreach",
    description: "Amplifying our voice. Managing social media, PR campaigns, and connecting the council with the entire student body online.",
    themeColor: "text-blue-400",
    borderColor: "border-blue-400",
    shadowColor: "shadow-[0_0_15px_rgba(96,165,250,0.4)]",
    glow: "rgba(96, 165, 250, 0.5)",
    heads: [{ name: "Dhani padmani", image: "/council/dhani.jpg", insta: "" },
            { name: "A. Johannica Flora", image: "/council/johannica.jpg", insta: "" }],
    members: [
      { name: "Rudra mittal ",  image: "/commities/do/rudra.jpg", insta: "alex.codes" },
      { name: "Gunjan Biyani  ",  image: "/commities/do/gunjan.jpg", insta: "alex.codes" },
      { name: "Dhyana Parikh",  image: "/commities/do/dhyana.jpg", insta: "alex.codes" },
      { name: "Nisha Kalyan ",  image: "/commities/do/nisha.jpg", insta: "alex.codes" },
      { name: "Hitanshi Arora  ",  image: "/commities/do/hitanshi.jpg", insta: "alex.codes" },
      { name: "Gohel Bhavya",  image: "/commities/do/gohel.jpg", insta: "alex.codes" },
      { name: "Rajvi Thakare ",  image: "/commities/do/rajvi.jpg", insta: "alex.codes" },
      { name: "Saanvi govind ",  image: "/commities/do/saanvi.jpg", insta: "alex.codes" },
      { name: "Devansi Chatrabhuj  ",  image: "/commities/do/devansi.jpg", insta: "alex.codes" },
      { name: "Hriday Ahuja ",  image: "/commities/do/hriday.jpg", insta: "alex.codes" },
      { name: "Anurag Marwaha",  image: "/commities/do/anurag.jpg", insta: "alex.codes" },
      { name: "Vani Tibrewal  ",  image: "/commities/do/vani.jpg", insta: "alex.codes" }, 
      { name: "Tanishka Agarwal",  image: "/commities/do/tanishka.jpg", insta: "alex.codes" },
      { name: "Khush Agarwal",  image: "/commities/do/khush.jpg", insta: "alex.codes" },]
  },
  {
    id: "nazariya",
    name: "Nazariya",
    description: "The official lens of the university. Capturing every core memory, conducting interviews, and documenting the KUSGC legacy.",
    themeColor: "text-rose-400",
    borderColor: "border-rose-400",
    shadowColor: "shadow-[0_0_15px_rgba(251,113,133,0.4)]",
    glow: "rgba(251, 113, 133, 0.5)",
    heads: [{ name: "Marmik Patel", image: "/council/marmik.jpg", insta: "" },
            { name: "Kushali Bhagat ", image: "/council/kushali.jpg", insta: "" }],
    members: [
      { name: "Sameer Hulawale",  image: "/commities/nazariya/sameer.jpg", insta: "alex.codes" },
      { name: "Dhruveeka Gaurav  ",  image: "/commities/nazariya/dhruveeka.jpg", insta: "alex.codes" },
      { name: "Shiv Gamit",  image: "/commities/nazariya/shiv.jpg", insta: "alex.codes" },
      { name: "Aditya Talati",  image: "/commities/nazariya/aditya.jpg", insta: "alex.codes" },
      { name: "Anuska Rathore",  image: "/commities/nazariya/anuska.jpg", insta: "alex.codes" },
      { name: "Ashvi Ladani ",  image: "/commities/nazariya/ashvi.jpg", insta: "alex.codes" },
      { name: "Hetvi Jesalpura",  image: "/commities/nazariya/hetvi.jpg", insta: "alex.codes" },
      { name: "Hiya  Goyal",  image: "/commities/nazariya/hiya.jpg", insta: "alex.codes" },
      { name: "Anna Sarah Jacob ",  image: "/commities/nazariya/anna.jpg", insta: "alex.codes" },
      { name: "Vedika Barot",  image: "/commities/nazariya/vedika.jpg", insta: "alex.codes" },
      { name: "Gohel Denish",  image: "/commities/nazariya/gohel.jpg", insta: "alex.codes" },
      { name: "Pal Kalpeshbhai  khalasi",  image: "/commities/nazariya/pal.jpg", insta: "alex.codes" }, 
    ]
  },
  {
    id: "communication",
    name: "Communication",
    description: "The voice of the council. Drafting official statements, managing emails, and ensuring clear dialogue between students and faculty.",
    themeColor: "text-sky-400",
    borderColor: "border-sky-400",
    shadowColor: "shadow-[0_0_15px_rgba(56,189,248,0.4)]",
    glow: "rgba(56, 189, 248, 0.5)",
    heads: [{ name: "Tanaya Desai", image: "/council/tanaya.jpg", insta: "" },
            { name: "Ujjval Thakkar ", image: "/council/ujjval.jpg", insta: "" }],
    members: [
      { name: "Saujanya Kameswaran",  image: "/commities/communication/saujanya.jpg", insta: "alex.codes" },
      { name: "Jiya Shah",  image: "/commities/communication/jiya.jpg", insta: "alex.codes" },
      { name: "Manya",  image: "/commities/communication/manya.jpg", insta: "alex.codes" },
      { name: "Venish Korat",  image: "/commities/communication/venish.jpg", insta: "alex.codes" },
      { name: "Sera Sunil",  image: "/commities/communication/sera.jpg", insta: "alex.codes" },
      { name: "Hitarth Panchal ",  image: "/commities/communication/hitarth.jpg", insta: "alex.codes" },
      { name: "Aanya Shyamsukha",  image: "/commities/communication/aanya.jpg", insta: "alex.codes" },
      { name: "Hitika Padia ",  image: "/commities/communication/hitika.jpg", insta: "alex.codes" },
      { name: "Neerav Parikh ",  image: "/commities/communication/neerav.jpg", insta: "alex.codes" },
      { name: "Heeya Patel",  image: "/commities/communication/heeya.jpg", insta: "alex.codes" },
      { name: "Dhruvi sakhiya",  image: "/commities/communication/dhruvi.jpg", insta: "alex.codes" },]
  },
  {
    id: "sports",
    name: "Sports",
    description: "Fostering athleticism and team spirit. Organizing tournaments, leagues, and maintaining the competitive edge of KU.",
    themeColor: "text-orange-400",
    borderColor: "border-orange-400",
    shadowColor: "shadow-[0_0_15px_rgba(251,146,60,0.4)]",
    glow: "rgba(251, 146, 60, 0.5)",
    heads: [{ name: "Jinal Jayswal ", image: "/council/jinal.jpg", insta: "" },
            { name: "Himanshu Kumar ", image: "/council/himanshu.jpg", insta: "" }],
    members: [
      { name: "bhalani rishi ",  image: "/commities/sports/bhalani.jpg", insta: "alex.codes" },
      { name: "Arunesh Pandey ",  image: "/commities/sports/arunesh.jpg", insta: "alex.codes" },
      { name: "Aryan Thummar",  image: "/commities/sports/aryan.jpg", insta: "alex.codes" },
      { name: "Mihir Vadher ",  image: "/commities/sports/mihir.jpg", insta: "alex.codes" },
      { name: "Nitya Patel ",  image: "/commities/sports/nitya.jpg", insta: "alex.codes" },
      { name: "Meet Patel",  image: "/commities/sports/meet.jpg", insta: "alex.codes" },
      { name: "Jay rangholiya  ",  image: "/commities/sports/jay.jpg", insta: "alex.codes" },
      { name: "Saagar rao ",  image: "/commities/sports/saagar.jpg", insta: "alex.codes" },
      { name: "Hardik Lumbhani ",  image: "/commities/sports/hardik.jpg", insta: "alex.codes" },
      { name: "Dhruv Parmar ",  image: "/commities/sports/dhruv.jpg", insta: "alex.codes" },
      { name: "Kartavya Patel ",  image: "/commities/sports/kartavya.jpg", insta: "alex.codes" },
      { name: "Manan Patel",  image: "/commities/sports/manan.jpg", insta: "alex.codes" }, 
      { name: "Devanshu Patil",  image: "/commities/sports/devanshu.jpg", insta: "alex.codes" },
      { name: "Vishv Dalsaniya",  image: "/commities/sports/vishv.jpg", insta: "alex.codes" },
      { name: "Mitansh Amin ",  image: "/commities/sports/mitansh.jpg", insta: "alex.codes" },]
  },
  {
    id: "academics",
    name: "Academics",
    description: "Bridging the gap between students and curriculum. Organizing educational seminars, study groups, and academic grievances.",
    themeColor: "text-emerald-400",
    borderColor: "border-emerald-400",
    shadowColor: "shadow-[0_0_15px_rgba(52,211,153,0.4)]",
    glow: "rgba(52, 211, 153, 0.5)",
    heads: [{ name: "Shashwat Choudhury ", image: "/council/shashwat.jpg", insta: "" },
            { name: "Mary Krissana Hashley", image: "/council/mary.jpg", insta: "" }],
    members: [
      { name: "Prince patel",  image: "/commities/academics/prince.jpg", insta: "alex.codes" },
      { name: "Unnati Makwana ",  image: "/commities/academics/unnati.jpg", insta: "alex.codes" },
      { name: "Krishnavardhan ",  image: "/commities/academics/krishnavardhan.jpg", insta: "alex.codes" },
      { name: "Manan devani",  image: "/commities/academics/manan.jpg", insta: "alex.codes" },
      { name: "Jinit patel",  image: "/commities/academics/jinit.jpg", insta: "alex.codes" },
      { name: "Bhumika Agrawal ",  image: "/commities/academics/bhumika.jpg", insta: "alex.codes" },
      { name: "Kunj Patel  ",  image: "/commities/academics/kunj.jpg", insta: "alex.codes" },
      { name: "Hemangi Vyawahare ",  image: "/commities/academics/hemangi.jpg", insta: "alex.codes" },
      { name: "Nirav gehlot ",  image: "/commities/academics/nirav.jpg", insta: "alex.codes" },
      { name: "Karishma Kumawat ",  image: "/commities/academics/karishma.jpg", insta: "alex.codes" },
      { name: "Thakor Dhruvil ",  image: "/commities/academics/thakor.jpg", insta: "alex.codes" }]
  },
  {
    id: "alumni",
    name: "Alumni",
    description: "Building lifelong connections. Maintaining the alumni network and organizing mentorship programs with graduated students.",
    themeColor: "text-teal-400",
    borderColor: "border-teal-400",
    shadowColor: "shadow-[0_0_15px_rgba(45,212,191,0.4)]",
    glow: "rgba(45, 212, 191, 0.5)",
    heads: [{ name: "Shatakshi kapoor", image: "/council/shatakshi.jpg", insta: "" },
            { name: "Mehul", image: "/council/mehul.jpg", insta: "" }],
    members: [
      { name: "Ankush Hans",  image: "/commities/alumni/ankush.jpg", insta: "alex.codes" },
      { name: "Kaamil Gohel ",  image: "/commities/alumni/kaamil.jpg", insta: "alex.codes" }]
  },
  {
    id: "heal-the-world",
    name: "Heal The World",
    description: "Our dedicated foundation for social impact. Driving charity drives, environmental campaigns, and community service.",
    themeColor: "text-green-400",
    borderColor: "border-green-400",
    shadowColor: "shadow-[0_0_15px_rgba(74,222,128,0.4)]",
    glow: "rgba(74, 222, 128, 0.5)",
    heads: [{ name: "Mehta Bhavya", image: "/council/bhavya.jpg", insta: "" },
            { name: "Avadh goswami ", image: "/council/avadh.jpg", insta: "" }],
    members: [
      { name: "Soumya Khode",  image: "/commities/htwf/soumya.jpg", insta: "alex.codes" },
      { name: "Prachi Badiyani",  image: "/commities/htwf/prachi.jpg", insta: "alex.codes" },
      { name: "Harsh Vardhan  ",  image: "/commities/htwf/harsh.jpg", insta: "alex.codes" },
      { name: "Hitarth Patel ",  image: "/commities/htwf/hitarth.jpg", insta: "alex.codes" },
      { name: "Aashna daga ",  image: "/commities/htwf/aashna.jpg", insta: "alex.codes" },
      { name: "chinmay",  image: "/commities/htwf/chinmay.jpg", insta: "alex.codes" },
      { name: "Harshvardhan Singh ",  image: "/commities/htwf/harshvardhan.jpg", insta: "alex.codes" },]
  },
  {
    id: "radio",
    name: "Radio",
    description: "The sound of the campus. Running podcasts, live broadcasts, and audio entertainment for the university community.",
    themeColor: "text-pink-400",
    borderColor: "border-pink-400",
    shadowColor: "shadow-[0_0_15px_rgba(244,114,182,0.4)]",
    glow: "rgba(244, 114, 182, 0.5)",
    heads: [{ name: "Sehaj Saluja", image: "/council/sehaj.jpg", insta: "" },
            { name: "Mansoor Anas ", image: "/council/mansoor.jpg", insta: "" }],
    members: [
      { name: "Sara Gupta",  image: "/commities/radio/sara.jpg", insta: "alex.codes" },
      { name: "Krati Jain ",  image: "/commities/radio/krati.jpg", insta: "alex.codes" }]
  }
];

export default function DepartmentsPage() {
  const [activeTeam, setActiveTeam] = useState<typeof committeesData[0] | null>(null);

  // Helper functions for fallbacks
  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  const getHandle = (name: string, fallback: string) => `${name.split(' ')[0].toLowerCase()}_${fallback.toLowerCase()}`;

  useEffect(() => {
    if (activeTeam) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeTeam]);

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-[#05050A] text-white overflow-hidden pb-32">
        
        <div className="fixed inset-0 pointer-events-none z-0">
          <AnimatedOrb />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <section className="relative z-10 pt-40 pb-16 px-6 text-center max-w-4xl mx-auto">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">OUR CORE PILLARS</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-2">Council</h1>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-4">Committees</h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Discover the specialized teams working behind the scenes to engineer incredible experiences, drive innovation, and elevate campus life.
          </p>
        </section>

        <section className="relative z-10 max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {committeesData.map((team) => (
              <div 
                key={team.id}
                onClick={() => setActiveTeam(team)}
                className="group flex flex-col rounded-2xl bg-[#0F0F16]/80 backdrop-blur-md border border-white/5 p-8 h-[360px] cursor-pointer relative z-20 transition-all duration-500 hover:bg-[#151520] hover:-translate-y-2"
                style={{ boxShadow: `0 0 15px ${team.glow.replace('0.5', '0.08')}` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 15px 50px ${team.glow}`;
                  e.currentTarget.style.borderColor = team.glow.replace('0.5', '0.4');
                }}
                onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = `0 0 15px ${team.glow.replace('0.5', '0.08')}`;
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
  }}
>
  <img src={team.image || "/logo.jpg"} alt={team.name} className={`w-12 h-12 rounded-[14px] bg-black object-cover border-2 ${team.borderColor} ${team.shadowColor} mb-8`} />
  <h3 className="text-2xl font-bold text-white mb-4">{team.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed flex-grow pr-4">{team.description}</p>
                <div className={`mt-4 w-fit flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${team.themeColor}`}>
                  EXPLORE TEAM <span className="text-lg leading-none transition-transform group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="relative z-10 bg-[#05050A]">
        <Footer />
      </div>

      {/* --- MODAL POPUP --- */}
      {activeTeam && (
        <div className="fixed inset-0 z-[99999] text-white overflow-y-auto">
          
          {/* LOCKED BACKGROUND LAYER */}
          <div className="fixed inset-0 bg-[#05050A] pointer-events-none z-0">
            <AnimatedOrb />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 min-h-screen flex flex-col">
            <button onClick={() => setActiveTeam(null)} className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors w-fit mb-12 group cursor-pointer">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">Back to Committees</span>
            </button>

            <div className="mb-16">
  <img src={activeTeam.image || "/logo.png"} alt={activeTeam.name} className={`w-16 h-16 rounded-[18px] bg-black object-cover border-2 ${activeTeam.borderColor} ${activeTeam.shadowColor} mb-6`} />
  <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
                {activeTeam.name} Team
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl">{activeTeam.description}</p>
            </div>

            {/* --- TEAM LEADERSHIP CARDS (NO ROLE, ALWAYS VISIBLE TEXT) --- */}
            <div className="mb-16">
              <h3 className={`text-sm font-bold uppercase tracking-[0.3em] ${activeTeam.themeColor} mb-8 border-b border-white/10 pb-4`}>
                Team Leadership
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {activeTeam.heads.map((head, idx) => (
                  <div 
                    key={idx} 
                    className="group relative flex flex-col rounded-3xl border border-white/10 bg-[#0F0F16]/80 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                    style={{ boxShadow: `0 0 15px ${activeTeam.glow.replace('0.5', '0.05')}` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 15px 40px ${activeTeam.glow}`;
                      e.currentTarget.style.borderColor = activeTeam.glow.replace('0.5', '0.5');
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 15px ${activeTeam.glow.replace('0.5', '0.05')}`;
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <div className="relative w-full h-64 bg-zinc-900 overflow-hidden flex items-center justify-center">
                      {head.image ? (
                        <img src={head.image} alt={head.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      ) : (
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                      )}
                      {!head.image && <span className="text-6xl font-black text-zinc-700 z-10">{getInitials(head.name)}</span>}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F16] via-[#0F0F16]/40 to-transparent"></div>
                    </div>
                    
                    <div className="p-6 relative z-10 flex flex-col items-center text-center -mt-6">
                      <h4 className="text-xl font-black text-white mb-4 tracking-tight">{head.name}</h4>
                      {/* ROLE REMOVED HERE */}
                      
                      {/* INSTAGRAM BUTTON */}
                      {head.insta ? (
                        <a href={`https://instagram.com/${head.insta}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-xs text-zinc-300 font-bold hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 w-full">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.168.053 1.8.252 2.223.417.561.217.962.476 1.382.896.42.42.679.821.896 1.382.165.423.364 1.055.417 2.223.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.168-.252 1.8-.417 2.223-.217.561-.476.962-.896 1.382-.42.42-.821.679-1.382.896-.423.165-1.055.364-2.223.417-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.168-.053-1.8-.252-2.223-.417-.561-.217-.962-.476-1.382-.896-.42-.42-.679-.821-.896-1.382-.165-.423-.364-1.055-.417-2.223-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.168.252-1.8.417-2.223.217-.561.476-.962.896-1.382.42-.42.821-.679 1.382-.896.423-.165 1.055-.364 2.223-.417 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.277.058-2.148.261-2.91.558-.787.305-1.455.714-2.126 1.385-.671.671-1.08 1.339-1.385 2.126-.297.762-.5 1.633-.558 2.91-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.277.261 2.148.558 2.91.305.787.714 1.455 1.385 2.126.671.671 1.339 1.08 2.126 1.385.762.297 1.633.5 2.91.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.058 2.148-.261 2.91-.558.787-.305 1.455-.714 2.126-1.385.671-.671 1.08-1.339 1.385-2.126.297-.762.5-1.633.558-2.91.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.277-.261-2.148-.558-2.91-.305-.787-.714-1.455-1.385-2.126-.671-.671-1.339-1.08-2.126-1.385-.762-.297-1.633-.5-2.91-.558-.787-.058-1.28-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                          @{head.insta}
                        </a>
                      ) : (
                        <p className="text-[11px] text-zinc-500 font-medium">@{getHandle(head.name, "KUSGC")}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- CORE MEMBERS CARDS (NO ROLE, ALWAYS VISIBLE TEXT) --- */}
            {activeTeam.members && activeTeam.members.length > 0 && (
              <div className="mb-12 flex-grow">
                <h3 className={`text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8 border-b border-white/10 pb-4`}>
                  Core Members
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {activeTeam.members.map((member, idx) => (
                    <div 
                      key={idx} 
                      className="group relative flex flex-col rounded-3xl border border-white/10 bg-[#0F0F16]/50 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                      style={{ boxShadow: `0 0 10px rgba(0,0,0,0)` }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 10px 30px ${activeTeam.glow.replace('0.5', '0.3')}`;
                        e.currentTarget.style.borderColor = activeTeam.glow.replace('0.5', '0.3');
                        e.currentTarget.style.backgroundColor = 'rgba(15, 15, 22, 0.8)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 10px rgba(0,0,0,0)`;
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.backgroundColor = 'rgba(15, 15, 22, 0.5)';
                      }}
                    >
                      <div className="relative w-full h-56 bg-zinc-900 overflow-hidden flex items-center justify-center">
                        {member.image ? (
                          <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                        ) : (
                          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                        )}
                        {!member.image && <span className="text-5xl font-black text-zinc-700 z-10">{getInitials(member.name)}</span>}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F16] via-[#0F0F16]/40 to-transparent"></div>
                      </div>
                      
                      <div className="p-6 relative z-10 flex flex-col items-center text-center -mt-6">
                        <h4 className="text-lg font-bold text-white mb-4 tracking-tight">{member.name}</h4>
                        {/* ROLE REMOVED HERE */}

                        {/* INSTAGRAM BUTTON */}
                        {member.insta ? (
                          <a href={`https://instagram.com/${member.insta}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-400 font-bold hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/5 hover:border-white/20 w-full">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.168.053 1.8.252 2.223.417.561.217.962.476 1.382.896.42.42.679.821.896 1.382.165.423.364 1.055.417 2.223.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.168-.252 1.8-.417 2.223-.217.561-.476.962-.896 1.382-.42.42-.821.679-1.382.896-.423.165-1.055.364-2.223.417-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.168-.053-1.8-.252-2.223-.417-.561-.217-.962-.476-1.382-.896-.42-.42-.679-.821-.896-1.382-.165-.423-.364-1.055-.417-2.223-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.168.252-1.8.417-2.223.217-.561.476-.962.896-1.382.42-.42.821-.679 1.382-.896.423-.165 1.055-.364 2.223-.417 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.277.058-2.148.261-2.91.558-.787.305-1.455.714-2.126 1.385-.671.671-1.08 1.339-1.385 2.126-.297.762-.5 1.633-.558 2.91-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.277.261 2.148.558 2.91.305.787.714 1.455 1.385 2.126.671.671 1.339 1.08 2.126 1.385.762.297 1.633.5 2.91.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.058 2.148-.261 2.91-.558.787-.305 1.455-.714 2.126-1.385.671-.671 1.08-1.339 1.385-2.126.297-.762.5-1.633.558-2.91.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.277-.261-2.148-.558-2.91-.305-.787-.714-1.455-1.385-2.126-.671-.671-1.339-1.08-2.126-1.385-.762-.297-1.633-.5-2.91-.558-.787-.058-1.28-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            @{member.insta}
                          </a>
                        ) : (
                          <p className="text-[10px] text-zinc-600 font-medium">@{getHandle(member.name, "KUSGC")}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}