import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

import Form from './Components/Form';
import Users from './Components/Users';

function App() {
  const [users, setUsers] = useState([])

  const addUser = user => {
    setUsers([
      ...users, 
      {
        user
      }
    ]);
  }
  console.log(users, 'users after submit')
  return (
    <div className="App">
      <Form addUser={addUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
