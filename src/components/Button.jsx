const Button = ({ text = "기본", color = "black", children = null }) => {

  const onClickButton=(e)=>{
console.log(e)
  }
  return (
    <button
      onClick={onClickButton}
      style={{ color: color }}
    >{text}-{color.toUpperCase()}
      {children}
    </button>
  )
}
export default Button
