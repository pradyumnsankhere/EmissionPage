import React, { Component } from 'react';
import { Typography, Radio } from '@material-ui/core';
import { WithStyles, createStyles, makeStyles, withStyles } from '@material-ui/core/styles';

 const styles=createStyles({
    Radiobtn :{
        color:'#206FC4',
                    
    
},
 })
 interface TestProps extends WithStyles<typeof styles> {}

  class Test extends Component<TestProps> {
    
   render() {
  const {classes}=this.props;
     return (
    <>
    <Typography>
      <Radio
        color="default"
        
        className={classes.Radiobtn}
      />
      1 to 3 months
    </Typography>
    
    </>
     )
   }
 }

 export default withStyles(styles)(Test)
 
  