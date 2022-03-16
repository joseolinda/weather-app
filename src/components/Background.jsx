function Background(props) {
  
  return (
    <div className={"background " + props.classBg}>
      {props.children}
    </div>
  )
}

export default Background