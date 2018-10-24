import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import './assets/public.scss'
import App from './views'
class Processd extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isAuth :false
    }
  }
  login(){
    this.setState({
      isAuth:true
    })
  }
  render(){
    const {component:Component,...refs}  = this.props;
    return (
     <Route {...refs} render={(props)=>{
       return this.state.isAuth?
       <div>
        已登录
        <Link to="/ceshi2">ceshi2</Link>
       </div>:
       <div onClick={()=>{this.login()}}>未登录</div>
     }}></Route>
    )
  }
}
// class Pros extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return (
//       <div>Pros</div>
//     )
//   }
// }
class Pross extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>Pross</div>
    )
  }
}
const Pros = ()=><div>111111</div>
ReactDOM.render(<App />, document.getElementById('app'))