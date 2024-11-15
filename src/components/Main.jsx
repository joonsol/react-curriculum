import './Main.css'
const Main = (params) => {
  const user = {
    name: 'Liz b',
    isLogin: false
  }
  if(user.isLogin){
    return(
      <div>로그아웃</div>
    )
  }else{
    return(
      <div className='login'>로그인</div>
    )
  }


  // return ( 랜더링 되지 않음
  //   <main>
  //     <div>

  //       {user.isLogin ? (
  //         <div>로그아웃</div>
  //       ) : (
  //         <div>로그인</div>
  //       )}
  //     </div>

  //   </main>
  // )
}
export default Main;
