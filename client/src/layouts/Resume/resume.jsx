import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import classNames from "classnames";
import resumeStyle from "@/assets/jss/layouts/resumeStyle.jsx";
import PerfectScrollbar from "perfect-scrollbar";
import resumeRouters from '@/router/Resume/index'
import Sidebar from "@/components/Sidebar/Sidebar.jsx";
import Header from '@/components/Header/header.jsx'
import {Switch, Redirect } from 'react-router-dom';
import RouterMiddleware from '@/components/router_middleware.jsx';
console.log(resumeRouters)
class Resume extends React.Component {
  constructor(props) {
    super(props)
    //一定要登陆了
    this.state = {
      mobileOpen: false,
      miniActive: false
    }
  }
  handleDrawerToggle = ()=>{
    this.setState({
      mobileOpen:!this.state.mobileOpen
    })
  }
  componentDidMount(){
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel)
    }
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
      {/**sidebar start */}
      <Sidebar open={this.state.mobileOpen} {...rest} handleDrawerToggle={this.handleDrawerToggle} />
       {/**sidebar end */}
        <div ref="mainPanel" className={classes.mainPanel}>
            <Header {...rest} color="white" />
            <div className={classes.content} >
              <Switch>
                {resumeRouters.map((prop, key) => {
                  if (prop.redirect)
                    return <Redirect from={`${prop.path}`} to={`${prop.to}`} key={key} />;
                  return <RouterMiddleware  path={`${prop.path}`} component={prop.component} key={key} />;
                })}
              </Switch>
            </div>
        </div>
      </div>
    )
  }
}
Resume.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(resumeStyle)(Resume);