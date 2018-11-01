import {
  drawerWidth,
} from "@/assets/jss/common.jsx";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
    "&:after": {
      display: "table",
      clear: "both",
      content: '" "'
    }
  },
  mainPanel:{
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    height:'100%',
    width: "100%",
    overflowScrolling: "touch"
  },
  content:{
    marginTop:"63px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  }
});

export default appStyle;
