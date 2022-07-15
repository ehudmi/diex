import logo from "./logo.svg";
import "./App.css";
import Customers from "./Components/Customers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React & Express</p>
      </header>
      <Customers />
    </div>
  );
}

export default App;
