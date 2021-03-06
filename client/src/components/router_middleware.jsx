import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { inject ,observer }from 'mobx-react';
@inject( 'commonStore' )
@observer
class RouterMiddleware extends React.Component {
  constructor(props) {
    super(props)
    this.hehe = {
      ishehe :false
    }
  }
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={props=>{
        return rest.need_login && !this.props.commonStore.is_login? <Redirect
          to={{
            pathname: "/login"
          }}
        />:<Component {...props} {...rest} />
      }}></Route>
    )
  }
}
export default RouterMiddleware