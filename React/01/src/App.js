import logo from './logo.svg';
import './App.css';

function App() {
  let a= 2;
  console.log(a);
  return (
<>
<div className='main'>

      <h1 >hello! I am Components{a}</h1>
      <p style={{backgroundColor:"blue", color:"white"}}>this is tutorial of react</p>
      </div>
      </>
  );
}

export default App;
