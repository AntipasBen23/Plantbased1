import React from 'react';
import { Link } from 'react-router-dom'; 

export default function HeroSection() {
    return (
        <div className="wrapper">
            <section className="backgr">
                <div className="content">
                    <div className="box">
                        <h1>
                            <span className="primaryText">Heal all Chronic Diseases</span><br />
                            <span className="highlightedText">With Nutrition</span>
                        </h1>
                    </div>
                    <div className="box">
                        <p className="Paragrph">Here are some of the key plant-based nutritional programs to consider<br /> for maintaining a healthy body.</p>
                    </div>
                </div>

                <div className="listContainer">
                    <div className="HeroList box">
                        <div className="flex-container">
                            <div className="list-section">
                                <ul>
                                    <li>Obesity</li>
                                    <li>Diabetes</li>
                                    <li>High-blood Pressure</li>
                                </ul>
                            </div>
                            <div className="list-section">
                                <ul>
                                    <li>Stroke</li>
                                    <li>Cancer</li>
                                    <li>Sickle-cell Anaemia</li>
                                </ul>
                            </div>
                        </div>
                        <div className="enquiry-button">
                            <Link to="/enquiry-form" className="Btnvk">MAKE AN ENQUIRY</Link>
                        </div>
                    </div>
                </div>

                <div className='HeroDown'>
    <h1 className='RightTxt'>Click Below to choose a Healing Program <br /> Now!</h1>
    <Link to="/second-section" style={{ textDecoration: 'none' }}>
        <button className='btnRight'>CLICK HERE</button>
    </Link>
</div>

            </section>
        </div>
    );
}
