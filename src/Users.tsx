import UserCart from './UserCart';

interface User {
  name: string;
  isLoggedIn: boolean;
}

const users: User[] = [
  { name: 'Masuk Ahmed', isLoggedIn: true },
  { name: 'Faruk Ahmed', isLoggedIn: true },
  { name: 'Salek Ahmed', isLoggedIn: false },
  { name: 'Joynal Ahmed', isLoggedIn: true },
  { name: 'Jalil Ahmed', isLoggedIn: false },
];

//export default function Users() {
//return (
//<div>
//{users.map(user => (
// <li>{user.name}</li>
// ))}
//</div>
//)//}

export default function Users() {
  return (
    <div>
      {users.map(user => (
        <UserCart name={user.name}></UserCart>
      ))}
    </div>
  );
}
