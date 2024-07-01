import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const [state, setState] = useState(false)

  const stateHandler = () =>{
    setState((prevState) => ! prevState)
  }

  return (
    <div className="App">
      <Header button={stateHandler}/>
      {state ? <Main/> : null }
    </div>
  );
}

export default App;
