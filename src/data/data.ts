import { ProjectPropsTypes, SkillPropsTypes } from "@/types";

export const NAVLINKS = [
    { id: "01", label: "Home", path: "#home" },
    { id: "02", label: "About", path: "#about" },
    { id: "03", label: "Projects", path: "#projects" },
    { id: "04", label: "Contact", path: "#contact" },
];

export const PROJECTS: ProjectPropsTypes[] = [
    {
        id: "01",
        label: "MovieVerse",
        link: "/projects/movieverse",
        githubLink: "https://github.com/mitesh-kumavat/movieverse",
        liveLink: "https://flask-movieverse.vercel.app/",
        overview:
            "Movieverse is a Flask-based web application designed to provide personalized movie recommendations to users. It uses a clean and responsive UI to ensure an engaging experience for movie enthusiasts.",
        tags: ["Python", "Flask", "API Development", "Tailwind CSS", "SQLite"],
        imageUrl: "./public/movieverse.png",
        theme: "pink",
    },
    {
        id: "02",
        label: "Devhelp",
        link: "/projects/devhelp",
        githubLink: null,
        liveLink: "https://devhelp.app/",
        overview:
            "DevHelp is the platform where developers can discover curated resources, UI libraries, coding resources, and expert tutorials to accelerate their development journey.",
        tags: [
            "React",
            "Axios",
            "Framer Motion",
            "Vite",
            "NodeJS",
            "MongoDB",
            "Tailwind CSS",
            "ExpressJS",
            "REST Api",
        ],
        imageUrl: null,
        theme: "purple",
    },
    {
        id: "03",
        label: "Opinions",
        link: "/projects/opinions",
        githubLink: "https://github.com/mitesh-kumavat/opinions",
        liveLink: null,
        overview:
            "Opinions is a MERN-based polling (voting) website, where users can create polls or vote on existing ones.",
        tags: [
            "React",
            "Axios",
            "NodeJS",
            "TypeScript",
            "MongoDB",
            "Tailwind CSS",
            "ExpressJS",
            "API Development",
            "REST Api",
        ],
        imageUrl: null,
        theme: "sky",
    },
    {
        id: "04",
        label: "Landing Page",
        link: "/projects/landing-page",
        githubLink: "https://github.com/mitesh-kumavat/LandingPage",
        liveLink: "https://mitesh-page.vercel.app/",
        overview:
            "A landing page for websites with a modern UI using Tailwind CSS for styling and React to create a single-page website.",
        tags: ["React", "Tailwind CSS", "Styling", "UI/UX", "Designing"],
        imageUrl: null,
        theme: "cyan",
    },
];

export const SKILLS: SkillPropsTypes[] = [
    { id: "01", label: "HTML", icon: "https://cdn.simpleicons.org/html5/EF652A" },
    { id: "02", label: "CSS", icon: "https://cdn.simpleicons.org/css3/1572B6" },
    { id: "03", label: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { id: "04", label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { id: "05", label: "ReactJS", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { id: "06", label: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { id: "07", label: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { id: "08", label: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
    { id: "09", label: "Shadcn", icon: "https://cdn.simpleicons.org/shadcnui/000000" },
    { id: "10", label: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { id: "11", label: "ExpressJS", icon: "https://cdn.simpleicons.org/express/000000" },
    { id: "12", label: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { id: "13", label: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { id: "14", label: "Java", icon: "https://cdn.simpleicons.org/java/007396" },
    { id: "15", label: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { id: "16", label: "Flask", icon: "https://cdn.simpleicons.org/flask/000000" },
    { id: "17", label: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
    { id: "18", label: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    { id: "19", label: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { id: "20", label: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
    { id: "21", label: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" }
];

export const PERSONAL_DETAILS = {
    name: "Mitesh Kumavat",
    role: "Full Stack Developer",
    tagline: "Building scalable and efficient web applications",
    about: "Hey, I'm Mitesh Kumavat, a passionate Full Stack Developer with a keen interest in creating high-performance web applications. I love solving problems with clean and efficient code while continuously exploring new technologies.",
    socialLinks: [
        {
            label: "GitHub",
            url: "https://github.com/mitesh-kumavat",
        },
        {
            label: "LinkedIn",
            url: "https://linkedin.com/in/mitesh-kumavat",
        },
        {
            label: "Instagram",
            url: "https://instagram.com/mitesh_777",
        },
        {
            label: "Email",
            url: "miteshkumavat777@gmail.com",
        },
        {
            label: "Portfolio",
            url: "https://miteshkumavat.vercel.app",
        }
    ],
    interests: [
        "Full-Stack Development",
        "Artificial Intelligence",
        "Open-Source Contributions",
        "Tech Blogging",
        "UI/UX Design"
    ],
    skillsOverview: [
        "Expertise in React, Next.js, and modern front-end development",
        "Proficient in backend technologies like Node.js, Express, and Flask",
        "Experience with databases such as MongoDB and SQL",
        "Passionate about building AI-powered applications",
        "Strong foundation in data structures and algorithms"
    ]
};

export const keywords: string[] = [
    "Mitesh Kumavat",
    "Mitesh",
    "Kumavat",
    "Portfolio",
    "Developer",
    "Full Stack Developer",
    "Web Developer",
    "Software Developer",
    "React",
    "Next.js",
    "Node.js",
    "TailwindCSS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "MERN Stack Developer",
    "MongoDB",
    "Express",
    "LJ University",
    "Ahmedabad",
    "Gujarat",
    "India",
    "Student",
];
