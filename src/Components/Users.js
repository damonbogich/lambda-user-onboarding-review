

export default function Users(props) {
    const users = props.users.map(item => {
        return <li>Name: {item.user.userObj.Name} Email: {item.user.userObj.Email}</li>
    });
    return (
      <ul>
          {users}
      </ul>
    );
  }

