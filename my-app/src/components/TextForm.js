import React, { useState } from 'react'

export default function TextForms(props) {
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        console.log("Uppercase Was Cliked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.AlertMode("Text converted to UPPERCASE", "success");
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        console.log("Lowercase Was Cliked");
        setText(newText);
        props.AlertMode("Text converted to lowercase", "success");
    }
    const handleClearClick = () => {
        let newText = "";
        console.log("Clear Was Cliked");
        setText(newText);
        props.AlertMode("Text cleared", "success");
    }
    const [text, setText] = useState('Enter text here');
    // setText("New Text");

    // const [myStyle, setMyStyle] = useState({
    //     background: 'black',
    //     color: 'white'
    // })

    let myStyle = {
        color: props.mode ==='dark'? 'white':'black',
        backgroundColor: props.mode ==='dark'? '#004f84':'white'
    }
    // const [btnText, setBtnText] = useState("Dark Mode")
    return (
        <>
            <div className='container' style={myStyle}>
                <h3>{props.heading} </h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{background :props.mode === 'dark' ? 'white' : 'white'}}onChange={handleOnChange} id="myBax" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length===0}  className='btn btn-primary mx-2 my-1' onClick={handleLowerClick}>Convert To Lowercase</button>
                <button disabled={text.length===0}  className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear</button>
            </div>
            <div className='container' style={{color :props.mode === 'dark' ? 'white' : 'black'}}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minuts read</p> 
            </div>
            
        </>
    );
} 