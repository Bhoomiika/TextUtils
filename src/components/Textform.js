import React, { useState } from 'react'
//import 
//import PropTypes from 'prop-types'

export default function Textform(props) {

    const handleUpClick = (event) => {
        // console.log("uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to UpperCase", "success");
    }
    //Hum kuch bhi click kr rhe toh state change ho rha hai ye state chane hona ek event hai
    //iss event ko hum listen kr rhe hai or jo bhi click kr rhe hai ussi text ko setText ki help se set kr rhe hain
    const handleOnChange = (event) => {
        //console.log("onChange")
        setText(event.target.value);
    }
    const handlelpClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to LowerCase", "success");
    }

    const handleclearClick = (event) => {
        let newText = '';
        setText(newText);
        props.showAlert("Text is Cleared", "success");
    }

    const handlespeakClick = (event) => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speak Function is Enabled", "success");
    }

    //ye ek object hai jisme "text" state ka type hai aur setText uss state ko change krne ka function
    //useState hook hai jo state use krne deta hai without making classes useState ko import kiya hai 

    //text.split will give a array of no. of spaces

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style=
                        {{ backgroundColor: props.mode === 'dark' ? '#1F2022' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlespeakClick} >Speak</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick} >Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlelpClick} >Convert to Lowercase</button>
            </div>

            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your Text Summary</h3>
                {/*<p> {text.length > 0 ? text.split(" ").length : 0} words, {text.length} characters</p>*/}
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters </p>
                <p> {text.length > 0 ? (0.008 * text.split(" ").length) : 0} Minutes Read </p>
                <h4>Preview</h4>
                <p> {text.length > 0 ? text : "Enter text to preview here"} </p>
            </div>
        </>
    )
}
