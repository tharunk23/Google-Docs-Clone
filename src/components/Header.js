import React from 'react';
import "../styles/header.css";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineInsertComment } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";

function Header() {
  return (
    <div className='header'>
        <div className="header-left">
            <div className="header-left1">
                <img src="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico" ></img>
            </div>
            <div className="header-left2">
                <div className="header-left2-up">
                    Untitled document
                <div className="star">
                    <AiOutlineStar />
                </div>
                 </div>
                <div className="header-left2-down">
                    <p>File</p>
                    <p>Edit</p>
                    <p>View</p>
                    <p>Insert</p>
                    <p>Format</p>
                    <p>Tools</p>
                    <p>Extensions</p>
                    <p>Help</p>     
                </div>
            </div>
        </div>
        <div className="header-right">
            <div className="comment">
                <MdOutlineInsertComment/>
            </div>
            <div className="cam-dropdown">
                <div className="cam">
                    <HiOutlineVideoCamera/>
                </div>
                <div className="dropdown">
                    <MdArrowDropDown/>
                </div>
            </div>
            <div className="lock-share">
                <div className="lock"><MdOutlineLock/></div>
               <span>Share</span>
            </div>
            <div className="usericon">
                <img src="https://tse4.mm.bing.net/th?id=OIP.XDg7aCjb2GdN5guoHoC4yQHaHa&pid=Api&P=0&h=180" alt='usericon'></img>
            </div>
        </div>
    </div>
  )
}

export default Header
