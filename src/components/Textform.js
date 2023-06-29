import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

let Status = false;
export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase was Clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text is cleared!","success");
    }
    const handleReverseClick = () => {
        // console.log("Uppercase was Clicked");
        let newText = text.split(" ").reverse().join(" ");
        setText(newText);
        props.showAlert("Word is Reversed!","success");
    }
    const handleReverseTextClick = () => {
        // console.log("Uppercase was Clicked");
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text is Reversed!","success");
    }
    const handleCopyClick = () => {
        let Copy = document.getElementById("myBox");
        Copy.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra space is Removed from text!","success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        if (Status === false) {
            let x = event.target.value;
            let y = x[x.length - 1];
            event.target.value = y;
            setText(event.target.value);
            Status = true;
        } else {
            setText(event.target.value);
        }

    }
    const [text, setText] = useState("Enter text here");
    // setText("new Text");
    return (
        <>
            <div className='container' style={{ color:props.mode === 'light' ? 'black' : 'white' }}>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleReverseClick}>Reverse words</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleCopyClick}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleReverseTextClick}>Reverse text</button>
            </div>
            <div className="container my-3" style={{ color:props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Your Text Summary</h3>
                <p><b>{text==="Enter text here"?0:text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text==="Enter text here"?0:text.split(" ").filter((element)=>{return element.length!==0}).join("").length}</b> characters</p>
                <p><b>{text==="Enter text here"?0:text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008}</b> Minutes to read</p>
                <h4>Preview</h4>
                <p>{text==="Enter text here"||text.length===0?"Enter Some text to preview":text}</p>
            </div>
        </>
    )
}

Textform.prototype = {
    heading: PropTypes.string.isRequired,
}

Textform.defaultProps = {
    heading: 'Enter the text to analyze',
}
