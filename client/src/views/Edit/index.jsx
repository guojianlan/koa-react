import React, { Component } from 'react';
class Edit extends Component{
  constructor(props){
    super(props);
    console.log(props);
  }
  logout = ()=>{
    this.props.commonStore.changeLoginState(false)
  }
  render(){
    return (
      <div >edit
        <div onClick={this.logout}>logout</div>
        <div style={{height:"2000px"}}></div>
        <div>bottom</div>
      </div>
    )
  }
}
export default Edit
