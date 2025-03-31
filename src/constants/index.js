import { meta, shopify, starbucks, tesla, caloriemate, snowballskirmish } from "../assets/images";
import {
    car,
    contact,
    java,
    estate,
    git,
    github,
    html,
    linkedin,
    mongodb,
    pricewise,
    react,
    snapgram,
    summiz,
    threads,
    cplusplus,
    asm } from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: asm,
        name: "Assembly",
        type: "Backend",
    }
];

export const classes = [
    {
        name: 'CPSC 110 - Computational Thinking',
        description: 'Learned functional programming principles and recursion.',
        skills: ['Functional Programming', 'Problem Solving'],
    },
    {
        name: 'CPSC 121 - Discrete Mathematics',
        description: 'Explored logic, sets, functions, and combinatorics to build a foundation for computer science.',
        skills: ['Logical Thinking', 'Mathematical Proofs', 'Combinatorics'],
    },
    {
        "name": "CPSC 210 - Software Construction",
        "description": "Gained skills in Java, object-oriented programming, and design patterns.",
        "skills": ["Java", "OOP", "Design Patterns"]
    },
    {
        "name": "CPSC 213 - Computer Systems",
        "description": "Gained hands-on experience with low-level programming, system architecture, and memory management.",
        "skills": ["C Programming", "Assembly Language", "Systems Programming"]
    },
    {
        "name": "CPSC 221 - Basic Data Structures and Algorithms",
        "description": "Developed strong problem-solving skills by implementing and analyzing fundamental data structures and algorithms.",
        "skills": ["Data Structures", "Algorithm Analysis", "C++"]
    },
    {
        "name": "STAT 200 - Statistics",
        "description": "Developed knowledge in probability, data analysis, and statistical methods.",
        "skills": ["Probability", "Data Analysis", "Statistical Inference"]
    },
    {
        "name": "STAT 251 - Applied Statistics",
        "description": "Learned statistical modeling, regression analysis, and data-driven decision making.",
        "skills": ["Regression Analysis", "Statistical Modeling", "Data Visualization"]
    },
    {
        "name": "PHIL 220 - Symbolic Logic",
        "description": "Learned to translate natural language arguments into formal logic, and evaluate their validity using symbolic methods.",
        "skills": ["Propositional Logic", "Predicate Logic", "Critical Thinking"]
    }
];


export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/slitt9',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sahil-litt',
    }
];


export const projects = [
    {
        iconUrl: caloriemate,
        theme: 'btn-back-red',
        name: 'CalorieMate Calorie Tracker',
        description: 'A sleek and user-friendly calorie tracker designed to help users log and monitor their daily food intake. The app calculates consumed and remaining calories based on user-defined goals to support a healthy lifestyle.',
        link: 'https://github.com/slitt9/CalorieMate',
    },
    {
        iconUrl: snowballskirmish,
        theme: 'btn-back-blue',
        name: 'Snowball Skirmish',
        description: 'Snowball Skirmish is a fast-paced web game where players engage in exciting snowball fights. The game challenges reflexes and strategy while delivering captivating graphics and engaging gameplay for all ages.',
        link: 'https://github.com/slitt9/Snowball-Skirmish',
        liveLink: 'https://crazygames.com/game/snowball-skirmish',
    },
];
