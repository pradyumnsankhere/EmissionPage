import { WithStyles, createStyles, withStyles } from "@material-ui/core";
import { Pagination } from "@mui/material";

import React, { Component } from "react";

const styles = createStyles({
  paginationHover: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
    marginRight: "45px",

    "& .MuiPaginationItem-root.Mui-selected": {
      borderColor: "#32cd32",
      "& .MuiPaginationItem-root.Mui-selected:hover": {
        borderColor: "#0056b3",
      },
    },
    "@media (max-width: 600px)": {
      marginRight: "0px",
    },
  },
});
interface PaginationPageprops extends WithStyles<typeof styles> {}

class PaginationPage extends Component<PaginationPageprops> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.paginationHover}>
          <Pagination count={50} variant="outlined" shape="rounded" />
        </div>
      </>
    );
  }
}
export default withStyles(styles)(PaginationPage);
