import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const healingProcedure = [
    "Consult with a healthcare provider.",
    "Follow dietary guidelines.",
    "Monitor progress regularly."
];

const ProgramDetails = () => {
    const { programName } = useParams(); 
    const navigate = useNavigate(); 

    const programData = {
        Obesity: {
            reviews: [
                {
                    name: "Sarah O.",
                    image: "/ReviewImages/ReviewPic10.jpg",
                    text: `At 300 pounds, I felt like I was trapped in my own body. I tried cutting calories and following
                           traditional diet plans, but nothing worked long-term. A friend introduced me to plant-based
                           eating, and I thought, ‘What do I have to lose?’ The results were remarkable. Not only did I
                           shed 90 pounds over two years, but my body transformed in ways I never thought possible.`,
                    rating: 5
                },
                {
                    name: "David M.",
                    image: "/ReviewImages/ReviewPic2.jpg",
                    text: `I was skeptical at first when I heard people talking about the benefits of a plant-based diet 
                           for weight loss. But after struggling with obesity for over a decade, I was ready to try anything.`,
                    rating: 4
                },
            ],
            research: (
                <>
                    <p>A systematic review published in <strong>Nutrients</strong> (2019) found that plant-based diets are associated
                    with lower body mass index (BMI) and reduced risk of obesity due to higher fiber intake and lower
                    caloric density (Tonstad et al., 2019).</p>

                    <strong>References:</strong>
                    <p>1. Tonstad, S., et al. "The association between plant-based dietary patterns and body weight: A systematic review."
                       Nutrients, 11(9), 2083.</p>
                </>
            ),
        },
        "Weight-Gain": {
            reviews: [
                {
                    name: "Sarah, 28",
                    image: "/ReviewImages/ReviewPic11.jpg",
                    text: "I struggled with being underweight for years, and traditional diets weren't working for me. After switching to a plant-based diet, I noticed a significant change. I focused on nutrient-dense foods like avocados, nuts, and legumes. I started adding smoothies packed with bananas, oats, and almond butter, which not only helped me gain weight but also made me feel energized. Within a few months, I gained 10 pounds and feel healthier than ever!",
                    rating: 5
                },
                {
                    name: "Michael, 35",
                    image: "/ReviewImages/ReviewPic8.jpg",
                    text: "As a long-time vegan, I was concerned about my weight, which had dipped too low. I consulted a Plantbased nutrition consultant who helped me create a meal program and lifestyle rich in whole foods. I incorporated more grains like quinoa and brown rice, along with protein-rich beans and lentils. Adding calorie-dense snacks like nut butter on whole-grain toast helped too. I gained about 15 pounds in three months and my overall strength has improved. The only downside was figuring out the right balance at first.",
                    rating: 5
                },
                {
                    name: "Emily, 22",
                    image: "/ReviewImages/ReviewPic5.jpg",
                    text: "I turned to plant-based  nutrition to help me gain weight after losing appetite due to stress. I focused on high-calorie foods like nuts, seeds, and coconut products. My favorite meal became a grain bowl topped with tahini dressing and a variety of veggies. I also loved making chia seed puddings for breakfast, which kept me full. In about two months, I gained 8 pounds, and I feel much more energetic. I wish I had started this diet sooner!",
                    rating: 5
                },
            ],
            research: `A study published in the Journal of the International Society of Sports Nutrition found that plant-based proteins can effectively support muscle growth when consumed as part of a resistance training program.
                       Findings: Participants who consumed a plant-based protein supplement (like pea protein) showed comparable increases in muscle mass and strength to those who consumed animal-based proteins.
                       2. Increased Caloric Intake from Whole Foods
                      Study: Research published in Nutrition Reviews demonstrated that whole plant foods, such as nuts, seeds, and avocados, are calorie-dense and can significantly contribute to weight gain.
                      Findings: Incorporating these foods into a diet increased total caloric intake while providing essential nutrients, helping individuals achieve weight gain healthily.`
        },
        "Cancer": {
            reviews: [
                {
                    name: "Sarah, Breast Cancer Survivor",
                    image: "/ReviewImages/ReviewPic6.jpg",
                    text: "When I was diagnosed with breast cancer, I was devastated. My doctor recommended a holistic approach alongside my treatment. I shifted to a predominantly plant-based diet filled with green leafy vegetables, legumes, and whole grains. Within months, I noticed a significant improvement in my energy levels and overall health. Not only did my chemotherapy side effects become more manageable, but my immune system became stronger. My latest scans have been promising, and I truly believe that plant-based nutrition played a huge role in my recovery.",
                    rating: 5
                },
                {
                    name: "Daniel, Prostate Cancer Fighter",
                    image: "/ReviewImages/ReviewPic9.jpg",
                    text: "A year ago, I was diagnosed with early-stage prostate cancer. I researched everything I could do to support my body’s natural healing process. Switching to a plant-based diet seemed like the best option. My meals now include foods rich in antioxidants, like berries, broccoli, and nuts. While I continue medical treatment, my doctors have noticed positive changes in my blood work. I feel empowered, knowing I'm nourishing my body with food that helps fight inflammation and promotes overall health.",
                    rating: 5
                },
                {
                    name: "Maria, Colon Cancer Survivor",
                    image: "/ReviewImages/ReviewPic3.jpg",
                    text: "After my colon cancer diagnosis, I realized that my diet needed a complete overhaul. I started incorporating more plant-based foods—especially fiber-rich vegetables like carrots, beans, and spinach. These foods not only helped me regain my strength but also eased my digestion during treatment. My doctors have been surprised at how well I’ve responded, and I believe that clean, plant-based eating helped me maintain a healthy gut and supported my healing journey.",
                    rating: 5
                },
            ],
            research: `The American Institute for Cancer Research (AICR) highlights that plant-based diets rich in 
                       antioxidants, fiber, and phytochemicals help reduce the risk of cancer. For example, cruciferous
                       vegetables like broccoli and kale contain compounds that protect against cellular damage. 
                       Success: Dr. T. Colin Campbell's China Study, one of the most comprehensive studies on nutrition
                       and disease, found that people consuming a plant-based diet had a lower risk of developing certain cancers. 
                       Plant-based nutrition has been used in cancer treatments to support the immune system and 
                       recovery.`
        },
        "Sickle-Cell": {
            reviews: [
                {
                    name: "Sarah M",
                    image: "/ReviewImages/ReviewPic3.jpg",
                    text: "I was diagnosed with rheumatoid arthritis five years ago, and the medications were taking a toll on my body. After extensive research, I decided to try a plant-based diet. Within just a few weeks, I noticed significant improvements in my energy levels and joint pain. I focused on whole foods, including plenty of leafy greens, legumes, and nuts. Not only did my inflammation decrease, but I also lost weight and felt more vibrant than I had in years. I can't believe the transformation I've experienced! I highly recommend this lifestyle change for anyone struggling with autoimmune issues.",
                    rating: 5
                },
                {
                    name: "Mark R.",
                    image: "/ReviewImages/ReviewPic5.jpg",
                    text: "As someone living with multiple sclerosis, I felt hopeless after years of treatment with minimal results. After a friend suggested a plant-based diet, I was skeptical but willing to try anything. I started by incorporating more fruits, vegetables, and whole grains while eliminating processed foods. Within months, I noticed a reduction in fatigue and improved mental clarity. My neurologist was amazed at my progress, and I feel empowered to manage my condition. This lifestyle is not just a diet; it's a pathway to wellness!",
                    rating: 5
                },
                {
                    name: "Emily T.",
                    image: "/ReviewImages/ReviewPic2.jpg",
                    text: "I have lupus and struggled with flare-ups for years. After attending a workshop on plant-based nutrition, I was inspired to make a change. Transitioning to a plant-based diet was challenging at first, but the results have been worth it. I experienced fewer flare-ups, improved skin health, and better overall well-being. While I still have some symptoms, the severity has drastically reduced. The only reason I’m not giving five stars is that it took time to figure out which foods worked best for me. Overall, I’m grateful for this new approach to managing my autoimmune disease.",
                    rating: 5
                },
            ],
            research: `Oxidative stress is a major factor in sickle cell crises, and plant-based diets rich in 
                       antioxidants may help mitigate this. A study by Nur et al. (2011) emphasized the importance of antioxidants like vitamins C and E, as well as polyphenolic compounds, in reducing oxidative damage in sickle cell patients. Green leafy vegetables, berries, and herbs such as Moringa oleifera and Curcuma longa (turmeric) are rich in these compounds.`
        },
        "HIV-AIDS": {
            reviews: [
                {
                    name: "Aisha, 42 - Living with HIV for 10 Years",
                    image: "/ReviewImages/ReviewPic11.jpg",
                    text: "Switching to a plant-based diet transformed my health journey. Since my diagnosis 10 years ago, I struggled with fatigue and frequent illness. I decided to try a whole food, plant-based diet after reading about its benefits for people with compromised immune systems. My energy levels improved within weeks. I no longer experience the chronic fatigue I once did. My CD4 count has been stable, and my viral load remains undetectable. I believe the variety of fresh vegetables, legumes, and healthy fats in my diet helped boost my immune system. It’s been a game-changer for me!",
                    rating: 5
                },
                {
                    name: "David, 35 - Living with HIV for 5 Years",
                    image: "/ReviewImages/ReviewPic8.jpg",
                    text: "I was skeptical about plant-based nutrition at first. But after joining a local support group, I learned how it can be beneficial for people living with HIV. I started incorporating more fruits, nuts, seeds, and legumes into my meals, cutting out processed foods and animal products. My digestion improved, and I felt less bloated. After 6 months, my doctor said my nutrient levels were the best they had been in years. I feel empowered by how much control I have over my health through diet. It’s helped me maintain a strong immune system alongside my medication.",
                    rating: 5
                },
                {
                    name: "Ngozi, 29 - Living with HIV for 7 Years",
                    image: "/ReviewImages/ReviewPic6.jpg",
                    text: "After my HIV diagnosis, I struggled with gaining weight and keeping a strong immune system. I was introduced to a plant-based lifestyle by a friend who suggested I focus on high-protein plants like beans, quinoa, and lentils. I also started eating more greens, avocado, and nuts. I have noticed that I get sick less often, and I feel stronger overall. The best part is that my skin cleared up, and I feel more energized every day. I truly believe that my plant-based diet has given me a better quality of life.",
                    rating: 5
                },
            ],
            research: `Improved Immune Function: A well-balanced plant-based diet is rich in essential nutrients like vitamins (especially A, C, E), minerals (like zinc, selenium), and antioxidants that can support immune health. For people living with HIV/AIDS, maintaining immune function is crucial in managing the disease. Plant-based foods like fruits, vegetables, nuts, and seeds provide these nutrients in abundance, which may help in the reduction of oxidative stress and inflammation, two factors that compromise immune function in HIV-positive individuals.
            Reference: Roubenoff R, McDermott A, Weiss L. "A cross-sectional study of nutritional status in HIV infection." American Journal of Clinical Nutrition (1999).`
        },
        "High-Blood-Pressure": {
            reviews: [
                {
                    name: "Mrs. Ayo Olabode",
                    image: "/ReviewImages/ReviewPic11.jpg",
                    text: "For years, I struggled with high blood pressure, constantly taking medication with little improvement. After learning about the benefits of a plant-based diet, I decided to give it a try. I incorporated more whole grains, leafy vegetables, beans, and healthy fats into my meals. Within a few months, my blood pressure began to stabilize. I lost weight, felt more energetic, and my doctor was surprised to see my blood pressure readings in the normal range. I haven't stopped this diet since—it truly transformed my life.",
                    rating: 5
                },
                {
                    name: "Adebanjo Femi",
                    image: "/ReviewImages/ReviewPic9.jpg",
                    text: "I was diagnosed with hypertension at a young age, and it kept getting worse. The medications controlled it but I didn’t feel well. A friend recommended switching to a plant-based diet. I started eating more foods like sweet potatoes, lentils, and leafy greens. I also reduced salt intake and focused on natural spices. To my amazement, in just a few months, my blood pressure readings dropped significantly. I even reduced my medication under my doctor's guidance. This plant-based journey saved me from further health complications.",
                    rating: 5
                },
                {
                    name: "Grace Ikenna",
                    image: "/ReviewImages/ReviewPic6.jpg",
                    text: "I had been living with high blood pressure for over 10 years and was struggling with my weight as well. A friend introduced me to a plant-based lifestyle. I replaced my diet with lots of vegetables, fruits, legumes, and minimal processed foods. I also began juicing with natural herbs like hibiscus and ginger. My blood pressure dropped drastically, and I felt lighter and healthier. After six months, I was able to get off my medication, with my doctor’s approval. I highly recommend this lifestyle for anyone facing hypertension.",
                    rating: 5
                },
                {
                    name: "Musa Hassan",
                    image: "/ReviewImages/ReviewPic8.jpg",
                    text: "As someone who has been living with hypertension for years, I was tired of relying solely on medication. After learning about plant-based diets, I transitioned slowly. I increased my intake of fiber-rich foods like fruits, beans, and oats, and cut out animal-based products. I started feeling the difference after a few weeks. My blood pressure readings became consistent, and I even had more energy throughout the day. My doctor adjusted my medication dosage, and I feel like I’m getting back in control of my health.",
                    rating: 5
                },
            ],
            research: `Plant-based diets can help normalize high blood pressure due to their high content of potassium, magnesium, fiber, and antioxidants, which support vascular health. A 2014 study published in JAMA Internal Medicine found that vegetarian diets are associated with lower systolic and diastolic blood pressure. These diets reduce the intake of saturated fats and sodium, which are linked to hypertension, and increase nutrients like nitric oxide from plants, which helps relax blood vessels and improve blood flow.`
        },
        "Kidney-Disease": {
            reviews: [
                {
                    name: "David M. Chronic Kidney Disease (CKD) - Stage 3",
                    image: "/ReviewImages/ReviewPic7.jpg",
                    text: `I was diagnosed with Stage 3 CKD and was told to start preparing for dialysis in the coming years. My doctor suggested that a plant-based diet might help slow down the progression of the disease. After doing some research, I decided to go all-in with a plant-based, whole foods approach. It wasn’t easy at first, but within a few months, I started noticing significant improvements. My energy levels increased, and my lab results began showing a stabilization in my kidney function. My creatinine levels even started dropping, something I hadn’t expected. I feel healthier overall, and my doctors are surprised by my progress.`,
                    rating: 5
                },
                {
                    name: "Sarah J. Polycystic Kidney Disease",
                    image: "/ReviewImages/ReviewPic4.jpg",
                    text: "I’ve had polycystic kidney disease (PKD) for years, and my kidney function was gradually declining. After switching to a low-sodium, plant-based diet with guidance from my dietitian, my lab results have improved significantly. My creatinine levels, which were creeping up, have remained stable for the past year. I believe the shift to more fruits, vegetables, and plant proteins has been a game-changer for me. I also feel much better mentally and physically. It’s not a cure, but it’s helping me manage my condition without the need for aggressive treatments.",
                    rating: 5
                },
                {
                    name: "Michael K. End-Stage Renal Disease (ESRD) ",
                    image: "/ReviewImages/ReviewPic2.jpg",
                    text: "I was at the point where I was preparing for dialysis, but I wanted to try everything I could before getting to that stage. After consulting with a renal dietitian, I transitioned to a plant-based diet that was low in phosphorus, potassium, and sodium. I followed it strictly, focusing on nutrient-dense greens, plant proteins like lentils and beans, and cutting out processed foods. My kidney function stabilized, and my nephrologist was amazed that I could delay dialysis for over a year! I still need regular checkups, but the quality of life I’ve experienced is much better than I expected.",
                    rating: 5
                },
                {
                    name: "Jason L.",
                    image: "/ReviewImages/ReviewPic1.jpg",
                    text: "As a Type 2 diabetic with early-stage kidney disease, I was facing a lot of fatigue and symptoms of kidney issues like swelling and high blood pressure. My doctor recommended a plant-based diet low in sodium and refined sugars. After a few months of following this diet, I noticed a big improvement in my energy levels and a reduction in swelling. My kidney function tests have improved slightly, and while I still manage my diabetes, I feel that plant-based eating has really helped me avoid complications.",
                    rating: 5
                },
                
            ],
            research: `Reduction in Proteinuria and Slower Progression: Research indicates that plant-based diets can reduce proteinuria (excess protein in the urine) and slow the progression of kidney disease. This is partly due to the lower amounts of phosphorus and potassium in plant foods compared to animal-based foods. A study published in the Journal of Renal Nutrition showed that plant-based diets could reduce the burden on the kidneys by lowering the load of acid from dietary protein, which is harmful in advanced kidney disease.
                       Lowering Blood Pressure: Hypertension is a significant risk factor for kidney disease. Plant-based diets are naturally lower in sodium and high in potassium, which helps in controlling blood pressure.`
        },
    };

    const reviewsData = programData[programName]?.reviews || []; 
    const researchData = programData[programName]?.research || ""; 

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
        }, 9000);
        return () => clearInterval(interval);
    }, [reviewsData.length]);

    const handlePayNow = () => {
        navigate(`/client-form/${programName}`);
    };

    return (
        <div className="program-details">
            <h1>{programName} Program Details</h1>
            <div className="columns">
                <div className="reviews">
                    <h2>Reviews</h2>
                    {reviewsData.length > 0 && (
                        <div className="review">
                            <p>{reviewsData[currentReviewIndex].text}</p>
                            <div className="rating">
                                {'★'.repeat(reviewsData[currentReviewIndex].rating)} {/* Display star rating */}
                            </div>
                            {reviewsData[currentReviewIndex].image && (
                                <img src={reviewsData[currentReviewIndex].image} alt={reviewsData[currentReviewIndex].name} />
                            )}
                            <p>{reviewsData[currentReviewIndex].name}</p>
                        </div>
                    )}
                </div>

                <div className="scientific-research">
                    <h2>Scientific Research</h2>
                    <p>{researchData}</p>
                </div>

                <div className="healing-procedure">
                    <h2>Healing Procedure Guidelines</h2>
                    <ul>
                        {healingProcedure.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <button className="pay-now" onClick={handlePayNow}>Pay Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetails;
