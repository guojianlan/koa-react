import React from "react";
import resumeRouters from '../../router/Resume/index'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import RouterMiddleware from '../../components/router_middleware.jsx';
class Resume extends React.Component {
  constructor(props) {
    super(props)
    //一定要登陆了
  }
  render() {
    return (
      <div>
        <div>resume-header</div>
        <div>
          <Switch>
            {resumeRouters.map((prop, key) => {
              if (prop.redirect)
                return <Redirect from={`${this.props.match.path}${prop.path}`} to={`${this.props.match.path}${prop.to}`} key={key} />;
              return <RouterMiddleware need_login path={`${this.props.match.path}${prop.path}`} component={prop.component} key={key} />;
            })}
          </Switch>
        </div>
      </div>
    )
  }
}
export default Resume;