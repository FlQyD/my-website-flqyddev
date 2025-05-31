"use client";

import React, {useEffect, useState } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './SkillsTable.css'

const SkillsTable = ({title, content}) => {
    const [active, setActive] = useState(-1)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div data-aos="fade-up" className='inner-skills-container'>
            <div><p>{title}</p></div>
            <div>
                {
                    content && content.map((line, index) => 
                        <div
                            key={`skill-table-item-${index}}`} 
                            className={`skill ${active == index ? "active-skill" : ""}`} 
                            onClick={() => {setActive(active === index ? -1 : index)}}
                        >
                            <img src={`/imgs/${line.img}.webp`} alt="logo" />
                        </div>
                    )
                }
            </div>
            {active !== -1  &&
                <div
                    key={`${title}-${active}`}
                    className='skill-description-container'
                >
                    <p>{content[active].title}</p>
                    <p>{content[active].content}</p>
                </div>
            }
        </div>
    )
}

export default SkillsTable