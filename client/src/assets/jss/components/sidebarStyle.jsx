// ##############################
// // // Sidebar styles
// #############################

import {
  drawerWidth,
  drawerMiniWidth,
} from "@/assets/jss/common.jsx";

const sidebarStyle = theme => ({
  sidebarWrapper:{
    width:drawerWidth,
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    overflowScrolling: "touch",
    position: "fixed",
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      height: "100%",
      overflow: "auto",
      width: "260px",
      zIndex: "4",
    },
  }
});

export default sidebarStyle;
