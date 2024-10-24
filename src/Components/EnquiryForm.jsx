import React, { useState } from 'react';

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        location: '',
        healthChallenge: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="enquiry-form-container">
            <h1>Enquiry Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    WhatsApp No:
                    <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" value={formData.location} onChange={handleChange} />
                </label>
                <label>
                    Health Challenge:
                    <textarea name="healthChallenge" value={formData.healthChallenge} onChange={handleChange} required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EnquiryForm;
