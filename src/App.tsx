//import Todo from './Todo';
//import Task from './Task';
//import Book from './Book';
import './App.css';
import Users from './Users';
import UserCart from './UserCart';
function App() {
  //const books = ['bangla', 'english', 'math', 'arabic'];

  //books.map(book => )
  return (
    <>
      <h1>My React</h1>
      <Users></Users>
      {/*{books.map(book => (
        <Book name={book}></Book>
      ))}

       {books.map(book => (
        <li>{book}</li>
      ))}

      <Task name="Finish Module" isDone={true}></Task>
      <Task name="Facebooking time wasting" isDone={true}></Task>
      <Task name="Mobail Charge" isDone={false}></Task>
      <Todo task="practice Coding" time="5.00"></Todo>
      <Todo task="Take a shower" time="9.00"></Todo>
      <Todo task="No social media today" time=" 07.00"></Todo>
       <button disabled></button>
      <Developer language="javascript" experiance="3"></Developer>
      <Developer language="phyton" experiance="12"></Developer>
      <Developer language="C++" experiance="4"></Developer>
      <Developer language="Java" experiance="5"></Developer>
      <Student name="shubida badhi" gpa="3.51"></Student>
      <Student name="pati Leader"></Student>
      <Student></Student>*/}
    </>
  );
}

/**function Developer(props) {
  console.log(props);
  return (
    <div className="student">
      <h3>programing language:{props.language}</h3>
      <p>years of experiance:{props.experiance}</p>
    </div>
  );
}
function Student(props) {
  console.log('inside the student component', props);
  console.log(props.name);
  const studentStyle = {
    border: '2px solid red',
    borderRedius: '10px',
    margin: '10px',
  };
  return (
    <div
      style={{
        border: '2px solid green',
        borderRedius: '10px',
        margin: '10px',
      }}
    >
      <h3>Name:</h3>
      <p>Grades:</p>
    </div>
  );
}
function Person() {
  return <p>I am here</p>;
}

function Gadgets() {
  const money = 56;
  return (
    <>
      <p>samiii {3 + 9}</p>
      <p>samiii {money}</p>
      <p>samiii</p>
      <p>samiii</p>
    </>
  );
}*/
export default App;

//function add(num1,num2) {
// return num1 + num2;
//}

//const total = add(2, 78);
//const total2 = add(989, 34);
