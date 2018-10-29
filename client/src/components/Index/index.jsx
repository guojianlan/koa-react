import React from 'react'
import style from './index.scss'
class Index extends React.Component{
  constructor(props){
    super(props);
  }
  tologin=()=>{
    this.props.history.push({
      pathname:'/login',
      state:{
        hehe:1
      }
    })
  }
  render(){
    return (
      <div className={style.hehe}>index
        <div onClick={this.tologin}>tologin</div>
      </div>
    )
  }
}
export default Index