
import React from 'react'
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import sidebarStyle from "@/assets/jss/components/sidebarStyle.jsx"
class Header extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const { classes } = this.props;
    return (
      <div>
        <div onClick={this.props.handleDrawerToggle}>header</div>
      </div>
    )
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(sidebarStyle)(Header)