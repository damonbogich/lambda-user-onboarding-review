import {useState} from 'react';


export default function Form() {
    const [user, setUser] = useState({});

    return (
      <form>
          <label>Name:
              <input type="text" />
          </label>
      </form>
    );
  }