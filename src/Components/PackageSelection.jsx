import React from 'react';
import { useParams, Link } from 'react-router-dom';

const packagesData = {
    Obesity: {
        basic: {
            title: "Basic Package",
            price: 5500000, 
            description: "Kickstart your weight loss journey with our Basic package, perfect for those who want to explore plant-based eating. This package includes:",
            imgSrc: "/PackageImages/Plantmea2.png",
            features: [
                "🍏 4-week meal plan: Carefully curated plant-based recipes to help you start your weight loss journey.",
                "🥑 Nutritional guidance: Expert advice on making healthier food choices.",
                "📅 Weekly check-ins: Keep you on track and motivated.",
                <strong>Consultation fee: ₦10,000</strong>
            ],
        },
        'Full Program Package': {
            title: "Full Program Package",
            price: 8500000,
            description: "Ready to fully commit to a plant-based lifestyle? The Full Program package is for you! It includes everything in the Basic package, plus:",
            imgSrc: "/PackageImages/Plantmea4.png",
            features: [
                "🍉 8-week meal plan: A more comprehensive meal plan for long-lasting results.",
                "🥗 Recipe e-book: A collection of 50 delectable plant-based recipes.",
                "🏋‍♂ Exercise guide: A personalized workout plan to accelerate your weight loss.",
                <strong>Consultation fee: ₦10,000</strong>
            ],
        },
        executive: {
            title: "Executive Package",
            price: 12000000,
            description: "For those looking for an elevated experience, our Executive package has you covered! This package includes:",
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "🍽 12-week meal plan: A prolonged program for a steady and sustainable weight loss.",
                "🧘‍♀ Stretch & Exercise Sessions: Enhance your well-being inside and out.",
                "🛒 Grocery shopping list: Simplify your meal prep with a curated shopping list.",
                "🌟 Exclusive Support Group: Connect with like-minded individuals on a similar journey.",
                <strong>Consultation fee: ₦10,000</strong>
            ],
        },
        "Exclusive Package": {
            title: "Exclusive Package",
            price: "45000000",
            description: "Take your weight loss journey to a whole new level with our Exclusive package. This all-inclusive package includes:",
            imgSrc: "/PackageImages/Plantmea6.png",
            features: [
                "🌱 Year-long access: A full year of personalized meal plans, support, and guidance.",
                "🍽 Monthly meal delivery: Healthy and delicious plant-based meals delivered to your doorstep (when you booked from our menu).",
                "🚴‍♀ Food Supplements: Will be delivered to you that covers 6 months.",
                "👩‍⚕ Access to a nutritionist: Get tailored advice from a professional for maximum results.",
                <strong>Consultation fee: ₦10,000</strong>
            ],
        },
        premium: {
            title: "Premium Package",
            price: 350000000,
            description: "For the ultimate wellness experience, our Premium package is designed for the discerning individual who wants the best. This exclusive package includes:",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "🍎 Lifetime membership: Access to our program for life.",
                "🍽 Daily gourmet meal delivery: Enjoy a daily selection of gourmet plant-based dishes for 60 days only.",
                "🧖‍♀ Spa and wellness retreat: Relax and rejuvenate at a luxurious wellness retreat.",
                "👨‍⚕ Personalized health concierge: 24/7 access to a team of experts for your well-being.",
            ],
        },
    },
    "Weight-Gain": {
        basic: {
            title: "Basic Package",
            price: 50000000, 
            description: "Focus on Weight gain through natural, plant-based nutrition.",
            imgSrc: "/PackageImages/Plantmea2.png",
            features: [
                "4 Weeks of Nutrient-Dense Meals.",
                " Weekly Meal Plans Tailored to Your Body.",
                "Personalized Nutrition Guidance for Healthy Weight Gain",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "Full Package",
            price: 120000000,
            description: "Focus on Weight gain through natural, plant-based nutrition.",
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "12 Weeks of Complete Plant-Based Nutrition Transformation",
                "Weekly Meal Plans, One-on-One Coaching",
                "Customized Health & Healing Protocols",
                "Weekly Progress Check-ins to Track Your Growth",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Package (with Cooking)",
            price: 600000000,
            description: "Focus on Weight gain through natural, plant-based nutrition.",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "12 Weeks of Complete Healing & Cooking Guidance",
                "A Private Plant-Based Chef to Prepare All Your Meals",
                "Full Access to Personal Nutrition Coaching and Healing Guidance",
                "Daily Progress Tracking & 24/7 Support",
            ],
        },
    },
    Cancer: {
        basic: {
            title: "Basic Package ",
            price: 120000000, 
            description: "Heal Any Type of CANCER with Our Plant-Based Nutritional Healing Program!",
            imgSrc: "/PackageImages/Plantmea2.png",
            features: [
                "Kickstart your journey to wellness with personalized nutrition guidance.",
                "Access to essential resources and meal plans tailored to your needs.",
                "Dive into the fundamentals of plant-based healing to address root causes effectively.",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "Full Package",
            price: 1040000000,
            description: "Heal Any Type of CANCER with Our Plant-Based Nutritional Healing Program!",
            imgSrc: "/PackageImages/Plantmea4.png",
            features: [
                "Experience comprehensive support with one-on-one coaching sessions.",
                "Unlock the power of targeted nutritional strategies for cancer management.",
                "Gain exclusive access to advanced meal plans and recipe guides with Permanent Healing kit's for 180 days.",
                "Dive deeper into understanding the root causes of your condition for lasting results.",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Package",
            price: 2800000000,
            description: "Heal Any Type of CANCER with Our Plant-Based Nutritional Healing Program!",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "Experience comprehensive support with one-on-one coaching sessions.",
                "Unlock the power of targeted nutritional strategies for cancer management.",
                "Gain exclusive access to advanced meal plans and recipe guides with Permanent Healing kit's for 180 days.",
                "Dive deeper into understanding the root causes of your condition for lasting results.",
            ],
        },
    },
    "HIV-AIDS": {
        basic: {
            title: "Basic Package",
            price: 240000000, 
            description: "Our Basic Package : offers a comprehensive approach to managing HIV/AIDS through plant-based nutrition and lifestyle adjustments. With personalized guidance from our expert team, you'll receive:",
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "Customized meal plans tailored to your nutritional needs",
                "Access to exclusive online resources and support groups",
                "Regular check-ins with our certified health coaches",
                "Tips for stress management and improving overall well-being",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "Full Package",
            price: 1200000000,
            description: "Our Full Package provides everything in the Basic Package and more, ensuring you have all the tools and support necessary for success.",
            imgSrc: "/PackageImages/Plantmea6.png",
            features: [
                "One-on-one sessions with our experienced nutritionists and wellness experts",
                "Personalized fitness plans to enhance your physical health",
                "Access to advanced workshops and seminars on holistic healing modalities",
                "Ongoing support and guidance for long-term lifestyle changes",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Package",
            price: 3280000000,
            description: "Experience the ultimate level of care and support with our Premium Package. Tailored for those committed to achieving optimal health and vitality, this package includes everything in the Full Package and more. With the Premium Package, you'll enjoy:",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "VIP access to exclusive retreats and wellness events",
                "Advanced diagnostic testing for personalized health insights",
                "Concierge service for priority scheduling and support",
                "Dedicated health concierge for 24/7 assistance and guidance",
            ],
        },
    },
    "Sickle-Cell": {
        basic: {
            title: "Basic Package",
            price: 720000000, 
            description: "Start your journey to better health with our Basic Package, featuring:",
            imgSrc: "/PackageImages/Plantmea2.png",
            features: [
                "Nutritional Guidance: General meal plans designed for sickle cell support.",
                "Essential Testing: Basic tests to identify common nutritional needs.",
                "Consultations: Periodic consultations to ensure you’re on the right track.",
                "Educational Materials: Access to foundational resources to help you understand and manage your condition.",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "Full Package",
            price: 1680000000,
            description: "Comprehensive care for Sickle Cell patients.",
            imgSrc: "/PackageImages/Plantmea4.png",
            features: [
                "Personalized Nutrition Plans: Customized meal plans to address your specific health needs.",
                "Detailed Testing: Diagnostic tests to determine key nutritional needs.",
                "Consultations: Regular check-ins with our expert nutritionists to guide you on your journey.",
                "Exclusive Content: Access to educational resources and materials to support your health journey.",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Package",
            price: 4800000000,
            description: "Experience the pinnacle of personalized care with our Premium Package. This all-inclusive offering provides:",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "Tailored Nutrition Plans: Custom meal plans designed by top nutritionists specializing in sickle cell disease.",
                "Comprehensive Testing: Advanced diagnostic testing to identify specific nutritional deficiencies and health markers.",
                "One-on-One Consultations: Regular consultations with our team of experts to monitor progress and make adjustments.",
                "24/7 Support: Around-the-clock access to our health professionals for any questions or concerns.",
                "Exclusive Resources: Access to premium content, including webinars, workshops, and educational materials.",
            ],
        },
    },
    "High-Blood-Pressure": {
        basic: {
            title: "Basic Package",
            price: 80000000, 
            description: "Are you tired of high blood pressure controlling your life? Ready for a natural, sustainable solution? It's time to make a change and invest in your well-being!",
            imgSrc: "/PackageImages/Plantmea2.png",
            features: [
                "Specially crafted, wholesome meals",
                "Expert guidance and support",
                "Start your journey to a healthier you",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        full: {
            title: "Full Package",
            price: 250000000,
            description: "Enhanced support for high blood pressure.",
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "Comprehensive meal plan",
                "Exclusive recipes for your condition",
                "Personalized coaching for lasting results",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Package",
            price: 850000000,
            description: "Enhanced support for high blood pressure.",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "Luxurious gourmet experience",
                "Holistic health transformation",
                "Private chef at your service",
            ],
        },
    },
    "Kidney-Disease": {
        basic: {
            title: "Basic Package",
            price: 85000000, 
            description: "Introducing our revolutionary Kidney Disease Plant-Based Healing Meals Programs, designed to restore and rejuvenate your well-being.",
            imgSrc: "/PackageImages/Plantmea4.png",
            features: [
                "Expert-Crafted Meal Plans",
                "Nutrient-Packed, Delicious Meals",
                "Essential Wellness Support",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "Full Package",
            price: 385000000,
            description: "Introducing our revolutionary Kidney Disease Plant-Based Healing Meals Programs, designed to restore and rejuvenate your well-being.",
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "Comprehensive Healing Regimen",
                "Personalized Nutrition Guidance",
                "Ongoing Holistic Care",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Package",
            price: 1350000000,
            description: "Introducing our revolutionary Kidney Disease Plant-Based Healing Meals Programs, designed to restore and rejuvenate your well-being.",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "Elite Healing Experience",
                "Dedicated 1-on-1 Wellness Coach",
                "Exclusive Access to Advanced Therapies",
            ],
        },
    },
};

const PackageSelection = () => {
    const { programName } = useParams(); 
    const selectedPackages = packagesData[programName] || {}; 

    return (
        <section id="packagesSection" className="productCart">
            <h2 className="heading">{programName} Packages</h2>
            <div className="productGrid">
                {Object.entries(selectedPackages).map(([key, { title, price, description, imgSrc, features }]) => (
                    <div key={key} className="productCard">
                        <img src={imgSrc} alt={title} className="productImage" />
                        <h3 className="productName">{title}</h3>
                        <p className="productDescription">{description}</p>
                        <ul className="featureList">
                            {features.map((feature, index) => (
                                <li key={index} className="featureItem">{feature}</li>
                            ))}
                        </ul>
                        <span className="price">₦{(price / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        <Link to={`/payment/${key}`}>
                            <button className="ctaButton">Buy Now</button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PackageSelection;
