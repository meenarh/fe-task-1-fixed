import React from 'react'

function Header(props){
    const header = `h3 ${props.text}` 
  return (
    <h3 className={header}>{props.children}</h3>
  )
}


export default Header