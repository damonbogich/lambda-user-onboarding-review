import {useState, useEffect} from 'react';
import {formSchema} from './FormSchema';
import * as yup from 'yup';
import Axios from 'axios';



export default function Form(props) {
    const [user, setUser] = useState({Name: "", Email: "", Password: "", Terms: false});
    const [errorState, setErrorState] = useState({Name: "", Email: "", Password: "", Terms: ""});
    const [buttonDisabled, setButtonDisabled] = useState(true);


    const addUser = props.addUser

    const handleChange = e => {
        validate(e)
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setUser({...user, [e.target.name]: value})
    };

    useEffect(() => {
        formSchema.isValid(user).then(valid => {
            console.log(valid)
            setButtonDisabled(!valid)
        });
    }, [user])
   
    const handleSubmit = e => {
        e.preventDefault();
        console.log(user, 'user log in handleSubmit');
        Axios
        .post('https://reqres.in/api/users', user)
        .then(res => {
            console.log(res, 'response from post submit')
            let data = res.data;
            let userObj = {Name: data.Name, Email: data.Email, Password: data.Password, Terms: data.Terms}
            console.log(userObj, 'userobj')
            addUser({userObj})
        })
        .catch(err => {
            console.log(err)
        })
    }

    const validate = e => {
        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then((valid) => {
            setErrorState({
                ...errorState,
                [e.target.name]: ""
            });
        })
        .catch(err => {
            console.log(err)
            setErrorState({
                ...errorState,
                [e.target.name]: err.errors
            })
        })
    }

    return (
      <form onSubmit={(e) => handleSubmit(e)}>
          <label>Name:
              <input data-cy="Name" type="text" onChange={(e) => handleChange(e)} name='Name' value={user.Name} />
                {errorState.Name !== "" ? <p>{errorState.Name}</p> : null}
          </label>
          <label>Email:
              <input data-cy="Email" type="text" onChange={e => handleChange(e)} name='Email' value={user.Email}/>
              {errorState.Email !== "" ? <p>{errorState.Email}</p> : null}
          </label>
          <label>Password:
              <input type="text" onChange={e => handleChange(e)} name='Password' value={user.Password} />
          </label>
          <label>Terms Of Service:
              <input type="checkbox" checked={user.Terms} name='Terms' onChange={e => handleChange(e)}/>
          </label>
          <button disabled={buttonDisabled}>Submit</button>
      </form>
    );
};