// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import internPeLogo from './assets/company_logo/intenrpe.jpeg';
import prepcodeLogo from './assets/company_logo/prepcode.png';

// Education Section Logo's
import thpsLogo from './assets/education_logo/thpslogo.png';
import LsmLogo from './assets/education_logo/Lsm.jpeg';
import lpcpsLogo from './assets/education_logo/lpcps.png';

// Project Section Logo's
import bankruptbuddyLogo from './assets/work_logo/bankruptbuddy.jpg';
import skillHatchLogo from './assets/work_logo/skillhatch.jpg';
import myportfolioLogo from './assets/work_logo/myportfolio.jpg'
import weatherappLogo from './assets/work_logo/weatherapp.jpg'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: internPeLogo,
      role: "Web Developer",
      company: "InterPe",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      id: 1,
      img: prepcodeLogo,
      role: "Fullstack Developer",
      company: "PrepCode",
      date: "March 2025 - May 2025",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "ReactJs",
        "Tailwind CSS",
        "Nodejs",
        "MongoDb",
        "ExpressJS",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: lpcpsLogo,
      school: "Lucknow Public College Of Professional Studies, Lucknow",
      date: "Oct 2022 - June 2025",
      grade: "8 CGPA",
      desc: "I have completed my Bachelor's degree (BCA) in Computer Applications from Lucknow Public College of Professional Studies,Lucnow. During my time at LPCPS, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. My experience at LPCPS has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelors of Computer Applications - BCA",
    },
    {
      id: 1,
      img: LsmLogo,
      school: "LSM School, Lucknow",
      date: "Apr 2021 - March 2022",
      grade: "79.2%",
      desc: "I completed my class 12 education from , Lalita Shastri Montessori Inter College,Lucknow, where I studied Physics, Chemistry, and Mathematics (PCM)",
      degree: "HSC(XII) - PCM ",
    },
    {
      id: 2,
      img: thpsLogo,
      school: "Town Hall Public High School,Lucknow",
      date: "Apr 2018 - March 2019",
      grade: "88.33%",
      desc: "I completed my class 10 education from Town Hall Public High School, Lucknow, where I studied Science with Computer.",
      degree: "SSC(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Bankrupt Buddy",
      description:
        "A simple money management website using html,css and javascript which includes a todolist, financial aids,sip calculator and expense tracker.This website is basically built to polish my learnings.The platform helps you to manages your expenses stores your important notes and helps you to find any finance related advices ",
      image: bankruptbuddyLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Harshshukla25/Money-Management-Website-",
      webapp: "https://money-management-website-rust.vercel.app/",
    },
    {
      id: 1,
      title: "Skill Hatch",
      description:
        "A full-stack quiz-based platform designed for students and teachers.Student can buy any course they wish to enhance their skills.Instructors can create courses and uploads the lectures and content of that course ",
      image: skillHatchLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","Tailwind"],
      github: "https://github.com/Harshshukla25/SkillHatch-LMS",
      webapp: "https://skill-hatch-lms-9w56-rho.vercel.app/",
    },
    {
      id: 2,
      title: "My Portfolio Website",
      description:
        "A fully responsive and modern personal portfolio built with React and Tailwind CSS, showcasing my skills, projects, experience, and education. Designed with a sleek layout and smooth navigation, the site includes dynamic sections like a skills grid, timeline-based experience/education, and a project showcase modal. Optimized for both desktop and mobile views with clean UI/UX practices.",
      image: myportfolioLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Harshshukla25/my-portfolio",
      webapp: "https://devharsh-portfolio.netlify.app/",
    },
    {
      id: 3,
      title: "Weather-App",
      description:
        "A responsive weather application built with React and Tailwind CSS that delivers real-time weather updates using the OpenWeatherMap API and provide all the necessary data. It features dynamic backgrounds and icons that adapt to current conditions, voice search for hands-free city lookup, text-to-speech weather reports and a 5-day forecast.",
      image: weatherappLogo,
      tags: ["React", "Tailwind CSS","Javascript" ],
      github: "https://github.com/Harshshukla25/Weather-App",
      webapp: "https://harshsh-weather-app.netlify.app/",
    },
  ];  