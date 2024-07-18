import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
            setError('There was an error fetching the items.');
        }
    };

    const handleSuccess = () => {
        fetchItems(); 
    };

    return (
        <div>
            <h1>Items</h1>
            {error && <p>{error}</p>}
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.first_name} : {item.middle_name} : {item.last_name} : {item.phone} : {item.telephone} : {item.email} : 
                        {item.place_of_birth} : {item.birthday} : {item.sex} : {item.civil_status} : {item.address} : {item.zip} : 
                        {item.citizenship} : {item.religion} : {item.province} : {item.height} : {item.weight} : {item.blood_type} : 
                        {item.elementary} : {item.secondary} : {item.vocational} : {item.college} : {item.graduate_studies} : {item.mother_first_name} : 
                        {item.mother_middle_name} : {item.mother_last_name} : {item.mother_occupation} : {item.father_first_name} : {item.father_middle_name} : {item.father_last_name} : 
                        {item.father_occupation} :
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;

