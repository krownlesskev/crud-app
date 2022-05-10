import React, { useState } from 'react';
import './edit.styles.scss';

const Edit = ({ updateUser, ...user }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [username, setUsername] = useState('');

    return (
        <div>
            <input type="text" placeholder='Name...' onChange={(event) => {
                setName(event.target.value);
            }} />
            <input type="number" placeholder='Age...' onChange={(event) => {
                setAge(event.target.value);
            }} />
            <input type="text" placeholder='Username...' onChange={(event) => {
                setUsername(event.target.value);
            }} />
            <button onClick={() => { updateUser(user._id, name, age, username); }}>Update User</button>
        </div >
    );
};

export default Edit;