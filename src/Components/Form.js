import {useState} from 'react';
import * as yup from 'yup';


export default function Form(props) {
    const [user, setUser] = useState({Name: "", Email: "", Password: "", Terms: false});
    const addUser = props.addUser

    const handleChange = e => {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setUser({...user, [e.target.name]: value})
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(user, 'user log in handleSubmit');
        addUser({user});
    }

    return (
      <form onSubmit={(e) => handleSubmit(e)}>
          <label>Name:
              <input type="text" onChange={(e) => handleChange(e)} name='Name' value={user.Name} />
          </label>
          <label>Email:
              <input type="text" onChange={e => handleChange(e)} name='Email' value={user.Email}/>
          </label>
          <label>Password:
              <input type="text" onChange={e => handleChange(e)} name='Password' value={user.Password} />
          </label>
          <label>Terms Of Service:
              <input type="checkbox" checked={user.Terms} name='Terms' onChange={e => handleChange(e)}/>
          </label>
          <button>Submit</button>
      </form>
    );
  }