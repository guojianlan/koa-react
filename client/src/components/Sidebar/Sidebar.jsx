import React from 'react'
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import sidebarStyle from "@/assets/jss/components/sidebarStyle.jsx"
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        {/**大于960隐藏 mobile*/}
        <Hidden mdUp implementation="css">
          <SwipeableDrawer anchor="right" onOpen={rest.handleDrawerToggle} open={rest.open} onClose={rest.handleDrawerToggle} >
            <div className={classes.sidebarWrapper}>mobild-sidebar</div>
          </SwipeableDrawer>
        </Hidden>
        {/**小于960隐藏 pc端*/}
        <Hidden smDown implementation="css">
          <Drawer open variant="permanent" anchor="left" >
            <div className={classes.sidebarWrapper}>
              pc-sidebar
              <div style={{height:"1000px"}}></div>
              <div>bottom</div>
            </div>
          </Drawer>
        </Hidden>
      </div>
    );
  }
}
Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(sidebarStyle)(Sidebar)