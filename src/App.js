import logo from './logobook.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button type="button" className="btn btn-outline-info shadow">
            Hello
          </button>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by Alondra Price</small>
        </footer>
      </div>
    </div>
  );
}


