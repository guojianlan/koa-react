import React from 'react'
import { BrowserRouter as Router, Link,Switch  } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Provider } from 'mobx-react';
import stores from '../stores'
const Index = Loadable({
  loader: () => import('../components/Index/index'),
  loading: () => <div>Loading Index...</div>,
})
const Login = Loadable({
  loader: () => import('../components/Login/index'),
  loading: () => <div>Loading Login...</div>,
})
const Edit = Loadable({
  loader: () => import('../components/Edit/index'),
  loading: () => <div>Loading Login...</div>,
})
import RouterMiddleware from '../components/router_middleware.jsx';
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Provider {...stores}>
        <Router>
          <div>
            <Link to="/">index</Link>
            <Link to="/login">login</Link>
            <Link to="/edit">edit</Link>
            <div>
              <Switch>
                <RouterMiddleware exact path="/" component={Index}></RouterMiddleware>
                <RouterMiddleware exact path="/login" component={Login}></RouterMiddleware>
                <RouterMiddleware need_login path="/edit" component={Edit}></RouterMiddleware>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App;