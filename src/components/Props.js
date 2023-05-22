
import React from 'react'
import '../styles/props.css'



function Props({imageurl,linkurl}) {
  return (
    <div  className='props'>
      <a href={linkurl} target='_blank' rel="noreferrer">
      <img style={{ width:'30px'}} src={imageurl} alt="" /> </a>
      

    </div>
  )
}

export default Props
