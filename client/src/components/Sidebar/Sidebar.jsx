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
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});
class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }
  handleListItemClick = (event, index) => {
    console.log(index);
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Hidden mdUp implementation="css">
          <SwipeableDrawer
            anchor="right"
            onOpen = {this.props.handleDrawerToggle}
            open={this.props.open}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.props.handleDrawerToggle}
          >
            <div className={classes.sidebarWrapper}>
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            anchor="left"
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.sidebarWrapper}>
              <div>pc-sidebar</div>
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