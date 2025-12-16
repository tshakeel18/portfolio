/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Touqeer Shakeel",
  title: "Hi all, I'm Touqeer Shakeel",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Angular /Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1QNNLTwoVBQIt8Vct-nREAInHlMjTDEx3/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/touqeer.shakeel",
  linkedin: "https://www.linkedin.com/in/touqeer-shakeel/",
  gmail: "touqeershakeel@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Engineering & Technology, Taxilla",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Software Engineering",
      duration: "September 2008 - June 2012",
      desc: "Worked on various projects related to Software Development, Web Development, Mobile Application Development, Database Design and Development."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Consultant – Front-End",
      company: "ClewMed",
      companylogo: require("./assets/images/clew.png"),
      color: "#000000",
      date: "June 2022 – June 2025",
      desc: "CLEW offers an intelligent clinical surveillance platform, powered by AI-driven prediction models for patient deterioration and best practice clinical protocols.",
      descBullets: [
        `Architected scalable and maintainable front-end solutions using Angular in a
        healthcare-focused environment.`,
        `Migrated legacy codebases to modular Angular architecture using standalone
        components and lazy loading.`,
        `Developed reusable UI components and custom charts tailored to clinical workflows.`,
        `Collaborated with UX, product, and backend teams to align implementation with
        business goals.`,
        `Spearheaded front-end testing and CI/CD improvements, resulting in enhanced code
        quality and accelerated deployment times.`,
        `Mentored team, sharing skills and expertise and encouraged each member to bring
        forward ideas and suggestions for improvement.`,
        `Ensured application security, performance, and compliance by following healthcare standards, optimizing runtime efficiency, and implementing best practices for data handling.`
      ]
    },
    {
      role: "Software Architect",
      company: "Trilogy",
      companylogo: require("./assets/images/trilogy.png"),
      color: "#ffffff",
      date: "Jan 2019 – June 2022",
      desc: "Designed scalable app architectures and reusable frameworks at Trilogy, aligning dev efforts with business goals in a fast-paced Agile environment.",
      descBullets: [
        `Authored development guidelines to expedite application design efforts through ready-made frameworks. Customized in-development software to client's current hardware environments, designing applications to span multiple systems.`,
        `Developed application architecture strategy to specifically align with employer business goals. Designed architecture strategies for large-scale system wide application deployments.`,
        `Employed integrated development environments (IDEs). Leveraged Agile methodologies to move development lifecycle rapidly through initial prototyping to enterprise-quality testing and final implementation.`,
        `Established clear system performance standards and wrote specifications. Conferred with project managers and other stakeholders to fully understand software design specifications and plan optimal development approaches.`
      ]
    },
    {
      role: "Front End Architect And Team Lead",
      company: "Aurea Software",
      color: "#ffffff",
      companylogo: require("./assets/images/aurea.png"),
      date: "SEP 2018 - DEC 2018",
      desc: "Developed scalable enterprise apps using C#, .NET, Java Spring Boot, Node.js, React.js, Angular, Next.js, and Python. Collaborated across teams in Agile workflows to deliver secure, high-performance solutions. Improved UI/UX, led documentation including BIM models, and ensured quality releases through testing, debugging, and cross-platform optimization.",
      descBullets: [
        "Collaborated with stakeholders to align creative proposals and UI/UX design practices with business and functional requirements.",

        "Followed Agile SDLC best practices to rapidly deliver client iterations, ensuring scalability, performance, and maintainability.",

        "Designed and developed robust, scalable solutions using C#, .NET, Python, Angular, HTML, CSS, and JavaScript.",

        "Led front-end team, mentoring junior developers and conducting code reviews to ensure adherence to best practices and coding standards.",

        "Reviewed specifications and delivered technology solutions that exceeded client expectations for usability, performance, and compliance."
      ]
    },
    {
      role: "Sr. Front-End Engineer",
      company: "Aurea Software (CrossOver)",
      companylogo: require("./assets/images/aurea.png"),
      date: "JUL 2017 - APR 2018",
      color: "#ffffff",
      desc: "Improved UI performance, regulatory compliance, navigation, security, and end-user experience across enterprise systems.",
      descBullets: [
        "Enhanced user interaction and design flexibility by implementing responsive layouts and reusable UI components to improve overall usability..",

        "Improved site navigation and aesthetics through intuitive user flows, consistent styling, and modern design practices.",

        "Set up firewalls, encryption, and performance improvements to ensure application security, data protection, and faster load times.",

        "Managed experiential UI for product launches and redesigns by collaborating with stakeholders to deliver engaging and user-focused interfaces.",

        "Collaborated with cross-functional teams including developers, designers, and stakeholders to translate business requirements into high-quality user experiences.",

        "Addressing employee or production issues directly and promptly reduced resource and time losses. Tracked inventory, employee hours, and receipts."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "DataSmith",
      companylogo: require("./assets/images/datasmith.png"),
      date: "JAN 2014 - APR 2015",
      color: "#ffffff",
      desc: "Developed responsive and dynamic Angular front-end components integrated with .NET-based RESTful APIs, ensuring seamless user experience and backend stability.",
      descBullets: [
        "Built and maintained Angular-based UI components with reusable, responsive design patterns.",
        "Integrated frontend components with .NET backend services through RESTful APIs, ensuring smooth client-server communication.",
        "Collaborated with engineering teams to define system architecture, optimize server-side logic, and improve application performance.",
        "Fixed bugs, implemented new features, and optimized performance across the full stack.",
        "Maintained detailed documentation for system requirements, API specifications, and deployment workflows to support cross-functional development.",
        "Participated in software rollout planning and client meetings to gather requirements and resolve discrepancies, ensuring project alignment and quality delivery."
      ]
    }
    // {
    //         role: "Sr. Software Engineer",
    //         company: "Aurea Software (CrossOver)",
    //         companylogo: require("./assets/images/aurea.png"),
    //         date: "Jan 2017 – Jun 2017",
    //         desc: "Designed scalable Angular + Spring Boot modules, resolved technical issues, and optimized system performance across enterprise applications.",
    //         descBullets: [
    //         "Resolved high‑priority technical issues.",
    //
    //         "Designed scalable modules meeting performance needs.",
    //
    //         "Developed innovative systems with Angular & Spring Boot.",
    //
    //         "Helped engineers find/fix software bugs."
    //         ]
    //       }, {
    //         role: "Sr. Front-End Developer",
    //         company: "Aurea Software (CrossOver)",
    //         companylogo: require("./assets/images/aurea.png"),
    //         date: "Mar 2016 – Dec 2016",
    //         desc: "Enhanced UI compliance, performance, navigation, and code quality while conducting UX testing and producing interactive prototypes.",
    //         descBullets: [
    //         "Improved UI compliance and navigation.",
    //         ]
    //       }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SIGNIFICANT SYSTEMS & PRODUCTS CONTRIBUTED ACROSS MY CAREER",
  projects: [
    {
      image: require("./assets/images/clew.png"),
      projectName: "ClewMed Intelligent Clinical Platform",
      projectDesc:
        "Architected scalable and modular Angular-based healthcare UI, built reusable clinical components, optimized performance, and contributed to AI-driven predictive workflow enhancements.",
      footerLink: []
    },
    {
      image: require("./assets/images/trilogy.png"),
      projectName: "Trilogy Enterprise Architecture Framework",
      projectDesc:
        "Designed full-stack architectures, reusable React/Next.js scaffolding, GraphQL integration, SSR optimization, and CI/CD automation for multiple enterprise products.",
      footerLink: []
    },
    {
      image: require("./assets/images/aurea.png"),
      projectName: "Aurea Digital Twin & BIM Workflow Platform",
      projectDesc:
        "Led front-end architecture, built scalable UI systems using React/Angular, improved performance, developed BIM model workflows, validated digital handover data, and managed complex enterprise UX upgrades.",
      footerLink: []
    },
    {
      image: require("./assets/images/crossover.png"),
      projectName: "CrossOver Front-End Optimization & A/B Testing Suite",
      projectDesc:
        "Built dynamic Angular/React interfaces, automation scripts, A/B testing pipelines, personalization modules, and UI performance enhancements across multiple high-traffic SaaS products.",
      footerLink: []
    },
    {
      image: require("./assets/images/kpvc.webp"),
      projectName: "K-Pop Vocal Coach Platform",
      projectDesc:
        "Developed a modern Next.js frontend with responsive UI and interactive user flows, backed by a scalable Node.js API handling authentication, business logic, and data management. Focused on performance, clean architecture, and seamless frontend–backend integration.",
      footerLink: []
    },

    {
      image: require("./assets/images/sustainabilityyard.webp"),
      projectName: "Sustainability Yard Platform",
      projectDesc:
        "Created a sustainability-focused platform using Flutter for mobile experiences and .NET Core for backend services, leveraging AWS CLI to automate deployments and maintain scalable cloud infrastructure.",
      footerLink: []
    },

    {
      image: require("./assets/images/zoovu.jfif"),
      projectName: "Zoovu Product Experience Platform",
      projectDesc:
        "Developed modular React and Vue components with state management and optimized rendering, backed by a Node.js service layer providing REST/GraphQL APIs, data handling, and integration workflows.",
      footerLink: []
    },

    {
      image: require("./assets/images/xtel.webp"),
      projectName: "Xtel Enterprise Platform",
      projectDesc:
        "Developed responsive and scalable user interfaces using React, integrated with a .NET Core backend delivering secure APIs, enterprise business logic, and data processing. Focused on clean architecture, performance optimization, and seamless frontend–backend communication.",
      footerLink: []
    },
    {
      image: require("./assets/images/wavyroom.jpg"),
      projectName: "WavyRoom Interactive 3D Experience",
      projectDesc:
        "Built an immersive web-based 3D experience using React and Three.js, featuring real-time animations, interactive scenes, and optimized rendering for smooth performance. Focused on creative visuals, component-driven architecture, and responsive user interactions.",
      footerLink: []
    },

    {
      image: require("./assets/images/angular.png"),
      projectName: "Angular Data Visualization Component Library",
      projectDesc:
        "Designed and built a reusable Angular 15 component library leveraging D3.js for advanced data visualizations. Implemented modular, customizable charts with strong performance, clean APIs, and seamless integration across enterprise Angular applications.",
      footerLink: []
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },

    {
      title: "Building Generative AI-Powered Applications with Python",
      subtitle:
        "Completed an IBM-authorized, Coursera-offered course focused on building generative AI applications using Python, covering foundational AI concepts, model integration, and practical implementation techniques.",
      image: require("./assets/images/AIPoweredApplications.jpg"),
      imageAlt: "IBM Coursera Generative AI Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/verify/HDS9524RVZV9"
        }
      ]
    },

    {
      title: "Blockchain Specialization",
      subtitle:
        "Completed a comprehensive specialization covering blockchain fundamentals including encryption, hashing, consensus mechanisms, transactions, and public–private key cryptography. Designed, developed, and tested smart contracts and decentralized applications on a private Ethereum blockchain, with focus on dApp architecture, best practices, scalability, and privacy.",
      image: require("./assets/images/blockchain-certificate.jpg"),
      imageAlt: "Blockchain Specialization Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/verify/specialization/VEWZU6LX5FR7"
        }
      ]
    },

    {
      title: "Data Analysis with Python",
      subtitle:
        "Completed an IBM-authorized Coursera course focused on data analysis using Python, covering data cleaning, exploration, and visualization with libraries such as Pandas, NumPy, and Matplotlib, along with practical data-driven insights.",
      image: require("./assets/images/ibm-coursera-data-analysis.jpg"),
      imageAlt: "IBM Coursera Data Analysis with Python Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://cour sera.org/ver ify/4QMBWLXA1G1V"
        }
      ]
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      subtitle:
        "Completed a Google-authorized Coursera course introducing fundamental data concepts, including data types, data collection, analysis, and interpretation, with a focus on data-driven decision making.",
      image: require("./assets/images/google-coursera-data.jpg"),
      imageAlt: "Google Coursera Data Foundations Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/verify/K5BSJ6FLXI67"
        }
      ]
    },

    {
      title: "Developing AI Applications with Python and Flask",
      subtitle:
        "Completed an IBM-authorized Coursera course on building AI-powered web applications using Python and Flask, covering model integration, API development, and deployment of AI solutions.",
      image: require("./assets/images/ibm-coursera-ai-flask.jpg"),
      imageAlt:
        "IBM Coursera AI Applications with Python and Flask Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://cour sera.org/ver ify/9L8KR4Z2MU0E"
        }
      ]
    },
    {
      title: "Generative AI: Introduction and Applications",
      subtitle:
        "Completed an IBM-authorized Coursera course introducing generative AI concepts, techniques, and applications, covering foundational AI models, prompt engineering, and practical use cases for content generation.",
      image: require("./assets/images/ibm-coursera-generative-ai.jpg"),
      imageAlt: "IBM Coursera Generative AI Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/verify/SGKIHKRT9N48"
        }
      ]
    },
    {
      title: "Machine Learning with Python",
      subtitle:
        "Completed an IBM-authorized Coursera course focused on machine learning fundamentals using Python, covering supervised and unsupervised learning, model evaluation, and practical implementation with libraries such as scikit-learn and pandas.",
      image: require("./assets/images/ibm-coursera-ml.jpg"),
      imageAlt: "IBM Coursera Machine Learning with Python Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://cour sera.org/ver ify/5LQHO4F19CNG"
        }
      ]
    },
    {
      title: "Ask Questions to Make Data-Driven Decisions",
      subtitle:
        "Completed a Google-authorized Coursera course focused on framing effective questions and using data to drive informed decision-making, covering data collection, analysis, and interpretation techniques.",
      image: require("./assets/images/google-coursera-data-decisions.jpg"),
      imageAlt: "Google Coursera Data-Driven Decisions Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://cour sera.org/ver ify/Z8SJAOUZMKYL"
        }
      ]
    },

    {
      title: "Generative AI: Prompt Engineering Basics",
      subtitle:
        "Completed an IBM-authorized Coursera course introducing the fundamentals of prompt engineering for generative AI, including techniques for crafting effective prompts, guiding AI model outputs, and practical applications in content generation.",
      image: require("./assets/images/ibm-coursera-prompt-engineering.jpg"),
      imageAlt: "IBM Coursera Generative AI Prompt Engineering Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://cour sera.org/ver ify/6FWA98JHJTE0"
        }
      ]
    },
    {
      title: "Python for Data Science, AI & Development",
      subtitle:
        "Completed an IBM-authorized Coursera course focused on Python programming for data science and AI applications, covering Python fundamentals, data analysis, visualization, and development of AI-driven solutions.",
      image: require("./assets/images/ibm-coursera-python.jpg"),
      imageAlt:
        "IBM Coursera Python for Data Science, AI & Development Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://cour sera.org/ver ify/7SS7RTFZ56RH"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  // title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  // displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  //   title: "TALKS",
  //   subtitle: emoji(
  //     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  //   ),
  //
  //   talks: [
  //     {
  //       title: "Build Actions For Google Assistant",
  //       subtitle: "Codelab at GDG DevFest Karachi 2019",
  //       slides_url: "https://bit.ly/saadpasta-slides",
  //       event_url: "https://www.facebook.com/events/2339906106275053/"
  //     }
  //   ],
  //   display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  //   title: emoji("Podcast 🎙️"),
  //   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  //
  //   // Please Provide with Your Podcast embeded Link
  //   podcast: [
  //     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  //   ],
  //   display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3226126001",
  email_address: "touqeershakeel@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
