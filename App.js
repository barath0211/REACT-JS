import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function myButton () {
    document.getElementById("mybtn").addEventListener("click",e );
  function e () {
    document.getElementById("mybtn").innerHTML = "YOU CLICKED ME";
  }
}


//Props-Try using Render

function Hello(props) {
  return <h1>Hello Barath!</h1>;
}

ReactDOM.render(<Hello/>, document.getElementById("root"));

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Office() {
  const empName = "Barath";
  return (
    <>
	    <h1>What is the Employee name?</h1>
	    <Emp Name={ empName } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<office />);

	    //Class Components 
class Mypage extends React.component
{
  render ()
  {
    return <h1>HELLO SIR</h1>
  }
}
class Mypage  extends React.Component {
  render () {
    <div>
      <p>This is Barath of ZNZ</p>
      <h1>I welcome you !!</h1>
    </div>
  }
}

//state-functional components

const MyFunctionalComponent = () => {
  const [display.setDisplay] = useState(false);
  const [text,setText]=useState('any random text');
  const [employee,setEmployee] = useState([]);
  Firstname = 'Barath'
  Lastname = 'Kumaar'
  };
  const [age,setAge]=useState(24);
  Return (
  <>
  <p>My first app</p>
  </>)
  const handleClick = () => {
  setDisplay(true);
  setTodos([{id:'1234',text:'any text'}]);
  setEmployee({firstname: 'Elon',lastname:'musk'})
  setText('modified text')
  console.log(display,text,todos,employee)
  return(
  {display === true? <p>My first functional component </p> :''}
  <button onClick={handleClick}>Display functional content</button>
  </>
  )}
  

export default Mypage;
export default App;
