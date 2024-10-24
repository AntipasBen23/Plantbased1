import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ClientForm = () => {
    const navigate = useNavigate();
    const { programName } = useParams(); 

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        email: '',
        whatsapp: '',
        age: '',
        maritalStatus: '',
        numChildren: '',
        height: '',
        weight: '',
        healthHistory: '',
        symptoms: '',
        prescriptionDrugs: '',
        healthGoal: '',
        intendedStartDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.age < 1 || formData.age > 120) {
            alert("Please enter a valid age.");
            return;
        }

        if (!programName) {
            alert("Program name is not defined.");
            return;
        }

        const safeProgramName = encodeURIComponent(programName.trim());
        navigate(`/package-selection/${safeProgramName}`); // Redirect to package selection
    };

    return (
        <div className="client-form">
            <h1>Confidential Client Form</h1>
            <p>(We can't use your data for anything other than healing.)</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="whatsapp" placeholder="WhatsApp Number" onChange={handleChange} required />
                <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
                <select name="maritalStatus" onChange={handleChange} required>
                    <option value="">Marital Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                </select>
                <input type="number" name="numChildren" placeholder="Number of Children" onChange={handleChange} />
                <input type="text" name="height" placeholder="Height" onChange={handleChange} required />
                <input type="text" name="weight" placeholder="Weight" onChange={handleChange} required />
                <textarea name="healthHistory" placeholder="Health History" onChange={handleChange} required></textarea>
                <textarea name="symptoms" placeholder="Symptoms" onChange={handleChange} required></textarea>
                <input type="text" name="prescriptionDrugs" placeholder="Prescription Drugs Taken (If any)" onChange={handleChange} />
                <textarea name="healthGoal" placeholder="Health Goal" onChange={handleChange} required></textarea>

                <div>
                    <label htmlFor="intendedStartDate">Date of Diagnosis</label>
                    <input type="date" id="intendedStartDate" name="intendedStartDate" onChange={handleChange} required />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ClientForm;
