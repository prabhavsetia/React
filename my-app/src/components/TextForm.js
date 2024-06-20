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

    const [myStyle, setMyStyle] = useState({
        background: 'black',
        color: 'white'
    })
    const [btnText, setBtnText] = useState("Dark Mode")
    const ToggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                background: 'white',
                color: 'black'
            })
            setBtnText("Light Mode")
        }
        else {
            setMyStyle({
                background: 'black',
                color: 'white'
            })
            setBtnText("Dark Mode")
        }
    }
    return (
        <>
            <div className='container' style={myStyle}>
                <h3>{props.heading} </h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{background :props.mode === 'dark' ? 'grey' : 'white'}}onChange={handleOnChange} id="myBax" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowerClick}>Convert To Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
                <button onClick={ToggleStyle} type="button" className="btn btn-outline-success" >{btnText}</button>
            </div>
            <div className='container'>
                <h3>Your text summary</h3>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minuts read</p> 
            </div>
            
        </>
    );
} 