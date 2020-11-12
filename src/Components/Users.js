

export default function Users(props) {
    console.log(props.users, 'props from users component')
    const users = props.users.map(item => {
        console.log(item, 'in map')
        return <li>Name: {item.user.user.Name} Email: {item.user.user.Email}</li>
    });
    return (
      <ul>
          {users}
      </ul>
    );
  }