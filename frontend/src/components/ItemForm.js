import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        phone: '',
        telephone: '',
        email: '',
        place_of_birth: '',
        birthday: '',
        sex: '',
        civil_status: '',
        address: '',
        zip: '',
        citizenship: '',
        religion: '',
        province: '',
        height: '',
        weight: '',
        blood_type: '',
        elementary: '',
        secondary: '',
        vocational: '',
        college: '',
        graduate_studies: '',
        mother_first_name: '',
        mother_middle_name: '',
        mother_last_name: '',
        mother_occupation: '',
        father_first_name: '',
        father_middle_name: '',
        father_last_name: '',
        father_occupation: '',
    });

    useEffect(() => {
        if (item) {
            setFormData({
                first_name: item.first_name || '',
                middle_name: item.middle_name || '',
                last_name: item.last_name || '',
                phone: item.phone || '',
                telephone: item.telephone || '',
                email: item.email || '',
                place_of_birth: item.place_of_birth || '',
                birthday: item.birthday || '',
                sex: item.sex || '',
                civil_status: item.civil_status || '',
                address: item.address || '',
                zip: item.zip || '',
                citizenship: item.citizenship || '',
                religion: item.religion || '',
                province: item.province || '',
                height: item.height || '',
                weight: item.weight || '',
                blood_type: item.blood_type || '',
                elementary: item.elementary || '',
                secondary: item.secondary || '',
                vocational: item.vocational || '',
                college: item.college || '',
                graduate_studies: item.graduate_studies || '',
                mother_first_name: item.mother_first_name || '',
                mother_middle_name: item.mother_middle_name || '',
                mother_last_name: item.mother_last_name || '',
                mother_occupation: item.mother_occupation || '',
                father_first_name: item.father_first_name || '',
                father_middle_name: item.father_middle_name || '',
                father_last_name: item.father_last_name || '',
                father_occupation: item.father_occupation || '',
            });
        }
    }, [item]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, formData);
            } else {
                await axios.post('http://localhost:8000/api/items/', formData);
            }
            resetForm();
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    const resetForm = () => {
        setFormData({
            first_name: '',
            middle_name: '',
            last_name: '',
            phone: '',
            telephone: '',
            email: '',
            place_of_birth: '',
            birthday: '',
            sex: '',
            civil_status: '',
            address: '',
            zip: '',
            citizenship: '',
            religion: '',
            province: '',
            height: '',
            weight: '',
            blood_type: '',
            elementary: '',
            secondary: '',
            vocational: '',
            college: '',
            graduate_studies: '',
            mother_first_name: '',
            mother_middle_name: '',
            mother_last_name: '',
            mother_occupation: '',
            father_first_name: '',
            father_middle_name: '',
            father_last_name: '',
            father_occupation: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((key) => (
                <div key={key} className="container">
                    <div className="form-group">
                        <label>{key.replace(/_/g, ' ')}:</label>
                        <input
                            type={key === 'email' ? 'email' : key === 'birthday' ? 'date' : 'text'}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            ))}
            <div className="container">
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default ItemForm;
