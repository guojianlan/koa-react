import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "@/assets/jss/common.jsx";

const headerStyle = theme => ({
  appBar:{
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    zIndex: "1029",
    border: "0",
    borderRadius: "3px",
    transition: "all 150ms ease 0s",
    display: "block"
  },
  transparent:{
    backgroundColor: "transparent",
    color: "#555555",
  },
  primary: {
    backgroundColor: "#00bff6",
    color: "#FFFFFF",
    "fontSize":"18px"
  },
  white:{
    backgroundColor: "#fff",
    color: "#000",
    "fontSize":"14px"
  }
});

export default headerStyle;
