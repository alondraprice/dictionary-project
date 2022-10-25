import logo from './logobook.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <button type="button" className="btn btn-outline-info shadow">Hello</button>
      </header>
    </div>
  );
}

export default App;
