import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
const style = {
  list:{
    width:"100%"
  }
}
 class Sidebar extends React.Component {
  constructor(props){
    super(props)
    console.log(props);
  }
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.list}>
      sidebar
      </div>
    );
  }
}
export default withStyles(style)(Sidebar)