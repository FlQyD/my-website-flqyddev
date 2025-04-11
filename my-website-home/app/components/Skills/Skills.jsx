'use client';
import React, { useState } from 'react'
import "./Skills.css"
import SkillsTable from './SkillsTable/SkillsTable';

const Skills = () => {
    const [skills, setSkills] = useState([
        {
            title: "Front-end development",
            content: [
                {
                    title: "React",
                    img: "react",
                    content: "I have used React for all kinds of projects, from small ones to the point where I get a headache just going through the components. I feel very comfortable with React nowadays."
                },
                {
                    title: "Vite",
                    img: "vite",
                    content: "Vite is essential when I start a new React app."
                },
                {
                    title: "Next.js",
                    img: "nextjs",
                    content: "I have used Next.js mainly for projects where SEO was a huge factor. Its routing is also a bit easier for me to handle, and I like working with it. After all, this site was built with Next.js too."
                },
                {
                    title: "Tailwind",
                    img: "tailwind",
                    content: "I have to confess that I prefer raw CSS when it's in a small project, because sometimes I can play around with small variables and fine tuning for hours. But when a project reaches a certain size raw CSS can become a bottleneck, so that's why I like to use Tailwind for any project that has a fair size."
                },
                {
                    title: "Bootstrap",
                    img: "bootstrap",
                    content: "I love Bootstrap for projects that has to be finished quickly, or where ascetic is not the highest priority. I usually use it for admin panels or internal tools, that a small number of people will ever see."
                },
                {
                    title: "PixiJS / ReactPixi",
                    img: "pixi",
                    content: "I have used Pixi in the past to visualize data and vectors in 2D, but once, my friend and I also made a browser-based Pokemon game with it."
                },
                {
                    title: "Three.js / React Three Fiber",
                    img: "three",
                    content: "I have used Three mainly when I realized how inefficient Pixi is in rendering 3D spaces, so I had to switch for some of my illustrations."
                }
            ]
        },
        {
            title: "Testing",
            content: [
                {
                    title: "Postman",
                    img: "postman",
                    content: "Postman was mainly used by me to automate the testing on some of my API server's endpoints, to make sure they are working and secure."
                },
                {
                    title: "Jest",
                    img: "jest",
                    content: "I have used Jest mainly to automate unit tests, for some projects I followed a TDD approach, where it was really handy"
                }
            ]
        },
        {
            title: "Backend development",
            content: [
                {
                    title: "Node.js",
                    img: "nodejs",
                    content: "I have used Node.js, in the past numerous times, mainly in order to create certain API servers, some of which runs today, and get's used daily."
                },
                {
                    title: "Express",
                    img: "express",
                    content: "Express servers were used by me to mainly make API servers in the past. As well as this server that's returning this website is running on and Express server."
                },
                {
                    title: "JWT",
                    img: "jwt",
                    content: "I have used JWT not just to authenticate users, but to also handle authorization in some of my API servers."
                }
            ]
        },
        {
            title: "Databases",
            content: [
                {
                    title: "MySQL",
                    img: "mysql",
                    content: "MySQL is a database that I practiced and learned SQL for the first time, it's not my go-to database anymore but there is an awful lot of data I handled in them."
                },
                {
                    title: "PostgreSQL",
                    img: "postgresql",
                    content: "I started using PostgreSQL databases sometime when version 17 was released, I quickly fell in love with it, and since became my go-to choice when I need a database."
                },
                {
                    title: "Firebase",
                    img: "firebase",
                    content: "I have used Firebase in the past, not my favorite or my go-to, but for some applications, it's reasonable over the strict data structure relational databases need."
                }
            ]
        },
        {
            title: "Dev-Ops",
            content: [
                {
                    title: "Git",
                    img: "git",
                    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus."
                },
                {
                    title: "PM2",
                    img: "pm2",
                    content: "I have used PM2 mainly when I finished a Node.js application to deploy."
                },
                {
                    title: "npm",
                    img: "npm",
                    content: "I use npm without a stop, it's an essential part when I need a dependency."
                },
                {
                    title: "Grafana",
                    img: "grafana",
                    content: "I have used Grafana, mainly to visualize and monitor server metrics."
                },
                {
                    title: "Let's Encrypt",
                    img: "letsencrypt",
                    content: "Let's Encrypt was used by me mainly when I need to generate or renew an SSL certificate, this site's was generated by Let's Encrypt as well."
                },
                {
                    title: "ESLint",
                    img: "eslint",
                    content: "ESLint is always there to cause headache for me, but it's great when I am not working alone to point out where I am off from the group standards."
                }
            ]
        },
        {
            title: "Programming Languages",
            content: [
                {
                    title: "C#",
                    img: "csharp",
                    content: "I use C# mainly to develop plugins for Rust, which are usually some kind of admin tools or server-side anti-cheat measures."
                },
                {
                    title: "C++",
                    img: "cplusplus",
                    content: "I learned C++ quite some time ago, but shifted away from it over the years. I have to refresh my knowledge before I can produce anything meaningful."
                }
            ]
        }

    ])
    return (
        <div>
            <div id='fade-in-effect'>
            </div>
            <div id='skills-content'>
                <h2>Skills</h2>
                {
                    skills.map((line, index) =>
                        <SkillsTable
                            key={`skill-item-${index}}`}
                            title={line.title}
                            content={line.content}
                        />
                    )
                }
            </div>
            <div id='fade-out-effect'></div>
        </div>
    )
}

export default Skills
