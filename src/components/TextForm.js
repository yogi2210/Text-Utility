import React, {useState} from 'react'

export default function TextForm(props) {
   
    const handleUpClick = () => {
       let newText = text.toUpperCase();
       setText(newText)
       props.showAlert("converted to upper case", "success")
   } 
    const handleLoClick = () => {
       let newText = text.toLowerCase();
       setText(newText)
       props.showAlert("converted to lower case", "success")
   } 
    const handleClearClick = () => {
       let newText = '';
       setText(newText)
   } 

   const handleOnChange = (event)=>{
       console.log('onChange')
       setText(event.target.value)
   }

    const [text, setText] = useState("");
    // setText("asdfghjkl");

  return (
    <>
    <div className="container" style ={{color: props.mode==='dark'?'white':'black'}} >
        <h1  >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange}  placeholder='Enter text here' style ={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert To Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear</button>
    </div>
    <div className="container my-3" style ={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary </h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} minutes read</p>
        <h2>Text preview</h2>
        <p>{text.length>0 ? text : "enter to preview here"}</p>
    </div>

    </>

  )
}
