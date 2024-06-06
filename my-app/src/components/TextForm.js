import React, {useState } from 'react'

export default function TextForms(props) {
    const handleOnChange =(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleUpClick =()=>{
        console.log("Uppercase Was Cliked" + text);
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLowerClick =()=>{
        let newText= text.toLowerCase();
        console.log("Lowercase Was Cliked");
        setText(newText);
    }
    const [text,setText] = useState('Enter text here');
    // setText("New Text");
    return (
        <>
            <div>
                <h3>{props.heading} </h3>
                <div className="mb-3">
                    <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBax" rows="8"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert To Uppercase</button>
                <button className='btn btn-primary' onClick={handleLowerClick}>Convert To Lowercase</button>
            </div>
        </>
    );
} 