import React from 'react'
import '../styles/doceditor.css'
import { VscListUnordered } from "react-icons/vsc";
import { useState} from 'react'


function Texteditor() {

    const[type,setType] = useState('');

  return (
    <div className='doc-editor'>
      <div className="appview-editor">
        <div className="insideeditor">
        <div className="three-lines"><VscListUnordered /> </div>
        <div >
            <textarea  className='doc' value={type} onChange={(e) => {setType(e.target.value);}}></textarea>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Texteditor
