import './App.css';
import Store from './Store';
import Main from "./Main"

function App() {
  const increasePopulation = Store((state) => state.increaseNum)
  return (
    <div className="App">
      <Main />
      <button onClick={increasePopulation}>one up</button>
    </div>
  );
}

export default App;