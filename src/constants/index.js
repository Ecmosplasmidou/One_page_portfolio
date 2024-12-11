import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    python,
    php,
    git,
    figma,
    django,
    symfony,
    shopify,
    carrent,
    jobit,
    tripguide,
    trendyparis,
    threejs,
    sncf,
    three_wa,
    hetic,
    lms,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "studies",
      title: "Studies",
    },
    {
      id: "tech",
      title: "Tech",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer (In training)",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django, 
    },
    {
      name: "Php",
      icon: php,
    },
    {
      name: "Symfony",
      icon: symfony, 
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Géstionnaire de flotte",
      company_name: "SNCF-réseau (NOISY-LE-SEC)",
      icon: sncf,
      iconBg: "#383E56",
      date: "Dec 2018 - Nov 2024",
      points: [
        "Coordinate and lead all maintenance site operations.",
        "Quickly reorganize and redirect production based on unforeseen circumstances.",
        "Provide real-time visibility on work progress.",
        "Receive and return trains on schedule to ensure the transport plan is maintained.",
      ],
    },
    {
      title: "Autoentrepreneur",
      company_name: "Trendy-Paris (BONDY)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Mai 2021 - Dec 2023",
      points: [
        "Design an e-commerce website with Shopify.",
        "Improve the website's web content.",
        "Responsible for advertising content.",
        "Manage social media platforms.",
        "Define a specifications document and lead the marketing campaign.",
      ],
    },
  ];
  
  const studies = [
    {
      title: "Master's Degree in Information Systems Expertise",
      company_name: "3W Academy (TOULOUSE)",
      icon: three_wa,
      iconBg: "#383E56",
      date: "Jan 2025 - Jui 2026",
      points: [
        "Analyze and define an information systems strategy.",
        "Lead and manage IT projects.",
        "Design and develop a software application.",
        "Build and develop big data models.",
      ],
    },
    {
      title: "Bachelor's in Digital Solutions Design and Development",
      company_name: "HETIC by STUDI (TOULOUSE)",
      icon: hetic,
      iconBg: "#383E56",
      date: "DEC 2023 - OCT 2024",
      points: [
        "Design an e-commerce website with Shopify.",
        "Improve the website's web content.",
        "Responsible for advertising content.",
        "Manage social media platforms.",
        "Define a specifications document and lead the marketing campaign.",
      ],
    },
    {
      title: "Higher Technician Certificate (BTS) in Digital Systems (SN)",
      company_name: "Lycée Marce Sembat (ROUEN)",
      icon: lms,
      iconBg: "#383E56",
      date: "Sep 2016 - Aug 2018",
      points: [
        "Design an e-commerce website with Shopify.",
        "Improve the website's web content.",
        "Responsible for advertising content.",
        "Manage social media platforms.",
        "Define a specifications document and lead the marketing campaign.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Olympic Ticket Hub",
      description:
        "Olympic Ticket Hub is a Django-based site for buying tickets to the 2024 Olympics. Users can view events, select tickets, and pay securely online. Admin features include sales tracking and ticket management, showcasing web dev skills.",
      tags: [
        {
          name: "Python-Django",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "yellow-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Ecmosplasmidou/site_jo_finale",
    },
    {
      name: "Ecmosgotchi",
      description:
        "Ecmosgotchi was my very first project, created using HTML, CSS, and JavaScript." +
      "It is a virtual pet game where you take care of your pet by feeding it, playing games," +
      "and keeping it happy. This project helped me learn the fundamentals of web development" +
      "and sparked my passion for coding.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "yellow-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Ecmosplasmidou/Tamagochi",
      website:"https://ecmosgotchi-tamagotchi-by-ecmosdev.netlify.app/",
    },
    {
      name: "Hafeze Cuisine",
      description:
        "Hafeze Cuisine is a takeaway restaurant serving Italian, Mauritian, and Indian dishes. Enjoy authentic flavors like pasta, pizza, seafood, curries, and breads. Order online for a convenient, high-quality dining experience at home.",
      tags: [
        {
          name: "Python-Flask",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "yellow-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Ecmosplasmidou/hafeze_cuisine",
    },
    {
      name: "Tendy-Paris",
      description:
        "Trendy Paris was a Shopify-based e-commerce project focused on ready-to-wear fashion. The store showcased a curated selection of trendy and chic apparel, embodying the essence of style. Launched to deliver quality and accessible fashion, it operated successfully until December 2023.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "yellow-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Shopify",
          color: "green-text-gradient",
        },
      ],
      image: trendyparis,
      instagram: "https://instagram.com/trendy_paris",
    },
  ];
  
  export { services, technologies, experiences, studies, projects };