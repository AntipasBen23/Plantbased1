import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

export default function Section2() {
    const images = [
        '/Images3/Plantfruit1.png',
        '/Images3/Plantfruit2.png',
        '/Images3/Plantfruit3.png',
        '/Images3/Plantfruit4.png',
        '/Images3/Plantfruit5.png',
    ];

    const [currentImage, setCurrentImage] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="secondSection">
            <div className="carouselContainer">
                <div
                    className="imageSlider"
                    style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className="carouselImage"
                        />
                    ))}
                </div>
            </div>

            <div className="contentss">
                <h2 className='parr'> Why  Plantbased nutrition Heals Your Body? </h2>
                <p>
                    If you're Tired of chronic diseases holding you back? 
                    <br /><br />
                    Science proves that plant-based nutrition can be your cure! 
                    <br />
                    🌱 <br />
                    Chronic diseases don't stand a chance when you fuel your body with the right nutrients! 
                    <br /><br />
                    💪🏽 Backed by science, a plant-based diet can help reverse heart disease, diabetes, high blood pressure, and more. 
                    <br /><br />
                    Ditch processed foods and embrace nature’s pharmacy! 
                    <br /><br />
                    🌿 Your health transformation starts now—because real healing begins with real food! 🍎🥦 
                    <br /><br />
                    🌱 Packed with essential nutrients, plant-based foods can *reduce inflammation, Cancers, Sicklecell, lower blood pressure, manage diabetes*, and more. 
                    <br /><br />
                    Reclaim your health naturally—it's time to let food be your medicine! 🍏🥑
                    <br /><br />
                    Want to Start a healthier, disease-free life?
                    <br /><br />
                    Click the link below to start a healing program 
                </p>
                <Link to="/healing-programs">
                    <button className='S2Btn'>Purchase Now</button>
                </Link>
            </div>
        </div>
    );
}
