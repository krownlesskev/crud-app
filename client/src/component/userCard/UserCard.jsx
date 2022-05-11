import React, { useState } from 'react';
import Edit from '../edit/Edit';
import { Button } from '../button/Button.style';

const UserCard = ({ user, index, deleteUser, updateUser }) => {
    const [showComponent, setShowComponent] = useState(false);
    return (
        <div>
            <div key={index}>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Username: {user.username}</p>
                <Button
                    backgroundColor='#FFA500'
                    textColor='#232f34'
                    onClick={() => { setShowComponent(prev => !prev); }}>
                    {!showComponent ? 'Edit' : 'Cancel Edit'}</Button>
                <Button
                    backgroundColor='#FFA500'
                    textColor='#232f34'
                    onClick={() => { deleteUser(user._id); }}>Delete</Button>
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