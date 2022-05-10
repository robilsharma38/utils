import React , {useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {

    const [text,setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase",'success');
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase",'success');
    }

    const handleCopyClick = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied",'success');
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed",'success');
    }
    
    return (
        <>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper case</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lower case</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your paragraph :</h2>
                <p>Word is {text.split(" ").length} and character is {text.length}</p>
                <p>{0.008 * text.split(" ").length} Reading minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview here"}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired,
}

TextForm.defaultProps = {
    heading : 'Text Utility'
}