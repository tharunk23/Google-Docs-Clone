import React from 'react'
import '../styles/toolbox.css';
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import {AiOutlinePrinter} from "react-icons/ai";
import { MdOutlineSortByAlpha } from "react-icons/md";
import { AiOutlineFormatPainter } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";
import {  } from "react-icons/ai";
import {  } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiPencilLine } from "react-icons/ri";
import { TiBrush } from "react-icons/ti";
import { TbTextColor } from "react-icons/tb";
import { AiOutlineUnderline } from "react-icons/ai";
import { AiOutlineItalic } from "react-icons/ai";
import { AiOutlineBold } from "react-icons/ai";
import { HiOutlineChevronUp  } from "react-icons/hi";
import {  } from "react-icons/io";
import { useState } from 'react';
import Sidebar from './Sidebar';



function Toolbox() {

  const [count, setCount] = useState(10);

  function decrement() {
    setCount(count-1);
  }

  function increment() {
    setCount(count+1);
  }
  return ( <div className='toolbox'>
    <div className='toolbox1'>
      <div className="primary-tbox">
        <div className="undo sameprop">
          <BiUndo/>
        </div>
        <div className="redo sameprop">
          <BiRedo/>
        </div>
        <div className="print sameprop">
          <AiOutlinePrinter/>
        </div>
        <div className="grammercheck sameprop">
          <MdOutlineSortByAlpha/>
        </div>
        <div className="formatpainterbutton sameprop">
          <AiOutlineFormatPainter/>
        </div>
        <div className="zoomselect sameprop">
        <select name="zoom%" class="select">
    <option value="100">100%</option>
    <option value="fit">Fit</option>
    <option value="50">50%</option>
    <option value="70">70%</option>
    <option value="90">90%</option>
    <option value="120">120%</option>
    <option value="200">200%</option>
        </select>
        </div>
        <div className="separator ">
          <AiOutlineLine/>
        </div>
        <div className="headingstyleselect sameprop">
          <select name="textstyle" class="select">
    <option value="normal">Normal Text</option>
    <option style={{fontWeight:"bold"}} value="fit">Title</option>
    <option style={{opacity:"0.5"}}value="70">Subtitle</option>
    <option style={{fontSize:"30px"}}value="50">Heading 1</option>
    <option style={{fontSize:"20px"}}value="70">Heading 2</option>
    <option style={{fontSize:"10px"}}value="120">Heading 3</option>
    <option style={{opacity:"0.7"}}value="200">Options</option>
        </select>
        </div>
        <div className="separator">
          <AiOutlineLine/>
        </div>
        <div className="fontselect sameprop">
        <select name="fontselect" class="select">
        <option value="100">Font Style</option>     
    <option value="100">Arial</option>
    <option value="fit">caveat</option>
    <option value="50">Georgia</option>
    <option value="70">Impact</option>
    <option value="90">Monstseart</option>
    <option value="120">LORA</option>
    <option value="200">More Fonts</option>
        </select>
        </div>
        <div className="separator">
          <AiOutlineLine/>
        </div>
        <div className="fontsizeselect">
          <button className='sameprop' onClick={decrement}><GrSubtract/></button>
          <div className='count'>{count}</div>
          <button  className='sameprop' onClick={increment}><GrAdd/></button>
        </div>
        <idv className="separator">
          <AiOutlineLine/>
        </idv>
        <div className="boldbutton sameprop">
          <AiOutlineBold/>
        </div>
        <div className="italicbutton sameprop">
          <AiOutlineItalic/>
        </div>
        <div className="underlinebutoon sameprop">
          <AiOutlineUnderline/>
        </div>
        <div className="textcolorselect sameprop">
          <TbTextColor/>
        </div>
        <div className="bgcolorselect sameprop">
          <TiBrush/>
        </div>
        <div className="separator">
          <AiOutlineLine/>
        </div>
        <div className="3dots sameprop">
          <BsThreeDotsVertical/>
        </div>
      </div>
      
      <div className="secondary-tbox">
        <div className="penicon sameprop">
         <RiPencilLine/>
        </div>
        <div className="separator">
          <AiOutlineLine/>
        </div>
        <div className="uparrow sameprop">
          <HiOutlineChevronUp/>
        </div>
      </div>
    </div>
    
    </div>
      )
}

export default Toolbox
