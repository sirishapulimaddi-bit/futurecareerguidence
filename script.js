/**
 * CareerPath - Multi-Screen Presentation Controller
 * Slide-by-slide Navigation: Welcome -> Profile -> Suggestions -> Details -> Courses -> About
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Career Database (Curated for Class 10 & 12 Pathways)
     ========================================================================== */
  const CAREERS_DATA = [
    {
      id: 'software-dev',
      title: '💻 Software & App Developer',
      category: 'Technology',
      stage: 'both',
      stageLabel: '🎒 10th & 🎓 12th',
      shortDesc: 'మీరు వాడే Instagram, WhatsApp, FreeFire లాంటి మొబైల్ యాప్స్ & వెబ్‌సైట్లను కోడింగ్ ద్వారా బిల్డ్ చేసే సూపర్ జాబ్!',
      whatTheyDo: 'లాప్‌టాప్‌లో కూర్చుని కోడింగ్ రాస్తూ కొత్త మొబైల్ యాప్స్, వెబ్‌సైట్లు లేదా వీడియో గేమ్స్ తయారు చేస్తారు!',
      salaryMeter: '💸💸💸 Super Rich (₹8L - ₹30L+)',
      brainEffort: '🧠🧠 Logic & Practice',
      mathMeter: '📐 Basic Logic (No Hard Calculus!)',
      skills: ['Python / JavaScript', 'Problem Solving', 'Coding', 'App Design'],
      relevantSubjects: ['Computers', 'Maths'],
      courses: ['B.Tech / B.E Computer Science', 'BCA (Coding Degree)', '3-Year Polytechnic Diploma in CS'],
      exams: ['JEE Main', 'State CET / EAMCET', 'CUET'],
      growth: '🔥 Very High Demand Everywhere',
      roadmap: [
        {
          phase: '🎒 After 10th (First Step)',
          desc: 'Science (PCM with Computer) తీసుకోండి లేదా 3 ఏళ్ల Polytechnic Diploma in CS లో జాయిన్ అవ్వండి.'
        },
        {
          phase: '🎓 After 12th (College Degree)',
          desc: 'B.Tech CS లేదా BCA లేదా B.Sc IT లో చేరండి. కాలేజీతో సంబంధం లేకుండా సొంతంగా కోడింగ్ ప్రాక్టీస్ చేయవచ్చు!'
        },
        {
          phase: '🛠️ Skill Building',
          desc: 'చిన్న చిన్న వెబ్‌సైట్లు, కాలిక్యులేటర్ యాప్స్ చేసి ఇంటర్నెట్‌లో పబ్లిష్ చేయండి.'
        },
        {
          phase: '🚀 Job & Future',
          desc: 'Google, TCS, Swiggy లాంటి కంపెనీలలో లేదా రిమోట్‌గా ఇంటి నుంచే పని చేయవచ్చు!'
        }
      ],
      scope: 'ప్రపంచం మొత్తం ఫోన్ల మీదే నడుస్తోంది. మంచి కోడర్లకు ప్రపంచవ్యాప్తంగా ఎప్పుడూ భారీ డిమాండ్ ఉంటుంది!'
    },
    {
      id: 'game-developer',
      title: '🎮 Video Game Developer',
      category: 'Technology',
      stage: 'both',
      stageLabel: '🎒 10th & 🎓 12th',
      shortDesc: 'PUBG, GTA లాంటి గేమ్స్ లో 3D క్యారెక్టర్లు, గన్స్, కార్ రేసింగ్ లెవల్స్ తయారు చేసే డ్రీమ్ జాబ్!',
      whatTheyDo: 'గేమ్ రూల్స్ తయారు చేస్తారు, గ్రాఫిక్స్ ప్రోగ్రామ్ చేస్తారు, గేమ్ కంట్రోలర్స్ ఎలా ఆడాలో డిజైన్ చేస్తారు!',
      salaryMeter: '💸💸💸 High & Fun (₹6L - ₹22L+)',
      brainEffort: '🧠🧠 Creative + Coding',
      mathMeter: '📐 Physics & Geometry',
      skills: ['Coding', 'Creativity', 'Problem Solving'],
      relevantSubjects: ['Computers', 'Physics', 'Drawing'],
      courses: ['B.Tech Computer Science (Game Dev)', 'B.Sc Gaming & Animation', 'Game Design Diploma'],
      exams: ['JEE Main', 'College Entrance Tests'],
      growth: '🚀 Booming Worldwide',
      roadmap: [
        {
          phase: '🎒 After 10th',
          desc: 'Science (PCM) లేదా Arts విత్ కంప్యూటర్స్. ఇంట్లోనే ఉచితంగా Unity లేదా Unreal Engine డౌన్‌లోడ్ చేసి నేర్చుకోండి.'
        },
        {
          phase: '🎓 After 12th',
          desc: 'B.Tech CS లేదా B.Sc Game Design లో జాయిన్ అవ్వండి.'
        },
        {
          phase: '🛠️ Skill Building',
          desc: 'స్నేహితులతో కలిసి చిన్న 2D గేమ్స్ లేదా 3D షూటర్ డెమోలు తయారు చేసి itch.io లో అప్‌లోడ్ చేయండి.'
        },
        {
          phase: '🚀 Job & Future',
          desc: 'Rockstar Games, EA Sports, Ubisoft లేదా భారతీయ గేమింగ్ స్టూడియోలలో గేమింగ్ ఇంజనీర్‌గా వర్క్ చేయండి!'
        }
      ],
      scope: 'గేమింగ్ ఇండస్ట్రీ ఇప్పుడు సినిమా ఇండస్ట్రీ కంటే పెద్దది! గేమర్స్ కోసం వేల ఉద్యోగాలు వస్తున్నాయి.'
    },
    {
      id: 'ai-data-wizard',
      title: '🤖 Artificial Intelligence & Data Wizard',
      category: 'Technology',
      stage: '12',
      stageLabel: '🎓 After Class 12',
      shortDesc: 'ChatGPT లాంటి రోబోట్‌లు మరియు AI టూల్స్‌కు మెదడు (Brain) ఇచ్చి ఆటోమేట్ చేసే ఫ్యూచర్ జాబ్!',
      whatTheyDo: 'కంప్యూటర్లకు మనుషుల లాగా ఆలోచించేలా డేటా ఫీడ్ చేస్తారు మరియు ఫ్యూచర్ ప్రెడిక్షన్స్ చేస్తారు!',
      salaryMeter: '💸💸💸 Super High (₹10L - ₹35L+)',
      brainEffort: '🧠🧠🧠 Big Brain',
      mathMeter: '📐 Statistics & Probability',
      skills: ['Logical Thinking', 'Coding', 'Problem Solving'],
      relevantSubjects: ['Maths', 'Computers'],
      courses: ['B.Tech AI & Data Science', 'B.Sc Data Science', 'Integrated M.Tech AI'],
      exams: ['JEE Main', 'EAMCET / CETs', 'CUET'],
      growth: '🌟 Fastest Growing Career on Earth',
      roadmap: [
        {
          phase: '🎒 After 10th',
          desc: 'Science (PCM). మ్యాథ్స్ అండ్ స్టాటిస్టిక్స్ బాగా ప్రాక్టీస్ చేయండి.'
        },
        {
          phase: '🎓 After 12th',
          desc: 'B.Tech AI & Data Science లేదా B.Sc Data Science డిగ్రీ చేయండి.'
        },
        {
          phase: '🛠️ Skill Building',
          desc: 'Python libraries (Pandas, Scikit-learn), ChatGPT APIs తో చిన్న ప్రాజెక్ట్స్ చేయండి.'
        },
        {
          phase: '🚀 Job & Future',
          desc: 'AI ఇంజనీర్, డేటా అనలిస్ట్ లేదా మెషిన్ లెర్నింగ్ రీసెర్చర్‌గా టాప్ టెక్ కంపెనీలలో పనిచేయండి.'
        }
      ],
      scope: 'రాబోయే 20 ఏళ్లలో AI ప్రతి రంగంలో ఉంటుంది. ఇప్పుడు నేర్చుకుంటే మీ ఫ్యూచర్ సేఫ్!'
    },
    {
      id: 'cybersecurity-hacker',
      title: '🛡️ Ethical Hacker & Cyber Defender',
      category: 'Technology',
      stage: 'both',
      stageLabel: '🎒 10th & 🎓 12th',
      shortDesc: 'బ్యాంకులు, వెబ్‌సైట్లను సైబర్ దొంగల నుంచి కాపాడే నిజమైన డిజిటల్ పోలీస్ ఆఫీసర్!',
      whatTheyDo: 'కంప్యూటర్ సిస్టమ్స్‌ను హ్యాక్ చేసి అందులో లోపాలు కనిపెట్టి, శత్రువులు రాకుండా సెక్యూరిటీ తాళాలు వేస్తారు!',
      salaryMeter: '💸💸💸 Very High (₹7L - ₹25L+)',
      brainEffort: '🧠🧠 Detective Mindset',
      mathMeter: '📐 Zero Hard Math (Only Logic)',
      skills: ['Logical Thinking', 'Problem Solving', 'Coding'],
      relevantSubjects: ['Computers'],
      courses: ['B.Tech Cybersecurity / IT', 'BCA Cyber Defense', 'CEH (Certified Ethical Hacker)'],
      exams: ['JEE Main', 'State CETs', 'Direct Merit'],
      growth: '🔥 Massive Global Shortage',
      roadmap: [
        {
          phase: '🎒 After 10th',
          desc: 'Science PCM లేదా కంప్యూటర్స్. ఇంట్లోనే లైనక్స్ (Linux) ఆపరేటింగ్ సిస్టమ్ వాడటం నేర్చుకోండి.'
        },
        {
          phase: '🎓 After 12th',
          desc: 'B.Tech Cybersecurity లేదా BCA డిగ్రీ చేయండి.'
        },
        {
          phase: '🛠️ Skill Building',
          desc: 'CTF (Capture The Flag) సైబర్ గేమ్స్ ఆడండి, Bug Bounty ప్రోగ్రామ్స్ ద్వారా బగ్స్ వెతికి డబ్బులు సంపాదించండి.'
        },
        {
          phase: '🚀 Job & Future',
          desc: 'బ్యాంకులు, పోలీస్ సైబర్ క్రైమ్ సెల్స్, గూగుల్ లాంటి సంస్థలలో సెక్యూరిటీ ఆఫీసర్‌గా స్థిరపడండి.'
        }
      ],
      scope: 'ప్రతి చిన్న బిజినెస్ ఆన్‌లైన్‌కి వచ్చింది కాబట్టి వాళ్లను కాపాడటానికి సైబర్ డిఫెండర్స్ చాలా అవసరం!'
    },
    {
      id: 'ui-ux-designer',
      title: '🎨 UI/UX & Mobile App Designer',
      category: 'Arts',
      stage: 'both',
      stageLabel: '🎒 10th & 🎓 12th',
      shortDesc: 'నో మ్యాథ్స్, నో కోడింగ్! అందమైన రంగులు, బటన్లు, మొబైల్ స్క్రీన్లు డిజైన్ చేసే క్రియేటివ్ జాబ్!',
      whatTheyDo: 'యూజర్లకు సులభంగా అర్థమయ్యేలా Zomato, Swiggy, Netflix లాంటి యాప్స్ లుక్ అండ్ ఫీల్ డిజైన్ చేస్తారు!',
      salaryMeter: '💸💸💸 High Salary (₹6L - ₹24L+)',
      brainEffort: '🧠 Creative & Empathy',
      mathMeter: '📐 Zero Math Needed! 🎉',
      skills: ['Creativity', 'Helping People', 'Problem Solving'],
      relevantSubjects: ['Drawing', 'Computers'],
      courses: ['B.Des (Bachelor of Design)', 'B.Sc Digital Media', 'Any Degree + Figma Portfolio'],
      exams: ['UCEED (IITs Design)', 'NID DAT', 'Direct College Entry'],
      growth: '🔥 High Demand in Startups',
      roadmap: [
        {
          phase: '🎒 After 10th',
          desc: 'ఏ గ్రూప్ అయినా ఓకే (Arts, Commerce or Science). రోజూ మంచి మొబైల్ యాప్స్ చూసి స్కెచింగ్ చేయండి.'
        },
        {
          phase: '🎓 After 12th',
          desc: 'B.Des డిగ్రీ చేయండి, లేదా ఏదైనా నార్మల్ డిగ్రీ చేస్తూ ఆన్‌లైన్‌లో Figma నేర్చుకోండి.'
        },
        {
          phase: '🛠️ Skill Building',
          desc: 'మీకు నచ్చిన 2-3 యాప్స్‌ని కొత్తగా రీ-డిజైన్ చేసి Behance లేదా Dribbble లో పోస్ట్ చేయండి.'
        },
        {
          phase: '🚀 Job & Future',
          desc: 'సాఫ్ట్‌వేర్ కంపెనీలలో ప్రొడక్ట్ డిజైనర్‌గా లేదా గ్లోబల్ క్లయింట్లకు ఫ్రీలాన్సర్‌గా చేయవచ్చు.'
        }
      ],
      scope: 'డిజైన్ బాగోలేకపోతే ఏ యాప్ కూడా హిట్ అవ్వదు. అందుకే డిజైనర్లకు కంపెనీలు ఫుల్ రెస్పెక్ట్ & ప్యాకేజ్ ఇస్తాయి.'
    },
    {
      id: 'animator-vfx',
      title: '🎬 3D Animator & VFX Movie Artist',
      category: 'Arts',
      stage: 'both',
      stageLabel: '🎒 10th & 12th',
      shortDesc: 'బాహుబలి, అవతార్, యానిమేషన్ కార్టూన్లలో విజువల్ ఎఫెక్ట్స్, పేలుళ్లు, మ్యాజిక్ సృష్టించే సూపర్ ఫీల్డ్!',
      whatTheyDo: 'సినిమాలు మరియు యూట్యూబ్ వీడియోల కోసం 3D యానిమేషన్స్, క్యారెక్టర్లు, రోబోట్లను కదిలిస్తారు!',
      salaryMeter: '💸💸 Good to High (₹4L - ₹18L+)',
      brainEffort: '🧠 Artistic Eyes',
      mathMeter: '📐 Zero Math Needed!',
      skills: ['Creativity', 'Coding'],
      relevantSubjects: ['Drawing', 'Computers'],
      courses: ['B.Sc in Animation & VFX', 'B.Des Animation', 'Diploma in 3D Animation'],
      exams: ['NID DAT', 'College Portfolio Test'],
      growth: '🚀 Big in Movies & OTT',
      roadmap: [
        {
          phase: '🎒 After 10th',
          desc: 'Any stream. ఇంట్లోనే ఉచిత 3D సాఫ్ట్‌వేర్ Blender తో చిన్న క్యారెక్టర్స్ చేయడం స్టార్ట్ చేయండి.'
        },
        {
          phase: '🎓 After 12th',
          desc: 'B.Sc Animation లేదా VFX స్పెషలైజేషన్ కోర్సులో చేరండి.'
        },
        {
          phase: '🛠️ Skill Building',
          desc: 'మీరు చేసిన బెస్ట్ యానిమేషన్లతో 1 నిమిషం డెమో రీల్ (Demo Reel) తయారు చేయండి.'
        },
        {
          phase: '🚀 Job & Future',
          desc: 'సినిమా స్టూడియోలు, గేమింగ్ కంపెనీలు, అడ్వర్టైజింగ్ ఏజెన్సీలలో పని చేయవచ్చు.'
        }
      ],
      scope: 'OTT సిరీస్‌లు, యూట్యూబ్, సినిమాలలో యానిమేషన్ & వీఎఫ్ఎక్స్ లేకుండా ఏ ప్రాజెక్ట్ రన్ అవ్వదు!'
    },
    {
      id: 'chartered-accountant',
      title: '💼 Chartered Accountant (CA) - Money Boss',
      category: 'Business',
      stage: 'both',
      stageLabel: '🎒 10th & 🎓 12th',
      shortDesc: 'పెద్ద కంపెనీల కోట్లాది రూపాయల ఆడిట్, ట్యాక్సులు లెక్కపెట్టే గౌరవప్రదమైన బిజినెస్ జాబ్!',
      whatTheyDo: 'కంపెనీ లెక్కలు సరిచూస్తారు, ప్రభుత్వానికి ట్యాక్స్ ఎలా కట్టాలో ప్లాన్ చేస్తారు, ఫైనాన్షియల్ సలహాలు ఇస్తారు!',
      salaryMeter: '💸💸💸 High Prestige (₹9L - ₹30L+)',
      brainEffort: '🧠🧠🧠 Hard Work & Patience',
      mathMeter: '📐 Basic Arithmetic & Logic',
      skills: ['Problem Solving', 'Management', 'Logical Thinking'],
      relevantSubjects: ['Commerce', 'Maths'],
      courses: ['CA Foundation (Direct after 12th)', 'B.Com alongside CA'],
      exams: ['ICAI CA Foundation Exam', 'CA Inter', 'CA Final'],
      growth: '🌟 Evergreen Royal Profession',
      roadmap: [
        {
          phase: '🎒 After 10th',
          desc: 'Commerce (MEC or CEC). 11th & 12th లో అకౌంటెన్సీ బేసిక్స్ గట్టిగా నేర్చుకోండి.'
        },
        {
          phase: '🎓 After 12th',
          desc: 'ICAI CA Foundation ఎగ్జామ్ రాయండి. పాస్ అయితే CA Inter కి ఎలిజిబుల్ అవుతారు.'
        },
        {
          phase: '🛠️ Articleship Training',
          desc: 'ఒక సీనియర్ CA దగ్గర 2 ఏళ్లు ఆఫీస్ ప్రాక్టికల్ వర్క్ చేస్తూ స్టైఫండ్ సంపాదించండి.'
        },
        {
          phase: '🚀 Final CA',
          desc: 'CA Final పాస్ అయ్యాక బిగ్ 4 కంపెనీలలో (Deloitte, EY, PwC, KPMG) లేదా సొంత ఆఫీస్ పెట్టి రాణించండి.'
        }
      ],
      scope: 'ప్రతి కంపెనీకి చట్టప్రకారం CA సంతకం తప్పనిసరి. సమాజంలో అత్యంత గౌరవప్రదమైన కెరీర్లలో ఒకటి.'
    },
    {
      id: 'investment-banker',
      title: '📈 Investment Banker & Stock Analyst',
      category: 'Business',
      stage: '12',
      stageLabel: '🎓 After Class 12',
      shortDesc: 'స్టాక్ మార్కెట్, కంపెనీలు కొనడం/అమ్మడం, మరియు వందల కోట్ల ఇన్వెస్ట్‌మెంట్లతో ఆడుకునే హై-పవర్ జాబ్!',
      whatTheyDo: 'ఏ కంపెనీలో డబ్బు పెడితే లాభం వస్తుందో అంచనా వేసి పెద్ద బిజినెస్‌మెన్‌కి గైడ్ చేస్తారు!',
      salaryMeter: '💸💸💸 Highest Corporate Pay (₹12L - ₹40L+)',
      brainEffort: '🧠🧠 Sharp Mind',
      mathMeter: '📐 Percentages & Ratios',
      skills: ['Logical Thinking', 'Management', 'Problem Solving'],
      relevantSubjects: ['Commerce', 'Maths'],
      courses: ['BBA Finance', 'B.Com (Honours)', 'BA Economics', 'IPM (IIMs after 12th)'],
      exams: ['IPMAT', 'CUET', 'CAT (MBA later)'],
      growth: '🔥 High Bonus & Global Travel',
      roadmap: [
        {
          phase: '🎒 After 10th',
          desc: 'Commerce with Maths (MEC) లేదా Science PCM.'
        },
        {
          phase: '🎓 After 12th',
          desc: 'IPMAT రాసి IIM లో 5-year BBA+MBA చేయండి లేదా టాప్ యూనివర్సిటీలో B.Com/BBA చేయండి.'
        },
        {
          phase: '🛠️ Skill Building',
          desc: 'ఫైనాన్షియల్ మోడలింగ్, స్టాక్ మార్కెట్ చార్ట్‌లు రీడ్ చేయడం ప్రాక్టీస్ చేయండి.'
        },
        {
          phase: '🚀 Job & Future',
          desc: 'Goldman Sachs, JP Morgan లాంటి గ్లోబల్ ఇన్వెస్ట్‌మెంట్ బ్యాంకుల్లో చేరండి!'
        }
      ],
      scope: 'డబ్బులు ఎక్కడ ప్రవహిస్తాయో అక్కడ ఇన్వెస్ట్‌మెంట్ బ్యాంకర్లు ఉంటారు. లైఫ్‌లో వేగంగా ధనవంతులు అవ్వడానికి బెస్ట్ వే.'
    },
    {
      id: 'doctor-mbbs',
      title: '🩺 Medical Doctor (Physician / Surgeon)',
      category: 'Healthcare',
      stage: '12',
      stageLabel: '🎓 After Class 12',
      shortDesc: 'అనారోగ్యంతో బాధపడే రోగులను నయం చేస్తూ, ప్రాణాలు కాపాడే దైవంతో సమానమైన కెరీర్!',
      whatTheyDo: 'రోగులను చెక్ చేస్తారు, రక్త పరీక్షలు చూసి వ్యాధిని కనిపెట్టి మందులు ఇస్తారు లేదా ఆపరేషన్లు చేస్తారు!',
      salaryMeter: '💸💸💸 Evergreen & High (₹8L - ₹25L+)',
      brainEffort: '🧠🧠🧠 Very Dedicated Study',
      mathMeter: '📐 Biology Heavy (Zero Hard Math!)',
      skills: ['Helping People', 'Problem Solving', 'Logical Thinking'],
      relevantSubjects: ['Biology', 'Chemistry'],
      courses: ['MBBS (5.5 Years)', 'BDS (Dental)', 'MD / MS (Specialization)'],
      exams: ['NEET-UG (National Entrance Test)'],
      growth: '🌟 100% Recession Proof',
      roadmap: [
        {
          phase: '🎒 After 10th',
          desc: 'Science stream with PCB (Physics, Chemistry, Biology). రోజూ బయాలజీ కాన్సెప్ట్స్ రివైజ్ చేయండి.'
        },
        {
          phase: '🎓 After 12th',
          desc: 'NEET-UG ఎగ్జామ్ లో మంచి ర్యాంక్ తెచ్చుకుని ప్రభుత్వ మెడికల్ కాలేజీలో MBBS సీట్ సాధించండి.'
        },
        {
          phase: '🛠️ 1-Year Hospital Internship',
          desc: 'హాస్పిటల్‌లో సీనియర్ డాక్టర్ల పక్కన ఉండి పేషెంట్లను ప్రాక్టికల్‌గా చూసుకోవడం నేర్చుకోండి.'
        },
        {
          phase: '🚀 Specialization',
          desc: 'NEET-PG రాసి హార్ట్ (Cardiology), బ్రెయిన్ (Neurology) లేదా పిల్లల డాక్టర్ (Pediatrics) గా మారండి!'
        }
      ],
      scope: 'ప్రపంచంలో ఎన్ని రోబోలు వచ్చినా మనిషి ప్రాణాలు కాపాడే డాక్టర్ విలువ ఎప్పటికీ తగ్గదు!'
    },
    {
      id: 'biotechnologist',
      title: '🧬 Biotechnologist & Vaccine Researcher',
      category: 'Healthcare',
      stage: 'both',
      stageLabel: '🎒 10th & 12th',
      shortDesc: 'వైరస్‌లకు కొత్త వ్యాక్సిన్లు, క్యాన్సర్ మందులు, మరియు సూపర్ పంటలను కనిపెట్టే సైన్స్ హీరో!',
      whatTheyDo: 'మైక్రోస్కోపులలో DNA, కణాలను పరీక్షిస్తూ భవిష్యత్తు ఔషధాలను డిజైన్ చేస్తారు!',
      salaryMeter: '💸💸 Good & Rising (₹5L - ₹18L+)',
      brainEffort: '🧠🧠 Lab Detective',
      mathMeter: '📐 Basic Science Math',
      skills: ['Problem Solving', 'Logical Thinking'],
      relevantSubjects: ['Biology', 'Chemistry'],
      courses: ['B.Tech Biotechnology', 'B.Sc Biotechnology', 'Integrated M.Sc'],
      exams: ['JEE Main', 'NEET-UG', 'CUET'],
      growth: '🚀 High Growth Post-Pandemic',
      roadmap: [
        {
          phase: '🎒 After 10th',
          desc: 'Science PCB లేదా PCMB తీసుకోండి.'
        },
        {
          phase: '🎓 After 12th',
          desc: 'B.Tech బయోటెక్నాలజీ లేదా B.Sc జెనెటిక్స్/మైక్రోబయాలజీ చేయండి.'
        },
        {
          phase: '🛠️ Lab Skills',
          desc: 'కాలేజీ ల్యాబ్‌లలో జీన్ ఎడిటింగ్ (CRISPR), కణాల కల్చరింగ్ పరిశోధనలు చేయండి.'
        },
        {
          phase: '🚀 Job & Future',
          desc: 'ఫార్మా కంపెనీలు (Serum Institute, Bharat Biotech), ఫుడ్ ల్యాబ్స్ లేదా రీసెర్చ్ సెంటర్లలో పనిచేయండి.'
        }
      ],
      scope: 'భవిష్యత్తులో కొత్త రోగాలను అడ్డుకోవడానికి మరియు క్లైమేట్ చేంజ్ ఫుడ్ తయారు చేయడానికి బయోటెక్ చాలా కీలకం.'
    },
    {
      id: 'space-astronomer',
      title: '🚀 Space Scientist & ISRO Rocket Engineer',
      category: 'Science',
      stage: '12',
      stageLabel: '🎓 After Class 12',
      shortDesc: 'చంద్రయాన్, మంగళయాన్ లాంటి ఉపగ్రహాలు, రాకెట్లు మరియు బ్లాక్ హోల్స్ రీసెర్చ్ చేసే థ్రిల్లింగ్ జాబ్!',
      whatTheyDo: 'శాటిలైట్లు తయారు చేస్తారు, స్పేస్ టెలిస్కోప్ డేటా చూస్తారు, గ్రహాల మీదకు మిషన్లు పంపుతారు!',
      salaryMeter: '💸💸 Good & Proud (₹7L - ₹20L+ / Govt Pride)',
      brainEffort: '🧠🧠🧠 Space Brain',
      mathMeter: '📐 Heavy Physics & Calculus',
      skills: ['Logical Thinking', 'Problem Solving'],
      relevantSubjects: ['Physics', 'Maths'],
      courses: ['B.Tech Aerospace / Avionics (IIST)', 'B.Sc / M.Sc Physics & Astronomy'],
      exams: ['JEE Advanced (Direct entry to IIST with ISRO job!)', 'IAT'],
      growth: '🌟 Space Exploration Golden Age',
      roadmap: [
        {
          phase: '🎒 After 10th',
          desc: 'Science (PCM). ఫిజిక్స్ అండ్ మ్యాథ్స్ ప్రాబ్లమ్స్ బాగా సాల్వ్ చేయండి.'
        },
        {
          phase: '🎓 After 12th',
          desc: 'JEE Advanced రాసి IIST త్రివేండ్రంలో చేరండి (ఇక్కడ టాప్ మార్కులు వస్తే డైరెక్ట్‌గా ISRO లో సైంటిస్ట్ జాబ్ ఇస్తారు!).'
        },
        {
          phase: '🛠️ Space Labs',
          desc: 'రాకెట్ ఇంజిన్లు, కక్ష్యల లెక్కలు, శాటిలైట్ సెన్సార్లపై రీసెర్చ్ చేయండి.'
        },
        {
          phase: '🚀 Mission Launch',
          desc: 'ISRO, NASA లేదా స్పేస్‌ఎక్స్ లాంటి ప్రైవేట్ స్పేస్ కంపెనీలలో పనిచేయండి!'
        }
      ],
      scope: 'ప్రపంచం మొత్తం ఇప్పుడు మూన్, మార్స్ మీదకు వెళ్తోంది. స్పేస్ సైన్స్‌లో ఉన్న కిక్ దేనిలోనూ ఉండదు!'
    },
    {
      id: 'corporate-lawyer',
      title: '⚖️ Corporate Lawyer & Legal Advisor',
      category: 'Business',
      stage: '12',
      stageLabel: '🎓 After Class 12',
      shortDesc: 'సూట్లు వేసుకుని పెద్ద కంపెనీల ఒప్పందాలు, చట్టపరమైన డీల్స్ మరియు కోర్టు వాదనలు నడిపించే పవర్ రోల్!',
      whatTheyDo: 'కంపెనీ బిజినెస్ కాంట్రాక్టులు రాస్తారు, చట్టపరమైన సమస్యలు రాకుండా కాపాడతారు!',
      salaryMeter: '💸💸💸 High Prestige & Pay (₹8L - ₹28L+)',
      brainEffort: '🧠🧠 Sharp Arguments',
      mathMeter: '📐 Zero Math! (Reading & Logic)',
      skills: ['Public Speaking', 'Logical Thinking', 'Management'],
      relevantSubjects: ['Social', 'English'],
      courses: ['5-Year Integrated BA LLB / BBA LLB'],
      exams: ['CLAT (Common Law Admission Test)', 'AILET', 'SLAT'],
      growth: '🌟 High Power & Prestige',
      roadmap: [
        {
          phase: '🎒 After 10th',
          desc: 'ఏ గ్రూప్ అయినా ఓకే (Arts, Commerce, or Science). న్యూస్‌పేపర్స్, ఆర్టికల్స్ రోజూ చదవడం అలవాటు చేసుకోండి.'
        },
        {
          phase: '🎓 After 12th',
          desc: 'CLAT ఎగ్జామ్ రాసి ఇండియాలోని టాప్ నేషనల్ లా యూనివర్సిటీలలో (NLUs) 5-ఏళ్ల లా డిగ్రీ చేయండి.'
        },
        {
          phase: '🛠️ Moot Courts & Internships',
          desc: 'కాలేజీలో మాక్ కోర్టులు ప్రాక్టీస్ చేయండి, పెద్ద లా సంస్థలలో ఇంటర్న్‌షిప్స్ చేయండి.'
        },
        {
          phase: '🚀 Job & Future',
          desc: 'టాప్ కార్పొరేట్ లా ఫర్మ్స్ (Shardul Amarchand, AZB) లో లేదా సొంత లాయర్‌గా ప్రాక్టీస్ చేయండి.'
        }
      ],
      scope: 'చట్టాలు తెలిసిన వాడికి ప్రపంచంలో ఎప్పుడూ పవర్ ఉంటుంది. కార్పొరేట్ లాయర్లకు ఫుల్ డిమాండ్!'
    },
    {
      id: 'school-educator',
      title: '📚 Cool Teacher & EdTech Mentor',
      category: 'Teaching',
      stage: '12',
      stageLabel: '🎓 After Class 12',
      shortDesc: 'కష్టమైన కాన్సెప్టులను ఈజీగా నేర్పిస్తూ వేలాది మంది స్టూడెంట్స్ జీవితాలను మార్చే రెస్పెక్టెడ్ జాబ్!',
      whatTheyDo: 'మంచి స్టోరీ టెల్లింగ్, యానిమేషన్స్, సరదా ఉదాహరణలతో విద్యార్థులకు సబ్జెక్ట్ అర్థమయ్యేలా చెబుతారు!',
      salaryMeter: '💸💸 Stable to High (₹4L - ₹15L+ / YouTube Millions)',
      brainEffort: '🧠 Mentorship & Heart',
      mathMeter: '📐 Depends on Subject',
      skills: ['Public Speaking', 'Helping People', 'Creativity'],
      relevantSubjects: ['English', 'Social', 'Computers'],
      courses: ['4-Year Integrated B.Sc B.Ed / BA B.Ed (ITEP)', 'Master\'s Degree'],
      exams: ['NCET', 'CTET (Teacher Eligibility)'],
      growth: '🌟 Evergreen Peace of Mind',
      roadmap: [
        {
          phase: '🎒 After 10th',
          desc: 'మీకు ఏ సబ్జెక్ట్ ఇష్టమో ఆ గ్రూప్ ఎంచుకోండి (Science, Commerce, or Arts).'
        },
        {
          phase: '🎓 After 12th',
          desc: 'NEP కొత్త 4-ఏళ్ల ఇంటిగ్రేటెడ్ B.Ed కోర్సులో చేరండి లేదా గ్రాడ్యుయేషన్ పూర్తి చేయండి.'
        },
        {
          phase: '🛠️ Teaching Skills',
          desc: 'ఆన్‌లైన్ బోర్డ్స్, స్లైడ్స్, యూట్యూబ్ వీడియోల ద్వారా సింపుల్‌గా చెప్పడం ప్రాక్టీస్ చేయండి.'
        },
        {
          phase: '🚀 Career',
          desc: 'ఇంటర్నేషనల్ స్కూల్స్, ప్రైవేట్ అకాడమీలు లేదా ఆన్‌లైన్ ఎడ్‌టెక్ ప్లాట్‌ఫారమ్‌లలో టాప్ ఎడ్యుకేటర్‌గా మారండి!'
        }
      ],
      scope: 'ఒక మంచి టీచర్ సమాజంలో హీరో. ఆన్‌లైన్ ఎడ్యుకేషన్ వల్ల టీచర్లకు పాపులారిటీ & సంపాదన విపరీతంగా పెరిగింది.'
    }
  ];

  /* ==========================================================================
     2. Application State & Profile
     ========================================================================== */
  const state = {
    currentScreen: 'welcome',
    activeCareerId: 'software-dev',
    currentTheme: localStorage.getItem('careerpath_theme') || 'light',
    bookmarkedIds: getStoredBookmarks(),

    // Student Profile State
    studentProfile: {
      selectedClass: '10',
      interests: ['Technology'],
      subjects: ['Computers', 'Maths'],
      skills: ['Problem Solving', 'Creativity']
    },

    // Suggestions Filter
    suggestionsCategory: 'all',
    suggestionsSearch: ''
  };

  const SCREENS = ['welcome', 'profile', 'suggestions', 'details', 'courses', 'about'];

  function getStoredBookmarks() {
    try {
      const data = localStorage.getItem('careerpath_bookmarks');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveBookmarksToStorage(ids) {
    try {
      localStorage.setItem('careerpath_bookmarks', JSON.stringify(ids));
    } catch (e) {
      console.error(e);
    }
  }

  function triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 55,
        spread: 65,
        origin: { y: 0.6 }
      });
    }
  }

  /* ==========================================================================
     3. DOM Elements
     ========================================================================== */
  const elements = {
    // Stepper
    stepperFill: document.getElementById('stepperFill'),
    stepperStepText: document.getElementById('stepperStepText'),
    stepperTitleText: document.getElementById('stepperTitleText'),
    stepDots: document.querySelectorAll('.step-dot'),

    // Header buttons
    headerHomeBtn: document.getElementById('headerHomeBtn'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeEmoji: document.getElementById('themeEmoji'),
    headerBookmarksBtn: document.getElementById('headerBookmarksBtn'),
    savedCountBadge: document.getElementById('savedCountBadge'),
    openAboutBtn: document.getElementById('openAboutBtn'),

    // Screens
    screenViews: document.querySelectorAll('.screen-view'),

    // Screen 1: Welcome
    welcomeStartBtn: document.getElementById('welcomeStartBtn'),
    welcomeAboutBtn: document.getElementById('welcomeAboutBtn'),
    welcomeNextBtn: document.getElementById('welcomeNextBtn'),

    // Screen 2: Profile
    classCards: document.querySelectorAll('.class-card'),
    interestsPillsContainer: document.getElementById('interestsPillsContainer'),
    subjectsPillsContainer: document.getElementById('subjectsPillsContainer'),
    skillsPillsContainer: document.getElementById('skillsPillsContainer'),
    profileBackBtn: document.getElementById('profileBackBtn'),
    profileHomeBtn: document.getElementById('profileHomeBtn'),
    profileNextBtn: document.getElementById('profileNextBtn'),

    // Screen 3: Suggestions
    suggestionsSummaryText: document.getElementById('suggestionsSummaryText'),
    suggestionsSearchInput: document.getElementById('suggestionsSearchInput'),
    clearSuggestionsSearchBtn: document.getElementById('clearSuggestionsSearchBtn'),
    catFilterChips: document.querySelectorAll('.cat-filter-chip'),
    suggestionsCardsGrid: document.getElementById('suggestionsCardsGrid'),
    emptySuggestionsState: document.getElementById('emptySuggestionsState'),
    resetSuggestionsFilterBtn: document.getElementById('resetSuggestionsFilterBtn'),
    suggestionsBackBtn: document.getElementById('suggestionsBackBtn'),
    suggestionsHomeBtn: document.getElementById('suggestionsHomeBtn'),
    suggestionsNextBtn: document.getElementById('suggestionsNextBtn'),

    // Screen 4: Details
    detailsCatBadge: document.getElementById('detailsCatBadge'),
    detailsStageBadge: document.getElementById('detailsStageBadge'),
    detailsGrowthBadge: document.getElementById('detailsGrowthBadge'),
    detailsMatchBadge: document.getElementById('detailsMatchBadge'),
    detailsCareerTitle: document.getElementById('detailsCareerTitle'),
    detailsCareerDesc: document.getElementById('detailsCareerDesc'),
    detailsSalaryMeter: document.getElementById('detailsSalaryMeter'),
    detailsEffortMeter: document.getElementById('detailsEffortMeter'),
    detailsMathMeter: document.getElementById('detailsMathMeter'),
    detailsWhatTheyDo: document.getElementById('detailsWhatTheyDo'),
    detailsTimelineContainer: document.getElementById('detailsTimelineContainer'),
    detailsSkillsContainer: document.getElementById('detailsSkillsContainer'),
    detailsCoursesList: document.getElementById('detailsCoursesList'),
    detailsExamsList: document.getElementById('detailsExamsList'),
    detailsScopeText: document.getElementById('detailsScopeText'),
    detailsBookmarkBtn: document.getElementById('detailsBookmarkBtn'),
    detailsBookmarkIcon: document.getElementById('detailsBookmarkIcon'),
    detailsBookmarkText: document.getElementById('detailsBookmarkText'),
    detailsBackBtn: document.getElementById('detailsBackBtn'),
    detailsHomeBtn: document.getElementById('detailsHomeBtn'),
    detailsNextBtn: document.getElementById('detailsNextBtn'),

    // Screen 5: Courses
    courses10TabBtn: document.getElementById('courses10TabBtn'),
    courses12TabBtn: document.getElementById('courses12TabBtn'),
    courses10Content: document.getElementById('courses10Content'),
    courses12Content: document.getElementById('courses12Content'),
    coursesBackBtn: document.getElementById('coursesBackBtn'),
    coursesHomeBtn: document.getElementById('coursesHomeBtn'),
    coursesFinishBtn: document.getElementById('coursesFinishBtn'),

    // Screen 6: About
    mentorContactForm: document.getElementById('mentorContactForm'),
    aboutBackBtn: document.getElementById('aboutBackBtn'),
    aboutHomeBtn: document.getElementById('aboutHomeBtn'),
    aboutRestartBtn: document.getElementById('aboutRestartBtn'),

    // Toast
    toastContainer: document.getElementById('toastContainer')
  };

  /* ==========================================================================
     4. Navigation / Multi-Screen Router
     ========================================================================== */
  function navigateTo(targetScreen) {
    if (!SCREENS.includes(targetScreen)) return;

    state.currentScreen = targetScreen;

    // 1. Hide all screens, show only the target screen
    elements.screenViews.forEach((view) => {
      view.classList.remove('active');
    });

    const targetEl = document.getElementById(`screen-${targetScreen}`);
    if (targetEl) {
      targetEl.classList.add('active');
    }

    // 2. Scroll window to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 3. Update Stepper Widget
    updateStepper(targetScreen);

    // 4. Trigger specific screen data render
    if (targetScreen === 'suggestions') {
      renderSuggestions();
    } else if (targetScreen === 'details') {
      renderCareerDetails(state.activeCareerId);
    } else if (targetScreen === 'courses') {
      // Auto-toggle 10th or 12th based on profile selection
      if (state.studentProfile.selectedClass === '12') {
        switchCoursesTab('12');
      } else {
        switchCoursesTab('10');
      }
    }
  }

  function updateStepper(screen) {
    const stepMap = {
      welcome: { num: 1, title: 'Welcome', percent: 20 },
      profile: { num: 2, title: 'Student Profile', percent: 40 },
      suggestions: { num: 3, title: 'Career Matches', percent: 60 },
      details: { num: 4, title: 'Career Details', percent: 80 },
      courses: { num: 5, title: 'Course Roadmap', percent: 100 },
      about: { num: 6, title: 'About CareerPath', percent: 100 }
    };

    const current = stepMap[screen] || stepMap.welcome;

    if (elements.stepperStepText) {
      if (screen === 'about') {
        elements.stepperStepText.textContent = 'Information';
      } else {
        elements.stepperStepText.textContent = `Step ${current.num} of 5`;
      }
    }

    if (elements.stepperTitleText) {
      elements.stepperTitleText.textContent = current.title;
    }

    if (elements.stepperFill) {
      elements.stepperFill.style.width = `${current.percent}%`;
    }

    // Update Dots
    elements.stepDots.forEach((dot) => {
      const dotScreen = dot.dataset.screen;
      const dotStep = stepMap[dotScreen] ? stepMap[dotScreen].num : 1;

      dot.classList.remove('active', 'completed');

      if (dotScreen === screen) {
        dot.classList.add('active');
      } else if (dotStep < current.num) {
        dot.classList.add('completed');
      }
    });
  }

  /* ==========================================================================
     5. Theme Switcher
     ========================================================================== */
  function applyTheme(theme) {
    state.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('careerpath_theme', theme);

    if (elements.themeEmoji) {
      elements.themeEmoji.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  function toggleTheme() {
    const nextTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    showToast(
      'Theme Changed! ✨',
      `Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode.`,
      'info'
    );
  }

  /* ==========================================================================
     6. Student Profile Management (Screen 2)
     ========================================================================== */
  function setupProfileEvents() {
    // Class selection
    elements.classCards.forEach((card) => {
      card.addEventListener('click', () => {
        elements.classCards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        state.studentProfile.selectedClass = card.dataset.class;
      });
    });

    // Multi-pills helper
    function setupMultiPillGroup(container, stateArrayKey) {
      if (!container) return;
      const pills = container.querySelectorAll('.multi-pill');
      pills.forEach((pill) => {
        pill.addEventListener('click', () => {
          const val = pill.dataset.value;
          const idx = state.studentProfile[stateArrayKey].indexOf(val);

          if (idx > -1) {
            // Deselect (unless it's the only one left in interests)
            if (stateArrayKey === 'interests' && state.studentProfile.interests.length === 1) {
              showToast('Hold on! ⚠️', 'Please select at least 1 core interest.', 'warn');
              return;
            }
            state.studentProfile[stateArrayKey].splice(idx, 1);
            pill.classList.remove('selected');
          } else {
            // Select
            state.studentProfile[stateArrayKey].push(val);
            pill.classList.add('selected');
          }
        });
      });
    }

    setupMultiPillGroup(elements.interestsPillsContainer, 'interests');
    setupMultiPillGroup(elements.subjectsPillsContainer, 'subjects');
    setupMultiPillGroup(elements.skillsPillsContainer, 'skills');
  }

  /* ==========================================================================
     7. Career Match Calculation & Suggestions (Screen 3)
     ========================================================================== */
  function calculateCareerMatches() {
    const { selectedClass, interests, subjects, skills } = state.studentProfile;

    return CAREERS_DATA.map((career) => {
      let score = 50; // base score

      // Category match
      if (interests.includes(career.category)) {
        score += 30;
      }

      // Stage match
      if (career.stage === 'both' || career.stage === selectedClass) {
        score += 15;
      }

      // Subject overlap
      if (career.relevantSubjects) {
        const subOverlap = career.relevantSubjects.filter((s) => subjects.includes(s)).length;
        score += subOverlap * 10;
      }

      // Skill overlap
      if (career.skills) {
        const skillOverlap = career.skills.filter((sk) => skills.includes(sk)).length;
        score += skillOverlap * 8;
      }

      // Cap score between 72% and 99% for friendly presentation
      const percent = Math.min(99, Math.max(72, score));

      return {
        ...career,
        matchScore: percent
      };
    }).sort((a, b) => b.matchScore - a.matchScore);
  }

  function renderSuggestions() {
    const allMatches = calculateCareerMatches();

    if (elements.suggestionsSummaryText) {
      elements.suggestionsSummaryText.textContent = 
        `Class ${state.studentProfile.selectedClass}th • Interests: ${state.studentProfile.interests.join(', ')} • ${allMatches.length} careers matched! 🔥`;
    }

    // Apply category & search filter
    const filtered = allMatches.filter((career) => {
      if (state.suggestionsCategory !== 'all' && career.category.toLowerCase() !== state.suggestionsCategory.toLowerCase()) {
        return false;
      }
      if (state.suggestionsSearch.trim() !== '') {
        const q = state.suggestionsSearch.toLowerCase().trim();
        const matchesTitle = career.title.toLowerCase().includes(q);
        const matchesDesc = career.shortDesc.toLowerCase().includes(q);
        const matchesSkills = career.skills.some((s) => s.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesSkills) return false;
      }
      return true;
    });

    if (!elements.suggestionsCardsGrid) return;
    elements.suggestionsCardsGrid.innerHTML = '';

    if (filtered.length === 0) {
      if (elements.emptySuggestionsState) elements.emptySuggestionsState.classList.remove('hidden');
      return;
    } else {
      if (elements.emptySuggestionsState) elements.emptySuggestionsState.classList.add('hidden');
    }

    filtered.forEach((career, index) => {
      const isSaved = state.bookmarkedIds.includes(career.id);
      const isTopMatch = index === 0 && state.suggestionsCategory === 'all';

      const card = document.createElement('div');
      card.className = `suggestion-card ${isTopMatch ? 'top-matched' : ''}`;
      card.dataset.id = career.id;

      card.innerHTML = `
        <div class="card-top-row">
          <div class="card-badges-left">
            <span class="match-score-pill">⭐ ${career.matchScore}% Match</span>
            <span class="stage-pill">${career.stageLabel}</span>
          </div>
          <button class="card-bookmark-btn" data-id="${career.id}" title="Save Career">
            <span>${isSaved ? '⭐' : '🤍'}</span>
          </button>
        </div>

        <h3>${career.title}</h3>
        <p>${career.shortDesc}</p>

        <div class="card-meters-preview">
          <span>${career.salaryMeter}</span>
          <span>•</span>
          <span>${career.mathMeter}</span>
        </div>

        <div class="card-cta-row">
          <span class="details-btn-trigger">Click to View Details 👉</span>
          <button class="btn btn-outline btn-sm">
            <span>Explore 🚀</span>
          </button>
        </div>
      `;

      // Click card to view details
      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-bookmark-btn')) return; // handled separately
        state.activeCareerId = career.id;
        navigateTo('details');
      });

      // Bookmark
      const bBtn = card.querySelector('.card-bookmark-btn');
      bBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleBookmark(career.id);
      });

      elements.suggestionsCardsGrid.appendChild(card);
    });
  }

  /* ==========================================================================
     8. Career Details Screen (Screen 4)
     ========================================================================== */
  function renderCareerDetails(careerId) {
    const career = CAREERS_DATA.find((c) => c.id === careerId) || CAREERS_DATA[0];
    state.activeCareerId = career.id;

    elements.detailsCareerTitle.textContent = career.title;
    elements.detailsCareerDesc.textContent = career.shortDesc;
    elements.detailsCatBadge.textContent = career.category;
    elements.detailsStageBadge.textContent = career.stageLabel;
    elements.detailsGrowthBadge.textContent = career.growth;

    // Find match score if calculated
    const match = calculateCareerMatches().find((c) => c.id === career.id);
    elements.detailsMatchBadge.textContent = `⭐ ${match ? match.matchScore : 95}% Profile Match`;

    elements.detailsSalaryMeter.textContent = career.salaryMeter;
    elements.detailsEffortMeter.textContent = career.brainEffort;
    elements.detailsMathMeter.textContent = career.mathMeter;
    elements.detailsWhatTheyDo.textContent = career.whatTheyDo;

    // Timeline
    elements.detailsTimelineContainer.innerHTML = '';
    career.roadmap.forEach((step) => {
      const item = document.createElement('div');
      item.className = 'timeline-step';
      item.innerHTML = `
        <div class="timeline-dot"></div>
        <h5>${step.phase}</h5>
        <p>${step.desc}</p>
      `;
      elements.detailsTimelineContainer.appendChild(item);
    });

    // Skills
    elements.detailsSkillsContainer.innerHTML = career.skills
      .map((s) => `<span class="skill-chip">⚡ ${s}</span>`)
      .join('');

    // Courses & Exams
    elements.detailsCoursesList.innerHTML = career.courses
      .map((c) => `<li>👉 <span>${c}</span></li>`)
      .join('');

    elements.detailsExamsList.innerHTML = career.exams
      .map((e) => `<li>🎯 <span>${e}</span></li>`)
      .join('');

    elements.detailsScopeText.textContent = career.scope;

    // Bookmark state
    updateDetailsBookmarkButton(state.bookmarkedIds.includes(career.id));
  }

  function updateDetailsBookmarkButton(isSaved) {
    if (!elements.detailsBookmarkIcon || !elements.detailsBookmarkText) return;
    elements.detailsBookmarkIcon.textContent = isSaved ? '⭐' : '🤍';
    elements.detailsBookmarkText.textContent = isSaved ? 'Saved in Dream List' : 'Save Career';
    elements.detailsBookmarkBtn.classList.toggle('btn-primary', isSaved);
    elements.detailsBookmarkBtn.classList.toggle('btn-secondary', !isSaved);
  }

  /* ==========================================================================
     9. Bookmarking Functionality
     ========================================================================== */
  function toggleBookmark(careerId) {
    const idx = state.bookmarkedIds.indexOf(careerId);
    let isAdded = false;

    if (idx > -1) {
      state.bookmarkedIds.splice(idx, 1);
      isAdded = false;
    } else {
      state.bookmarkedIds.push(careerId);
      isAdded = true;
      triggerConfetti();
    }

    saveBookmarksToStorage(state.bookmarkedIds);
    updateBookmarkBadges();

    if (state.currentScreen === 'suggestions') {
      renderSuggestions();
    } else if (state.currentScreen === 'details' && state.activeCareerId === careerId) {
      updateDetailsBookmarkButton(isAdded);
    }

    const career = CAREERS_DATA.find((c) => c.id === careerId);
    showToast(
      isAdded ? 'Saved! ⭐' : 'Removed',
      isAdded ? `Added "${career ? career.title : ''}" to your saved list.` : 'Removed from saved.',
      isAdded ? 'success' : 'info'
    );
  }

  function updateBookmarkBadges() {
    const count = state.bookmarkedIds.length;
    if (elements.savedCountBadge) {
      elements.savedCountBadge.textContent = count;
    }
  }

  /* ==========================================================================
     10. Course Recommendations Tab Switcher (Screen 5)
     ========================================================================== */
  function switchCoursesTab(stage) {
    if (stage === '12') {
      elements.courses10TabBtn.classList.remove('active');
      elements.courses12TabBtn.classList.add('active');
      elements.courses10Content.classList.remove('active');
      elements.courses12Content.classList.add('active');
    } else {
      elements.courses10TabBtn.classList.add('active');
      elements.courses12TabBtn.classList.remove('active');
      elements.courses10Content.classList.add('active');
      elements.courses12Content.classList.remove('active');
    }
  }

  /* ==========================================================================
     11. Toast Notifications
     ========================================================================== */
  function showToast(title, message, type = 'info') {
    if (!elements.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = '💡';
    if (type === 'success') icon = '🎉';
    if (type === 'warn') icon = '⚠️';

    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <p class="toast-message">${message}</p>
      </div>
      <button class="toast-close" aria-label="Dismiss">✖</button>
    `;

    elements.toastContainer.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    const timer = setTimeout(() => dismissToast(toast), 3800);

    toast.querySelector('.toast-close').addEventListener('click', () => {
      clearTimeout(timer);
      dismissToast(toast);
    });
  }

  function dismissToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }

  /* ==========================================================================
     12. Form Validation (Screen 6: About / Mentor Query)
     ========================================================================== */
  function handleMentorForm(e) {
    e.preventDefault();

    const nameIn = document.getElementById('mentorName');
    const emailIn = document.getElementById('mentorEmail');
    const classIn = document.getElementById('mentorClass');
    const msgIn = document.getElementById('mentorMessage');

    const nameErr = document.getElementById('mentorNameErr');
    const emailErr = document.getElementById('mentorEmailErr');
    const classErr = document.getElementById('mentorClassErr');
    const msgErr = document.getElementById('mentorMsgErr');

    nameErr.textContent = '';
    emailErr.textContent = '';
    classErr.textContent = '';
    msgErr.textContent = '';

    let isValid = true;

    if (!nameIn.value.trim() || nameIn.value.trim().length < 2) {
      nameErr.textContent = 'Please enter your name.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailIn.value.trim() || !emailRegex.test(emailIn.value.trim())) {
      emailErr.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!classIn.value) {
      classErr.textContent = 'Please choose your class.';
      isValid = false;
    }

    if (!msgIn.value.trim() || msgIn.value.trim().length < 6) {
      msgErr.textContent = 'Please type your question.';
      isValid = false;
    }

    if (!isValid) return;

    const studentName = nameIn.value.trim();
    elements.mentorContactForm.reset();
    triggerConfetti();

    showToast(
      'Question Sent! 🚀',
      `Thank you, ${studentName}! Our career guidance mentors will reply within 24 hours.`,
      'success'
    );
  }

  /* ==========================================================================
     13. Bind Navigation Buttons & Events
     ========================================================================== */
  function setupNavigationEvents() {
    // 1. Header controls
    elements.headerHomeBtn.addEventListener('click', () => navigateTo('welcome'));
    elements.themeToggleBtn.addEventListener('click', toggleTheme);
    elements.openAboutBtn.addEventListener('click', () => navigateTo('about'));

    elements.headerBookmarksBtn.addEventListener('click', () => {
      navigateTo('suggestions');
      showToast('Career Matches 🎯', 'Explore and save your favorite career options.', 'info');
    });

    // Stepper dots click
    elements.stepDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        navigateTo(dot.dataset.screen);
      });
    });

    // 2. Screen 1: Welcome
    elements.welcomeStartBtn.addEventListener('click', () => navigateTo('profile'));
    elements.welcomeNextBtn.addEventListener('click', () => navigateTo('profile'));
    elements.welcomeAboutBtn.addEventListener('click', () => navigateTo('about'));

    // 3. Screen 2: Profile
    elements.profileBackBtn.addEventListener('click', () => navigateTo('welcome'));
    elements.profileHomeBtn.addEventListener('click', () => navigateTo('welcome'));
    elements.profileNextBtn.addEventListener('click', () => {
      if (state.studentProfile.interests.length === 0) {
        showToast('Hold on! ⚠️', 'Please select at least 1 core interest.', 'warn');
        return;
      }
      triggerConfetti();
      navigateTo('suggestions');
    });

    // 4. Screen 3: Suggestions
    elements.suggestionsBackBtn.addEventListener('click', () => navigateTo('profile'));
    elements.suggestionsHomeBtn.addEventListener('click', () => navigateTo('welcome'));
    elements.suggestionsNextBtn.addEventListener('click', () => navigateTo('details'));

    // Category pills filter
    elements.catFilterChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        elements.catFilterChips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        state.suggestionsCategory = chip.dataset.cat;
        renderSuggestions();
      });
    });

    // Search filter
    if (elements.suggestionsSearchInput) {
      elements.suggestionsSearchInput.addEventListener('input', (e) => {
        state.suggestionsSearch = e.target.value;
        if (elements.clearSuggestionsSearchBtn) {
          elements.clearSuggestionsSearchBtn.style.display = state.suggestionsSearch ? 'block' : 'none';
        }
        renderSuggestions();
      });
    }

    if (elements.clearSuggestionsSearchBtn) {
      elements.clearSuggestionsSearchBtn.addEventListener('click', () => {
        state.suggestionsSearch = '';
        elements.suggestionsSearchInput.value = '';
        elements.clearSuggestionsSearchBtn.style.display = 'none';
        renderSuggestions();
      });
    }

    if (elements.resetSuggestionsFilterBtn) {
      elements.resetSuggestionsFilterBtn.addEventListener('click', () => {
        state.suggestionsCategory = 'all';
        state.suggestionsSearch = '';
        if (elements.suggestionsSearchInput) elements.suggestionsSearchInput.value = '';
        elements.catFilterChips.forEach((c) => c.classList.toggle('active', c.dataset.cat === 'all'));
        renderSuggestions();
      });
    }

    // 5. Screen 4: Details
    elements.detailsBackBtn.addEventListener('click', () => navigateTo('suggestions'));
    elements.detailsHomeBtn.addEventListener('click', () => navigateTo('welcome'));
    elements.detailsNextBtn.addEventListener('click', () => navigateTo('courses'));

    if (elements.detailsBookmarkBtn) {
      elements.detailsBookmarkBtn.addEventListener('click', () => {
        toggleBookmark(state.activeCareerId);
      });
    }

    // 6. Screen 5: Courses
    elements.coursesBackBtn.addEventListener('click', () => navigateTo('details'));
    elements.coursesHomeBtn.addEventListener('click', () => navigateTo('welcome'));
    elements.coursesFinishBtn.addEventListener('click', () => {
      triggerConfetti();
      navigateTo('about');
    });

    elements.courses10TabBtn.addEventListener('click', () => switchCoursesTab('10'));
    elements.courses12TabBtn.addEventListener('click', () => switchCoursesTab('12'));

    // 7. Screen 6: About
    elements.aboutBackBtn.addEventListener('click', () => navigateTo('courses'));
    elements.aboutHomeBtn.addEventListener('click', () => navigateTo('welcome'));
    elements.aboutRestartBtn.addEventListener('click', () => {
      triggerConfetti();
      navigateTo('profile');
      showToast('Starting Over 🔄', 'Let\'s explore fresh career pathways!', 'info');
    });

    if (elements.mentorContactForm) {
      elements.mentorContactForm.addEventListener('submit', handleMentorForm);
    }
  }

  /* ==========================================================================
     14. Initialization
     ========================================================================== */
  function init() {
    applyTheme(state.currentTheme);
    updateBookmarkBadges();
    setupProfileEvents();
    setupNavigationEvents();

    // Start on Welcome screen
    navigateTo('welcome');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
