import React, { useState } from 'react';
import './usercard.styles.scss';
import Edit from '../edit/Edit';

const UserCard = ({ user, index, deleteUser, updateUser }) => {
    const [showComponent, setShowComponent] = useState(false);
    return (
        <div>
            <div key={index}>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Username: {user.username}</p>
                <button onClick={() => { setShowComponent(prev => !prev); }}>{!showComponent ? 'Edit' : 'Cancel Edit'}</button>
                <button onClick={() => { deleteUser(user._id); }}>Delete</button>
                {showComponent && <Edit
                    updateUser={updateUser}
                    {...user}
                    setShowComponent={setShowComponent}
                />}
            </div>
        </div>
    );
};

export default UserCard;