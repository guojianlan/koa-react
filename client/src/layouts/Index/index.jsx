import React from "react";
import indexRouters from '../../router/Index/index'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import RouterMiddleware from '../../components/router_middleware.jsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../../components/Sidebar/Sidebar'
class Index extends React.Component {
  constructor(props) {
    super(props)
    //未登录一定要跳转
    console.log('index');
  }
  render() {
    console.log(2);
    return (
      <div>
        <Sidebar></Sidebar>
        <div><AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Photos
          </Typography>
          </Toolbar>
        </AppBar></div>
        <div>
          <Switch>
            {indexRouters.map((prop, key) => {
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
              return <RouterMiddleware path={`${prop.path}`} component={prop.component} key={key} />;
            })}
          </Switch>
        </div>
      </div>
    )
  }
}
export default Index;