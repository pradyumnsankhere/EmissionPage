import {
  Box,
  WithStyles,
  createStyles,
  withStyles,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";

const styles = createStyles({
  tabBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "20px",
    marginLeft: "20px",
  },
  flexItem: {
    paddingRight: "30px",
    color: "grey",
    fontSize: "15px",

    "@media (max-width: 740px)": {
      marginTop: "15px",
    },
  },
  selected: {
    color: "#32cd32",
  },
});

interface Tabprops extends WithStyles<typeof styles> {}
class Tabpage extends Component<Tabprops> {
  state = {
    value: 0,
    data: [
      "All",
      "Scope1",
      "Scope2",
      "Scope3",
      "Saved",
      "Completed",
      "Archived",
      "Recommended",
    ],
  };

  handleItemClick = (index: number) => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    const { value, data } = this.state;

    return (
      <div className={classes.tabBox}>
        {data.map((item, index) => (
          <Typography
            key={index}
            variant="body1"
            className={`${classes.flexItem} ${
              value === index ? classes.selected : ""
            }`}
            onClick={() => this.handleItemClick(index)}
          >
            {item}
          </Typography>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Tabpage);
