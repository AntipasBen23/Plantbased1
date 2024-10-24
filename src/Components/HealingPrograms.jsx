import React from 'react';
import { Link } from 'react-router-dom'; 

export default function HealingPrograms() {
    const programs = [
        { name: 'Obesity', image: '/HealingProgramImages/HealingPic1.jpg' },
        { name: 'Weight Gain', image: '/HealingProgramImages/HealingPic2.jpg' },
        { name: 'Cancer', image: '/HealingProgramImages/HealingPic3.jpg' },
        { name: 'HIV/AIDS', image: '/HealingProgramImages/HealingPic4.jpg' },
        { name: 'Sickle Cell', image: '/HealingProgramImages/HealingPic5.jpg' },
        { name: 'High Blood Pressure', image: '/HealingProgramImages/HealingPic1.jpg' },
        { name: 'Kidney Disease', image: '/HealingProgramImages/HealingPic2.jpg' },
        { name: 'And Others', image: '/HealingProgramImages/HealingPic3.jpg' },
    ];

    return (
        <div className="healing-programs">
            <h1>Healing Programs Available</h1>
            <div className="program-list">
                {programs.map((program) => (
                    <div className="column" key={program.name}>
                        <Link to={`/program-details/${program.name === 'HIV/AIDS' ? 'HIV-AIDS' : program.name.replace(/\s+/g, '-')}`}>
                            <img src={program.image} alt={program.name} className="program-image" />
                            <button>{program.name}</button>
                        </Link>
                    </div>
                ))}
            </div>
            <p className="instruction">Click on any of the Healing programs to proceed.</p>
        </div>
    );
}
