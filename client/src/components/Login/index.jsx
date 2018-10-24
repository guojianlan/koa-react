import React from 'react'
import style from './index.scss'
class Index extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }
  login = ()=>{
    console.log(this.props.commonStore.changeLoginState(true));
  }
  render(){
    return (
      <div className={style.hehe}>login
        <div onClick={this.login}>登录</div>
      </div>
    )
  }
}
export default Index