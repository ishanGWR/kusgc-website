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
    image: "/commities/logo/Tech.jpg",
    description: "Building the digital infrastructure, managing web platforms, and driving technological innovation across the campus.",
    themeColor: "text-cyan-400",
    borderColor: "border-cyan-400",
    shadowColor: "shadow-[0_0_15px_rgba(34,211,238,0.4)]",
    glow: "rgba(34, 211, 238, 0.5)",
    heads: [{ name: "Ishan Chouhan", image: "/council/Ishan.jpg", insta: "Ishann_412" },
            { name: "Maun Patel",  image: "/council/Maun.jpg", insta: "maun_patel" 
    }],
    members: [
      { name: "Vadit Bhatti",  image: "/commities/Tech/Vadit.jpg", insta: "hey.vadiitt_" },
      { name: "Gayatri Raval",  image: "/commities/Tech/Gayatri.jpg", insta: "gayatriraval07" },
      { name: "Yug Mehta",  image: "/commities/Tech/Yug.jpg", insta: "y_mehta2516" },
      { name: "Harry Sijo",  image: "/commities/Tech/Harry.jpg", insta: "harrysijo" },
      { name: "Daksh Panchal",  image: "/commities/Tech/Daksh.jpg", insta: "about.dp" },
      { name: "Rishi Patel",  image: "/commities/Tech/Rishi.jpg", insta: "rishi_patel4565" },     
    ]
  },
  {
    id: "operation",
    name: "Operation",
    image: "/commities/logo/Operation.jpg",
    description: "The backbone of the council. Handling logistics, event execution, and ensuring seamless day-to-day management.",
    themeColor: "text-indigo-400",
    borderColor: "border-indigo-400",
    shadowColor: "shadow-[0_0_15px_rgba(129,140,248,0.4)]",
    glow: "rgba(129, 140, 248, 0.5)",
    heads: [{ name: "Maahi Agrawal", image: "/council/Maahi.jpg", insta: "maahi.agr" },
            { name: "Vanshika Gupta",  image: "/council/Vanshika.jpg", insta: "vanshikagupta.22" }
    ],
    members: [
      { name: "Kavya patel",  image: "/commities/operation/Kavya.jpg", insta: "_kavya_patel_19_" },
      { name: "Piyush Pareek",  image: "/commities/operation/Piyush.jpeg", insta: "Piyushpareek_25" },
      { name: "Maitri Gattani",  image: "/commities/operation/Maitri.jpg", insta: "maitrigattani" },
      { name: "Samarsingh chavda",  image: "/commities/operation/Samarsingh.jpg", insta: "samarsingh_chavda" },
      { name: "Mehak Khetan",  image: "/commities/operation/Mehak.jpg", insta: "mehak_khetan" },
      { name: "Sanyam Patel",  image: "/commities/operation/Sanyam.jpg", insta: "sanyampatel_555" },
      { name: "Diya Dixit",  image: "/commities/operation/Diya.jpg", insta: "diyaadixit.music" },
      { name: "Sonam Arya",  image: "/commities/operation/Sonam.jpg", insta: "_sonam._.2017" },
      { name: "Kushal Bhavsar",  image: "/commities/operation/Kushal.jpg", insta: "_kushalb_18" },
      { name: "Riddhima Chaturvedi",  image: "/commities/operation/Riddhima.jpg", insta: "riddhima1210" },
      { name: "Bhumika Vidhani",  image: "/commities/operation/Bhumika.jpg", insta: "bhumika_vidhani " },
      { name: "Brij Bhut",  image: "/commities/operation/Brij.jpg", insta: "brij_smile" }, 
      { name: "Dhairya Soni",  image: "/commities/operation/Dhairya.jpg", insta: "not.dhairya" },
      { name: "Vrunda Patel",  image: "/commities/operation/Vrunda.jpg", insta: "_.vrunda.03" },
      { name: "Nisarg Shah",  image: "/commities/operation/Nisarg.jpg", insta: "nisargshah0907" },
      { name: "Pranya Mehra",  image: "/commities/operation/Pranya.jpg", insta: "pranyamehr" },
      { name: "Henil Patel",  image: "/commities/operation/Henil.jpg", insta: "henil__1208" },
      { name: "Jaiveersingh Ratnoo",  image: "/commities/operation/Jaiveersingh.jpg", insta: "jaiveer_ratnoo" },
      { name: "Vanshika Bhardwaj",  image: "/commities/operation/Vanshika.jpg", insta: "vanshikabhardwaj_47" },
      { name: "Priyansh Ravat",  image: "/commities/operation/Priyansh.jpg", insta: "priyansh_ravat_005" },  ]
  },
  {
    id: "cultural",
    name: "Cultural",
    image: "/commities/logo/culturals.jpg",
    description: "Curating unforgettable experiences, from massive annual fests to intimate celebrations of art, music, and dance.",
    themeColor: "text-purple-400",
    borderColor: "border-purple-400",
    shadowColor: "shadow-[0_0_15px_rgba(192,132,252,0.4)]",
    glow: "rgba(192, 132, 252, 0.5)",
    heads: [{ name: "Shambhavi Huddar", image: "/council/Shambhavi.jpg", insta: "shambhavi_huddar" },
            { name: "Sahana Rajesh Iyer", image: "/council/Sahana.jpg", insta: "w.l.i.t.h_sahana" }
    ],
    members: [
      { name: "Abeer Peter",  image: "/commities/cultural/Abeer.jpg", insta: "abeer_peter12" },
      { name: "Archita Jaiswal",  image: "/commities/cultural/Archita.jpg", insta: "archita1266" },
      { name: "Arth Patel ",  image: "/commities/cultural/Arth.jpg", insta: "arthpatel_01" },
      { name: "Devanshi Chhaniyara",  image: "/commities/cultural/Devanshi.jpg", insta: "devanshi.chhaniyara" },
      { name: "Diwan Tanishka",  image: "/commities/cultural/Diwan.jpg", insta: "tanishhka__01" },
      { name: "Drishti",  image: "/commities/cultural/Drishti.jpg", insta: "drishti_agg19 " },
      { name: "Geethika Krishna",  image: "/commities/cultural/Geethika.jpg", insta: "geethika_krishna_" },
      { name: "Kushal Shah",  image: "/commities/cultural/Kushal.jpg", insta: "kushalshah10" },
      { name: "Mahek Tiwar",  image: "/commities/cultural/Mahek.jpg", insta: "mahekt07" },
      { name: "Manush Shah",  image: "/commities/cultural/Manush.jpg", insta: "manushshah2306" },
      { name: "Meet Thakkar",  image: "/commities/cultural/Meet.jpg", insta: "meet.thakkar20" },
      { name: "Neel Desai ",  image: "/commities/cultural/Neel.jpg", insta: "neeld_79" }, 
      { name: "Pranshu Vaidya",  image: "/commities/cultural/Pranshu.jpg", insta: "pranshuuvaidya" },
      { name: "Rishika Sorathiya",  image: "/commities/cultural/Rishika.jpg", insta: "" },
      { name: "Saanvi Kedia",  image: "/commities/cultural/Saanvi.jpg", insta: "saanvi_kedia7" },
      { name: "Srijan Singh",  image: "/commities/cultural/Srijan.jpg", insta: "toji_kento_7" },
      { name: "Taksh Trivedi",  image: "/commities/cultural/Taksh.jpg", insta: "taksh_125" },]
  },
  {
    id: "creatives",
    name: "Creatives",
    image: "/commities/logo/creatives.jpg",
    description: "The visionary artists designing UI/UX, crafting posters, and maintaining the stunning visual identity of the council.",
    themeColor: "text-fuchsia-400",
    borderColor: "border-fuchsia-400",
    shadowColor: "shadow-[0_0_15px_rgba(232,121,249,0.4)]",
    glow: "rgba(232, 121, 249, 0.5)",
    heads: [{ name: "Kanishk Rathi", image: "/council/kanishk.jpg", insta: "kanishkrathi" },
            { name: "Amatrra Aadal Sengupta ", image: "/council/Amatrra.jpg", insta: "23_amatrra_" }],
    members: [
      { name: "Priyanshu Pareek",  image: "/commities/creatives/Priyanshu.jpg", insta: "prii.shuu.1908" },
      { name: "Aditi Kushwaha ",  image: "/commities/creatives/Aditi.jpg", insta: "Aditi__kushwaha_" },
      { name: "Arlene Walia",  image: "/commities/creatives/Arlene.jpg", insta: "arlenewalia" },
      { name: "Harshdeep Singh Kohli",  image: "/commities/creatives/Harshdeep.jpg", insta: "kohliharsh10" },
      { name: "Insiya Poonawala ",  image: "/commities/creatives/Insiya.jpg", insta: "Insiyahahahaa" },
      { name: "Varuna Attarde",  image: "/commities/creatives/Varuna.jpg", insta: "varunaaa.a" },
      { name: "Mayank Ghagre ",  image: "/commities/creatives/Mayank.jpg", insta: "mayank_ghagre" },
      { name: "Deep Gaherwar",  image: "/commities/creatives/Deep.jpg", insta: "likelytobedisliked" },
      { name: "Nisha Nair ",  image: "/commities/creatives/Nisha.jpg", insta: "nisha.n026" },
      { name: "Aahan Kulkarni ",  image: "/commities/creatives/Aahan.jpg", insta: "wheel_n_spoon" },
      { name: "Carol Kuriala",  image: "/commities/creatives/Carol.jpg", insta: "carol.kuriala " },
      { name: "Prarthana Acharya ",  image: "/commities/creatives/Prarthana.jpg", insta: "__prarthanaaaa" }, 
      { name: "Shreya Joshi",  image: "/commities/creatives/Shreya.jpg", insta: "shreya_joshi2210" },
      { name: "Dhanvi Khandelwal",  image: "/commities/creatives/Dhanvi.jpg", insta: "dhanvi.khandelwal" },
      { name: "Suravi Choraria",  image: "/commities/creatives/Suravi.jpg", insta: "suravii.c" },
      { name: "Dhrithi Vuppalapati ",  image: "/commities/creatives/Dhrithi.jpg", insta: "dhrithivarmaa " },
      { name: "Ronit Shroff",  image: "/commities/creatives/ronit.jpg", insta: "ronitxshroff" },
      { name: "Saksham Mishra ",  image: "/commities/creatives/saksham.jpg", insta: "__saksham__mishra__" },
      { name: "Janhavi Jadhav",  image: "/commities/creatives/janhavi.jpg", insta: "janhavijadhavv " },
      { name: "Tanvi Patil",  image: "/commities/creatives/tanvi.jpg", insta: "tanvipatil722" }, ]
  },
  {
    id: "outreach",
    name: "Digital Outreach",
    image: "/commities/logo/Do.jpg",
    description: "Amplifying our voice. Managing social media, PR campaigns, and connecting the council with the entire student body online.",
    themeColor: "text-blue-400",
    borderColor: "border-blue-400",
    shadowColor: "shadow-[0_0_15px_rgba(96,165,250,0.4)]",
    glow: "rgba(96, 165, 250, 0.5)",
    heads: [{ name: "Dhani padmani", image: "/council/Dhani.jpg", insta: "dhani1547" },
            { name: "A. Johannica Flora", image: "/council/Johannica.jpg", insta: "johannica_flora05" }],
    members: [
      { name: "Rudra mittal ",  image: "/commities/do/Rudra.jpg", insta: "xrudy20" },
      { name: "Gunjan Biyani  ",  image: "/commities/do/Gunjan.jpg", insta: "gunjan_biyani" },
      { name: "Dhyana Parikh",  image: "/commities/do/Dhyana.jpg", insta: "_dhyxnx" },
      { name: "Nisha Kalyan ",  image: "/commities/do/Nisha.jpg", insta: "nxshmk" },
      { name: "Hitanshi Arora  ",  image: "/commities/do/Hitanshi.jpg", insta: "hitanshiiiiiiiiiii" },
      { name: "Gohel Bhavya",  image: "/commities/do/Bhavy.jpg", insta: "_gohel.bhavy_" },
      { name: "Rajvi Thakare ",  image: "/commities/do/Rajvi.jpg", insta: "_rajvithakare01" },
      { name: "Saanvi govind ",  image: "/commities/do/Saanvi.jpg", insta: "saanvi_g007" },
      { name: "Devansi Chatrabhuj  ",  image: "/commities/do/Devansi.jpg", insta: "devansii.c" },
      { name: "Hriday Ahuja ",  image: "/commities/do/Hriday.jpg", insta: "Hriday_202005" },
      { name: "Anurag Marwaha",  image: "/commities/do/Anurag.jpg", insta: "eliteannurag" },
      { name: "Vani Tibrewal  ",  image: "/commities/do/Vani.jpg", insta: "vanitibrewal " }, 
      { name: "Tanishka Agarwal",  image: "/commities/do/Tanishka.jpg", insta: "tanishk4s" },
      { name: "Khush Agarwal",  image: "/commities/do/Khush.jpg", insta: "khushagarwal._" },]
  },
  {
    id: "nazariya",
    name: "Nazariya",
    image: "/commities/logo/nazariya.jpg",
    description: "The official lens of the university. Capturing every core memory, conducting interviews, and documenting the KUSGC legacy.",
    themeColor: "text-rose-400",
    borderColor: "border-rose-400",
    shadowColor: "shadow-[0_0_15px_rgba(251,113,133,0.4)]",
    glow: "rgba(251, 113, 133, 0.5)",
    heads: [{ name: "Marmik Patel", image: "/council/Marmik.jpg", insta: "mxrmik.27" },
            { name: "Kushali Bhagat ", image: "/council/Kushali.jpg", insta: "kushali_bhagat" }],
    members: [
      { name: "Sameer Hulawale",  image: "/commities/nazariya/Sameer.jpg", insta: "sam.arch1ve" },
      { name: "Dhruveeka Gaurav  ",  image: "/commities/nazariya/Dhruveeka.jpg", insta: "_dhruvee.ka" },
      { name: "Shiv Gamit",  image: "/commities/nazariya/Shiv.jpg", insta: "shivv_paradox" },
      { name: "Aditya Talati",  image: "/commities/nazariya/Aditya.jpg", insta: "adityatalatii" },
      { name: "Anushka Rathore",  image: "/commities/nazariya/Anushka.jpg", insta: "snoozy_vz" },
      { name: "Ashvi Ladani ",  image: "/commities/nazariya/Ashvi.jpg", insta: "ashvi.ladani" },
      { name: "Hetvi Jesalpura",  image: "/commities/nazariya/Hetvi.jpg", insta: "hetvi_j2730" },
      { name: "Hiya  Goyal",  image: "/commities/nazariya/Hiya.jpg", insta: "hiya.social" },
      { name: "Anna Sarah Jacob ",  image: "/commities/nazariya/Anna.jpg", insta: "" },
      { name: "Vedika Barot",  image: "/commities/nazariya/Vedika.jpg", insta: "vediiiiiiika" },
      { name: "Gohel Denish",  image: "/commities/nazariya/Gohel.jpg", insta: "denishh__05 " },
      { name: "Pal Kalpeshbhai  khalasi",  image: "/commities/nazariya/Pal.jpg", insta: "pal.khalasi" }, 
    ]
  },
  {
    id: "communication",
    name: "Communication",
    image: "/commities/logo/communication.jpg",
    description: "The voice of the council. Drafting official statements, managing emails, and ensuring clear dialogue between students and faculty.",
    themeColor: "text-sky-400",
    borderColor: "border-sky-400",
    shadowColor: "shadow-[0_0_15px_rgba(56,189,248,0.4)]",
    glow: "rgba(56, 189, 248, 0.5)",
    heads: [{ name: "Tanaya Desai", image: "/council/Tanaya.jpg", insta: "tanaya_desai14" },
            { name: "Ujjval Thakkar ", image: "/council/Ujjval.jpg", insta: "ujjval6428" }],
    members: [
      { name: "Saujanya Kameswaran",  image: "/commities/communication/Saujanya.jpg", insta: "_saujanyya._22" },
      { name: "Jiya Shah",  image: "/commities/communication/Jiya.jpg", insta: "jiyashah_06" },
      { name: "Manya",  image: "/commities/communication/Manya.jpg", insta: "manyabathla_" },
      { name: "Venish Korat",  image: "/commities/communication/Venish.jpg", insta: "venish_korat_" },
      { name: "Sera Sunil",  image: "/commities/communication/Sera.jpg", insta: "" },
      { name: "Hitarth Panchal ",  image: "/commities/communication/Hitarth.jpg", insta: "hitarth.23___" },
      { name: "Aanya Shyamsukha",  image: "/commities/communication/Aanya.jpg", insta: "aanyas.17" },
      { name: "Hitika Padia ",  image: "/commities/communication/Hitika.jpg", insta: "hitikapadia_" },
      { name: "Neerav Parikh ",  image: "/commities/communication/Neerav.jpg", insta: "neeravparikh" },
      { name: "Heeya Patel",  image: "/commities/communication/Heeya.jpg", insta: "heeyapatel__12" },
      { name: "Dhruvi sakhiya",  image: "/commities/communication/Dhruvi.jpg", insta: "" },]
  },
  {
    id: "sports",
    name: "Sports",
    image: "/commities/logo/sports.jpg",
    description: "Fostering athleticism and team spirit. Organizing tournaments, leagues, and maintaining the competitive edge of KU.",
    themeColor: "text-orange-400",
    borderColor: "border-orange-400",
    shadowColor: "shadow-[0_0_15px_rgba(251,146,60,0.4)]",
    glow: "rgba(251, 146, 60, 0.5)",
    heads: [{ name: "Jinal Jayswal ", image: "/council/Jinal.jpg", insta: "jinaljayswall" },
            { name: "Himanshu Kumar ", image: "/council/Himanshu.jpg", insta: "__kumarhimanshu" }],
    members: [
      { name: "bhalani rishi ",  image: "/commities/sports/Bhalani.jpg", insta: "___rishi_19" },
      { name: "Arunesh Pandey ",  image: "/commities/sports/Arunesh.jpg", insta: "urss.arunn" },
      { name: "Aryan Thummar",  image: "/commities/sports/Aryan.jpg", insta: "_.aryanthummar._" },
      { name: "Mihir Vadher ",  image: "/commities/sports/Mihir.jpg", insta: "mihir.core_" },
      { name: "Nitya Patel ",  image: "/commities/sports/Nitya.jpg", insta: "" },
      { name: "Meet Patel",  image: "/commities/sports/Meet.jpg", insta: "meetpatel_160" },
      { name: "Jay rangholiya  ",  image: "/commities/sports/Jay.jpg", insta: "jay_rangholiya" },
      { name: "Saagar rao ",  image: "/commities/sports/Saagar.jpg", insta: "whosaagar_" },
      { name: "Hardik Lumbhani ",  image: "/commities/sports/Hardik.jpg", insta: "hardik_lumbhani7" },
      { name: "Dhruv Parmar ",  image: "/commities/sports/Dhruv.jpg", insta: "dhxuv__1" },
      { name: "Kartavya Patel ",  image: "/commities/sports/Kartavya.jpg", insta: "Kartavyaa__27" },
      { name: "Manan Patel",  image: "/commities/sports/Manan.jpg", insta: "manan_patel264" }, 
      { name: "Devanshu Patil",  image: "/commities/sports/Devanshu.jpg", insta: "devanshu_patil.2017" },
      { name: "Vishv Dalsaniya",  image: "/commities/sports/Vishv.jpg", insta: "vishv_dalsaniya" },
      { name: "Mitansh Amin ",  image: "/commities/sports/Mitansh.jpg", insta: "Mitansh_patel_1206" },]
  },
  {
    id: "academics",
    name: "Academics",
    image: "/commities/logo/academics.jpg",
    description: "Bridging the gap between students and curriculum. Organizing educational seminars, study groups, and academic grievances.",
    themeColor: "text-emerald-400",
    borderColor: "border-emerald-400",
    shadowColor: "shadow-[0_0_15px_rgba(52,211,153,0.4)]",
    glow: "rgba(52, 211, 153, 0.5)",
    heads: [{ name: "Shashwat Choudhury ", image: "/council/Shashwat.jpg", insta: "shashwhatttf" },
            { name: "Mary Krissana Hashley", image: "/council/Mary.jpg", insta: "krisstastrophe__" }],
    members: [
      { name: "Prince patel",  image: "/commities/academics/Prince.jpg", insta: "patelpriince" },
      { name: "Unnati Makwana ",  image: "/commities/academics/Unnati.jpg", insta: "unnatiiii_5 " },
      { name: "Krishnavardhan ",  image: "/commities/academics/Krishnavardhan.jpg", insta: "krishnvardhansinghchauhan" },
      { name: "Manan devani",  image: "/commities/academics/Manan.jpg", insta: "manan_2706" },
      { name: "Jinit patel",  image: "/commities/academics/Jinit.jpg", insta: "jinitpatel_03" },
      { name: "Bhumika Agrawal ",  image: "/commities/academics/Bhumika.jpg", insta: "bh_agrawal" },
      { name: "Kunj Patel  ",  image: "/commities/academics/Kunj.jpg", insta: "kunjpatel_88" },
      { name: "Hemangi Vyawahare ",  image: "/commities/academics/Hemangi.jpg", insta: "hemangivyawahare" },
      { name: "Nirav gehlot ",  image: "/commities/academics/Nirav.jpg", insta: "nirav.vvvvvv" },
      { name: "Karishma Kumawat ",  image: "/commities/academics/Karishma.jpg", insta: "alex.codes" }]
  },
  {
    id: "alumni",
    name: "Alumni",
    image: "/commities/logo/alumni.jpg",
    description: "Building lifelong connections. Maintaining the alumni network and organizing mentorship programs with graduated students.",
    themeColor: "text-teal-400",
    borderColor: "border-teal-400",
    shadowColor: "shadow-[0_0_15px_rgba(45,212,191,0.4)]",
    glow: "rgba(45, 212, 191, 0.5)",
    heads: [{ name: "Shatakshi kapoor", image: "/council/Shatakshi.jpg", insta: "shatakshi._kapoor" },
            { name: "Mehul", image: "/council/Mehul.jpg", insta: "mehul_2403" }],
    members: [
      { name: "Ankush Hans",  image: "/commities/alumni/Ankush.jpg", insta: "its.4nku5h" },
      { name: "Kaamil Gohel ",  image: "/commities/alumni/Kaamil.jpg", insta: "kaamilgohel1210" }]
  },
  {
    id: "heal-the-world",
    name: "Heal The World",
    image: "/commities/logo/htw.jpg",
    description: "Our dedicated foundation for social impact. Driving charity drives, environmental campaigns, and community service.",
    themeColor: "text-green-400",
    borderColor: "border-green-400",
    shadowColor: "shadow-[0_0_15px_rgba(74,222,128,0.4)]",
    glow: "rgba(74, 222, 128, 0.5)",
    heads: [{ name: "Mehta Bhavya", image: "/council/Bhavya.jpg", insta: "mehtabhavya" },
            { name: "Avadh goswami ", image: "/council/Avadh.jpg", insta: "avadhgoswami " }],
    members: [
      { name: "Soumya Khode",  image: "/commities/htwf/Soumya.jpg", insta: "Khode_24" },
      { name: "Prachi Badiyani",  image: "/commities/htwf/Prachi.jpg", insta: "p_badiyxni03" },
      { name: "Harsh Vardhan  ",  image: "/commities/htwf/Harsh.jpg", insta: "harsh__1905_" },
      { name: "Hitarth Patel ",  image: "/commities/htwf/Hitarth.jpg", insta: "hitarth_550_" },
      { name: "Aashna daga ",  image: "/commities/htwf/Aashna.jpg", insta: "aashnadagaaa " },
      { name: "chinmay",  image: "/commities/htwf/Chinmay.jpg", insta: "" },
      { name: "Harshvardhan Singh ",  image: "/commities/htwf/Harshvardhan.jpg", insta: "" },]
  },
  {
    id: "radio",
    name: "Radio",
    image: "/commities/logo/radio.jpg",
    description: "The sound of the campus. Running podcasts, live broadcasts, and audio entertainment for the university community.",
    themeColor: "text-pink-400",
    borderColor: "border-pink-400",
    shadowColor: "shadow-[0_0_15px_rgba(244,114,182,0.4)]",
    glow: "rgba(244, 114, 182, 0.5)",
    heads: [{ name: "Sehaj Saluja", image: "/council/Sehaj.jpg", insta: "sehaj.saluja" },
            { name: "Mansoor Anas ", image: "/council/Mansoor.jpg", insta: "mansooranas" }],
    members: [
      { name: "Sara Gupta",  image: "/commities/radio/Sara.jpg", insta: "sara.gupta2706" },
      { name: "Krati Jain ",  image: "/commities/radio/Krati.jpg", insta: "krazy_komet_" }]
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