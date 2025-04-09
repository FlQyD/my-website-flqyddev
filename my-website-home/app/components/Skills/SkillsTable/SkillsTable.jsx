"use client";

import React, {useState } from 'react';
import './SkillsTable.css'

const SkillsTable = ({title, content}) => {
    const [active, setActive] = useState(-1)
    return (
        <div className='inner-skills-container'>
            <div><p>{title}</p></div>
            <div>
                {
                    content && content.map((line, index) => 
                        <div
                            key={`skill-table-item-${index}-${index == active ? "1" : "0"}`} 
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