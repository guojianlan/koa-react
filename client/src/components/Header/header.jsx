
import React from 'react'
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import headerStyle from "@/assets/jss/components/headerStyle.jsx"
class Header extends React.Component {
  static defaultProps ={
    color:"transparent"
  }
  static propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]),
  };
  constructor(props){
    super(props)
  }
  render(){
    const { classes,color } = this.props;
    console.log(this.props);
    const appBarClasses = classNames({
      [" " + classes[color]]: color
    });
    return (
      <AppBar className = {classes.appBar + appBarClasses}>
        <Toolbar >header</Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(headerStyle)(Header)