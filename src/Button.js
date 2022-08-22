function Button(props){
  const buttons = `button ${props.type}`
  return (
    <button className={buttons} onClick={props.handleClick}>{props.children}</button>
  )
}

export default Button