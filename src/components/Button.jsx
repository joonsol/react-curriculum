const Button = ({text="기본", color="black", children=null}) => {

  return(
    <button style={{color:color}}>{text}-{color.toUpperCase()}
    {children}
    </button>
  )
}
export default Button
