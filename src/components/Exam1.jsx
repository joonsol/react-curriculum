import './Exam1.css'
const Exam1 = ({name, age}) => {
  return(
    <div>
        나의 이름은 <span className='name'>{name}</span>이고 나이는 <span className='age'> {age}</span>살이야
    </div>
  )
}
export default Exam1