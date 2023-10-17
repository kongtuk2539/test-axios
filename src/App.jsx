import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState({}); // Initialize userData as an empty object
  const [username, setUsername] = useState('Kongtuk4');
  const [password, setPassword] = useState('Kongtuk4');
  const [createUser_ID, setCreateUser_ID] = useState({
    'user_firstName': 'Tho4',
    'user_lastName': 'kongtuk4',
    'user_email': 'Kongtuk4@gmail.dotA',
    'user_username': 'Kongtuk4',
    'user_password': 'Kongtuk4',
    'user_birthDate': '1996-09-17',
    'user_Gender': 'male',
    'user_weight': 60,
    'user_height': 602
  });


  useEffect(() => {

  }, []);

  const createUser = () => {
    axios
      .post('https://tho-kongtuk-backend.onrender.com/users/', createUser_ID)
      .then((response) => {
        console.log('API Response:', response.data); // Check the structure of the response
        setUserData(response.data);
        console.log('create => ', userData)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error.response.data.message);
      });
  }

  const login = () => {
    axios
      .post('https://tho-kongtuk-backend.onrender.com/users/login', {
        user_username: username,
        user_password: password
      })
      .then((response) => {
        console.log('API Response:', response.data); // Check the structure of the response
        setUserData(response.data);
        console.log('create => ', userData)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error.response.data.message);
      });
  }

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
      <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <button onClick={login}  >Login</button>
    </div>
  );
}

export default App;
