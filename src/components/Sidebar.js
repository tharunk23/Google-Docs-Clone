import React from 'react'
import Props from './Props'
import '../styles/sidebar.css'
import { GrAdd } from "react-icons/gr";
import { AiOutlineLine } from "react-icons/ai"; 


function Sidebar() {
  return (
    <div className='sidebar'>
    <Props imageurl="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png"
   linkurl="https://calendar.google.com/" />

   <Props imageurl="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" linkurl="https://keep.google.com/" />

   <Props imageurl="https://img.icons8.com/?size=1x&id=30843&format=png" linkurl="https://photos.google.com/" />

   <Props imageurl="https://img.icons8.com/?size=1x&id=13630&format=png" linkurl="https://drive.google.com/" />

   <Props imageurl="https://img.icons8.com/?size=1x&id=P7UIlhbpWzZm&format=png" linkurl="https://mail.google.com/" />
   
   <div className="icon">
    <div className="separator1"> <AiOutlineLine/></div>
    <div className="plusicon"> <GrAdd /></div> 

  </div>
    </div>
  )
}

export default Sidebar
