import React, { useState } from 'react';

const Edit = ({ updateUser, setShowComponent, ...user }) => {
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
            <button onClick={() => {
                updateUser(user._id, name, age, username);
                setShowComponent(prev => !prev);
            }}>Apply Changes</button>
        </div >
    );
};

export default Edit;