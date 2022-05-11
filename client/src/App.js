import { useState, useEffect } from 'react';
import Axios from 'axios';
import UserCard from './component/userCard/UserCard';
import { Button } from './component/button/Button.style';
import { AppContainer } from './component/containers/AppContainer.style';
import { Container } from './component/containers/Container.style';

function App() {
  const [listOfUsers, setListOfUsers] = useState([{}]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState('');

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

    if (newName.length === 0 || newAge === null || newUsername.length === 0) return;

    Axios.put('http://localhost:3001/update', {
      newName,
      newAge,
      newUsername,
      id
    });
  };

  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  return (
    <AppContainer>
      <Container>
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
        <Button
          backgroundColor='#FFA500'
          textColor='#232f34'
          onClick={createUser}>Create User</Button>
        <div>
          {listOfUsers.map((user, index) => {
            return (
              <UserCard
                key={index}
                user={user}
                index={index}
                deleteUser={deleteUser}
                updateUser={updateUser}
              />
            );
          })}
        </div>
      </Container>
    </AppContainer>
  );
}

export default App;
