import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import classNames from "classnames";
import resumeStyle from "@/assets/jss/layouts/resumeStyle.jsx";
import resumeRouters from '@/router/Resume/index'
import Sidebar from "@/components/Sidebar/Sidebar.jsx";
import Header from '@/components/Header/header.jsx'
import {Switch, Redirect } from 'react-router-dom';
import RouterMiddleware from '@/components/router_middleware.jsx';
class Resume extends React.Component {
  constructor(props) {
    super(props)
    //一定要登陆了
    this.state = {
      mobileOpen: false,
      miniActive: false
    }
  }
  handleDrawerToggle=()=>{
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  render() {
    const { classes, ...rest } = this.props;
    const mainPanel =
      classes.mainPanel +
      " " +
      classNames({
        [classes.mainPanelSidebarMini]: this.state.miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    return (
      <div className={classes.wrapper}>
        <Sidebar
          logoText={"Creative Tim"}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          {...rest}
        />
        <div className={mainPanel} ref="mainPanel">
            <Header  handleDrawerToggle={this.handleDrawerToggle} />
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
Resume.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(resumeStyle)(Resume);