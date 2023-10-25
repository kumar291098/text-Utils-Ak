import React ,{useState} from 'react'
// import Clipboard from 'clipboard'

export default function TextForms(props) {
    const [text, setText]=useState('Enter Text here')
    const handleUpclick=()=>{
        // console.log("Upper case clickged")
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoclick=()=>{
        // console.log("Upper case clickged")
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to lowercase!", "success");
    }
    

    const handleClearClick=()=>{
        setText("")
        props.showAlert("Text Cleared!", "success");

    }

    const handleOnChenge=(event)=>{
        // console.log("Upper case clickged")
        setText(event.target.value)
        
    }


    const handleCopy=()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard!", "success");
    }


    const handleExtraSpaces=()=>{
        let newtext=text.replace(/\s+/g, " ")
        setText(newtext)
        props.showAlert("Extra spaces removed!", "success");
    }
  return (
    <>
    <div className='Container my-3 mx-5'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" onChange={handleOnChenge} style={{backgroundColor:props.mode==='dark'?'#252926':'#ddede2',color:props.mode==='dark'?'#ddede2':'#252926'}} value={text} id="myBox" rows="3"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to upper case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to lower case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container">
        <h1>Text summary here</h1>
        <p>{text.split(" ").length} words here {text.length} character here</p>
        <p>{0.008*text.split("").length} minutes take to read the text</p>
        <h2>Preview test</h2>
        <p>{text.length>0?text:"enter something to preview it here"}</p>
    </div>
    </>
  )
}
