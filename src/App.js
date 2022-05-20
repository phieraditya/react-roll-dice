// import logo from './logo.svg';
import Die from './Die';
// import RollDice from './RollDice';
import './App.css';

function App() {
  return (
    <div className="App">
      <Die face="four" />
      <Die face="three" />
      <Die face="two" />
      {/* <RollDice /> */}
    </div>
  );
}

export default App;
