
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const AlertMode = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#004f84";
      document.body.style.color = "black";
      AlertMode("Dark mode activated", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      AlertMode("Light mode activated", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm AlertMode={AlertMode} heading="Enter the text to analyze" mode={mode} />} />
          </Switch>
        </div >
      </Router>
    </>
  );
}

export default App;
