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
  username: "Ketaki Mankar",
  title: "Hi all, I'm Ketaki",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of developing projects using languages like C++, C#, Python. Have keen interest in data science and used some data analytics tool like tableau and Power BI."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1nHERHW3mWO2YN68RmpqeVXyZayFYef96/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ketaki001",
  linkedin: "https://www.linkedin.com/in/ketaki-mankar-8680041aa/",
  gmail: "mankarketaki2001@gmail.com",
  twitter: "https://twitter.com/ketaki_mankar",
  instagram : "https://www.instagram.com/ketaki_mankar/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY COMPUTER ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Logical and organized individual with a strong foundation in software engineering"
    ),
    emoji("⚡ Proficient in DATA SCIENCE, C, C++, PYTHON, JAVASCRIPT, Dot Net, and SQL through multiple projects during academics."),
    emoji(
      "⚡ Strong knowledge of Hadoop ecosystem and also experienced in processing and analyzing large volumes of structured and unstructured data using Hadoop."
    )
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "MIT ACADEMY OF ENGINEERING",
      logo: require("./assets/images/mit_aoe.png"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "2019-2023",
      desc: "Participated in the various college events and published a research paper.",
      descBullets:["CGPA : 8.35"]
    },
    {
      schoolName: "Abhishek Vidyalayam",
      logo: require("./assets/images/HSC_LOGO.jpg"),
      subHeader: "HSC",
      duration: "2018-2019",
    },
    {
      schoolName: "Alphonsa High School",
      logo: require("./assets/images/AHS.png"),
      subHeader: "ssc",
      duration: "2016-2017",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer",
      company: "SteepGraph Systems",
      companylogo: require("./assets/images/steep2.png"),
      date: "Jan 2023 - Present",
      desc: "Skills:",
      descBullets: [
        "Key Skills: Aras Innovator,C#,JavaScript,SQL",
        "Product Lifecycle Management (PLM) for effective management and optimization of product development processes throughout their lifecycle.",
        "Developed an XSLT report template for the monthly payroll report's structure and layout.Leveraged C# server-side methods to fetch data from a SQL database.",
        "Implemented security measures like authentication and access controls for data protection.",
        "Conducted thorough testing and debugging to resolve any report generation issues.",
        "Documented the process with instructions for future maintenance and enhancements."
        
      ]
    },
    {
      role: "Web Developer",
      company: "Spark Foundation",
      companylogo: require("./assets/images/spark1.jpg"),
      date: "June 2021 – July 2021",
      desc: "Project: Developed The Banking System",
      descBullets: [
        "Key Skills: HTML,CSS,Bootstrap,MySQL",
        "Developed a customer transaction system with money transactions, history, and balance features.",
        "Utilized HTML/CSS for frontend design and MySQL as the backend database.",
        "Built a dynamic system fetching real-time data from the backend.",
        "Ensured data security and integrity with backend validation.",
        "Designed a user-friendly interface for seamless experience."
      ]
    },
    {
      role: "AI ML Intern",
      company: "Critical AI",
      companylogo: require("./assets/images/AI1.png"),
      date: "June 2022 – July 2022",
      desc: " Project: Developed Aircraft Identification Using Mchine Learning",
      descBullets: [
      "Internship at Critical AI Private Limited in Artificial Intelligence and Machine Learning.",
      "Key project: Aircraft identification using [specific method/algorithm].",
      "Explored various sampling methods for meaningful insights from the dataset.",
      "Employed data normalization techniques for analysis.",
      "Utilized IBM's SPPS software for dataset creation and effective work.",
      "Cleaned and preprocessed the data for quality and reliability and applied techniques like Winsorization to handle outliers.",
      "Performed essential data operations such as importing and normalization.",
      "Studied variation between different aircraft identification models."
        
       ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "List of the projects that I developed with my team!",
  projects: [
    {
       projectName: "Book Recommendation system",
      projectDesc: "Technology Used: HTML, CSS, JS, DJANGO, Machine Learning, Deep Learning. The aim of this project is to build a book recommendation system for all the book lovers using machine learning algorithms.It would help the user determine good content by predicting the users rating of each item and popular searches.",
      footerLink: [
        {
          name: "View Research Paper",
          url: "https://ieeexplore.ieee.org/document/100997"
        }
        //  you can add extra buttons here.
      ]
    },
    {
       projectName: "Vehicle Detection and classification System",
      projectDesc: "Web application for keeping track of vehicles on the road and classifying them according to the vehicle type. It is developed using Computer Vision techniques and deployed on Streamlit cloud",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/ketaki001/Object-Detecction"
        }
        //  you can add extra buttons here.
      ]
    },
    {
       projectName: "Café Management System",
      projectDesc: "Technology Used: Dot Net,SQL. This application manages the information about different dishes served at the cafe. This application also generates the bill for the customers in pdf format",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/ketaki001/Cafe-Management-System"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7620675098",
  email_address: "mankarketaki2001@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
