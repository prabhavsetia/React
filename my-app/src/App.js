
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState("light")
  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "black";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
