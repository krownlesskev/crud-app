import './app.styles.scss';
import { useState, useEffect } from 'react';
import Axios from 'axios';


function App() {
  const [listOfUsers, setListOfUsers] = useState([{}]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState('');


  useEffect(() => {
    Axios.get('http://localhost:3001/getUsers')
      .then((res) => {
        setListOfUsers(res.data);
      });
  }, [listOfUsers]);

  const createUser = () => {
    Axios.post('http://localhost:3001/createUser', {
      name,
      age,
      username,
    })
      .then((response) => {
        console.log('USER CREATED:', response.data);
      });
  };

  const updateUser = (id) => {
    const newAge = prompt('enter new age:');

    Axios.put('http://localhost:3001/update', {
      newAge,
      id
    });
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
              <button onClick={() => { updateUser(user._id); }}>Edit</button>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
