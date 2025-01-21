import work_1 from "../../assets/images/projects/work1.png"
import work_2 from "../../assets/images/projects/work2.png"
import work_3 from "../../assets/images/projects/work3.png"
import work_4 from "../../assets/images/projects/work4.jpeg"
import work_5 from "../../assets/images/projects/work5.png"
import work_7 from "../../assets/images/projects/work7.png"
import work_6 from "../../assets/images/projects/work6.png"
import work_8 from "../../assets/images/projects/sophatour.png"

export const projectsData = [
    {
        id: 1,
        src: work_1,
        category: "Web App",
        title: "UIR E-Shop - Marketplace",
        description: "UIR E-Shop is a marketplace for the International\n" +
            "University of Rabat, developed during my internship at JobInTech. The project enhanced branding and student engagement by managing sales, inventory, and utilizing e-commerce\n" +
            "for market insights.",
        tools: ["Spring", "Microservice", "ActiveMq", "Angular", "Tailwind","PrimeNg"]
    },
    {
        id: 2,
        src: work_2,
        category: "Web App",
        title: "JitechPilot - Project Management",
        description: "A project management tool for JobInTech\n" +
            "students at UIR during my internship, enhancing project\n" +
            "tracking and collaboration in an agile environment. The\n" +
            "solution facilitated team coordination, task management,\n" +
            "and progress tracking using agile methodology principles.",
        tools: ["Spring", "JUnit", "Mockito", "MySQL", "Keycloak", "Angular"]
    },
    {
        id: 3,
        src: work_3,
        category: "Web App",
        title: "Training App - E-Learning/Event Management Platform",
        description: "A training management solution, including the\n" +
            "management of learners, programs, trainers, and certificates,\n" +
            "with secure user integration and automatic social media\n" +
            "publication, developed during my internship at DynIT.",
        tools: ["REST", "MySQL", "Spring AOP", "Spring Security", "React", "Bootstrap"]
    },
    {
        id: 4,
        src: work_8,
        category: "Web App",
        title: "SOPHATOUR - Billing Solution",
        description: "Sophatour is a billing solution ERP built with PHP, jQuery, and MySQL, designed to streamline invoicing, payment tracking, and client management. It offers a user-friendly interface and efficient database management for seamless business operations.",
        tools: ["MVP", "MySQL", "PHP", "JQuery", "Bootstrap", "DataGrip"]
    },
  /*  {
        id: 5,
        src: work_6,
        category: "Database",
        title: "Conception and Administration Mysql Database",
        description: "Managed MySQL database design and administration using DataGrip and SQL. Designed database model with Drawio.",
        tools: ["DataGrip","MySQL Server", "SQL", "Drawio"]
    },*/
    {
        "id": 6,
        "src": work_5,
        "category": "Web App",
        "title": "Project Management Platform Landing Page",
        "description": "Developed a responsive landing page for a project management platform, focusing on intuitive UI/UX. Used Figma for design and Angular with TailwindCSS for implementation.",
        "tools": ["Angular", "TailwindCSS", "Figma"]
    },
/*    {
        id: 6,
        src: work_4,
        category: "Database",
        title: "Conception : ERD Data Model",
        description: "Designed the Entity-Relationship Diagram (ERD) data model using Drawio and implemented it using DataGrip. Ensured optimal database schema design for efficient data storage and retrieval, adhering to project requirements and best practices.",
        tools: ["Drawio", "DataGrip"]
    },

 */
/*    {
        id: 7,
        src: work_4,
        category: "DevOps",
        title: "Containerization and deployment",
        description: "Containerization and deployment of the application\n" +
            "with Docker, ensuring efficient environment and version management.",
        tools: ["Azure Cloud", "Docker", "IaC"]
    },

 */
/*    {
        id: 8,
        src: work_4,
        category: "DevOps",
        title: "Building CI/CD Pipeline",
        description: "Automation of test and deployment processes using GitLab CI/CD to streamline software delivery.",
        tools: ["GitLab CI/CD"]
    },

 */
    {
        id: 9,
        src: work_7,
        category: "Operational",
        title: " Implementation of the RADIUS protocol in a\n" +
            "wireless network",
        description: "Network infrastructure design Installation and configuration of the AD (Active Directory) and RADIUS server.\n",
        tools: ["ActiveDirectory", "RADIUS", "Windows Server"]
    },

]