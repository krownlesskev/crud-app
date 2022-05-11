import React, { useState } from 'react';
import Edit from '../edit/Edit';
import { Button } from '../button/Button.style';
import { UserCardContainer } from '../userCard/UserCardContainer.style';

const UserCard = ({ user, index, deleteUser, updateUser }) => {
    const [showComponent, setShowComponent] = useState(false);
    return (
        <div>
            <UserCardContainer key={index}>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Username: {user.username}</p>
                <div>
                    <Button
                        backgroundColor='#F9AA33'
                        textColor='#232f34'
                        onClick={() => { setShowComponent(prev => !prev); }}>
                        {!showComponent ? 'Edit' : 'Cancel Edit'}</Button>
                    <Button
                        backgroundColor='#F9AA33'
                        textColor='#232f34'
                        onClick={() => { deleteUser(user._id); }}>Delete</Button>
                </div>
                    {showComponent && <Edit
                        updateUser={updateUser}
                        {...user}
                        setShowComponent={setShowComponent}
                    />}
            </UserCardContainer>
        </div>
    );
};

export default UserCard;