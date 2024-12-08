import React, { useState } from 'react'

export default function TextBox3(props) {
    const [text, setText] = useState('')

    const handlerOnUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('String Converted in UpperCase')
    }
    const handlerOnLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('String Converted in LowerCase')

    }
    const handlerOnClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert('String Clear')
    }
    const handlerOnCopy = () => {
        let text = document.querySelector(".my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("String Copy")
    }
    const handlerOnReverseText=()=>{
        let newText = text.split('').reverse().join('');
            setText(newText);
            props.showAlert("String Reverse")
        
    }
    const handlerOnExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed")
    }
    const handlerOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>

            <div className="container">
                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white', fontWeight: '700' }}>A string Converter Tool</h1>
                <div className="form-floating">
                    <textarea className="form-control my-box" onChange={handlerOnChange} value={text} id="floatingTextarea2" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', height: '200px', border: '2px solid black', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button className='btn btn-primary my-2 mx-1' onClick={handlerOnUpperCase}>Convert UpperCase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handlerOnLowerCase}>Convert LowerCase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handlerOnCopy}>Copy Text</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handlerOnExtraSpace}>Remove Extra Space</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handlerOnReverseText}>Reverse String</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handlerOnClear}>Clear Text</button>



            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> charactors...</p>
                <p>{0.008 * text.split(" ").length}Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Enter Your text to preview it here'}</p>
            </div>
        </>
    )
}
