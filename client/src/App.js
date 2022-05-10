import './app.styles.scss';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Edit from './component/Edit';

function App() {
  const [listOfUsers, setListOfUsers] = useState([{}]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState('');
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    Axios.get(`http://localhost:3001/getUsers`)
      .then((res) => {
        setListOfUsers(res.data);
      });
  }, [listOfUsers]);

  const createUser = () => {
    Axios.post('http://localhost:3001/createUser', {
      name,
      age,
      username,
    });
  };

  const updateUser = (id, editName, editAge, editUsername) => {
    const newName = editName;
    const newAge = editAge;
    const newUsername = editUsername;

    Axios.put('http://localhost:3001/update', {
      newName,
      newAge,
      newUsername,
      id
    }).then(
      setShowComponent(prev => !prev)
    );
  };

  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  return (
    <div className='app'>
      <div className='user-input'>
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
        </div>
        <button onClick={createUser}>Create User</button>
      </div>
      <div className="user-display">
        {listOfUsers.map((user, index) => {
          return (
            <div key={index}>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Username: {user.username}</p>
              <button onClick={() => { setShowComponent(prev => !prev); }}>Edit</button>
              {showComponent ? <Edit
                updateUser={updateUser}
                {...user}
              /> : null}
              <button onClick={() => { deleteUser(user._id); }}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
