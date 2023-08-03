import {
  Grid,
  Typography,
  WithStyles,
  createStyles,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PaginationPage from "./PaginationPage";
const styles = (theme: any) =>
  createStyles({
    mainContainer: {
       padding: "30px",
    },
    gridItem: {
       padding: "30px",
 
      transition: "background-color 0.3s",
      "&:hover": {
        backgroundColor: "lightblue",
      },
     
    },
    headingGridItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    scopeHead: {
      fontWeight: "bold",
    },
    gridItemHead: {
      marginTop: "18px",
      fontSize: "20px",
      fontWeight: "bold",
    },
    paragraph: {
      fontSize: "15px",
      color: "grey",
    },
    UpstramLeasesTxt: {
      fontSize: "15px",
      color: "grey",
      paddingLeft: "20px",
      marginTop: "40px",
    },
    gridContainer: {
      marginTop: "20px",
    },
     
  });
interface Testcomponentprops extends WithStyles<typeof styles> {}

class Testcomponent extends Component<Testcomponentprops> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={0} className={classes.gridContainer}>
          <Grid item className={classes.gridItem} md={4} sm={6}>
            <div className={classes.headingGridItem}>
              <Typography className={classes.scopeHead}>Scope 1</Typography>
              <MoreVertIcon></MoreVertIcon>
            </div>
            <Typography className={classes.gridItemHead}>
              Assests leased from others
            </Typography>
            <p className={classes.paragraph}>
              Emissions from operation of assets (e.g vehicles and facilities)
              that are leased by the company.
            </p>
            <Typography className={classes.UpstramLeasesTxt}>
              3.8 Upstream Leased Assets{" "}
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem} md={4} sm={6}>
            <div className={classes.headingGridItem}>
              <Typography className={classes.scopeHead}>Scope 1</Typography>
              <MoreVertIcon></MoreVertIcon>
            </div>
            <Typography className={classes.gridItemHead}>
              Business Travel
            </Typography>
            <p className={classes.paragraph}>
              Emissions from operation of assets (e.g vehicles and facilities)
              that are leased by the company.
            </p>
            <Typography className={classes.UpstramLeasesTxt}>
              3.8 Upstream Leased Assets{" "}
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem} md={4} sm={6}>
            <div className={classes.headingGridItem}>
              <Typography className={classes.scopeHead}>Scope 1</Typography>
              <MoreVertIcon></MoreVertIcon>
            </div>
            <Typography className={classes.gridItemHead}>
              Capital Goods
            </Typography>
            <p className={classes.paragraph}>
              Emissions from operation of assets (e.g vehicles and facilities)
              that are leased by the company.
            </p>
            <Typography className={classes.UpstramLeasesTxt}>
              3.8 Upstream Leased Assets{" "}
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem} md={4} sm={6}>
            <div className={classes.headingGridItem}>
              <Typography className={classes.scopeHead}>Scope 1</Typography>
              <MoreVertIcon></MoreVertIcon>
            </div>
            <Typography className={classes.gridItemHead}>
              Company Vehicles
            </Typography>
            <p className={classes.paragraph}>
              Emissions from operation of assets (e.g vehicles and facilities)
              that are leased by the company.
            </p>
            <Typography className={classes.UpstramLeasesTxt}>
              3.8 Upstream Leased Assets{" "}
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem} md={4} sm={6}>
            <div className={classes.headingGridItem}>
              <Typography className={classes.scopeHead}>Scope 1</Typography>
              <MoreVertIcon></MoreVertIcon>
            </div>
            <Typography className={classes.gridItemHead}>
              Employees Commuting
            </Typography>
            <p className={classes.paragraph}>
              Emissions from operation of assets (e.g vehicles and facilities)
              that are leased by the company.
            </p>
            <Typography className={classes.UpstramLeasesTxt}>
              3.8 Upstream Leased Assets{" "}
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem} md={4} sm={6}>
            <div className={classes.headingGridItem}>
              <Typography className={classes.scopeHead}>Scope 1</Typography>
              <MoreVertIcon></MoreVertIcon>
            </div>
            <Typography className={classes.gridItemHead}>
              End-of-Life Treatment of Sold Products
            </Typography>
            <p className={classes.paragraph}>
              Emissions from operation of assets (e.g vehicles and facilities)
              that are leased by the company.
            </p>
            <Typography className={classes.UpstramLeasesTxt}>
              3.8 Upstream Leased Assets{" "}
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem} md={4} sm={6}>
            <div className={classes.headingGridItem}>
              <Typography className={classes.scopeHead}>Scope 1</Typography>
              <MoreVertIcon></MoreVertIcon>
            </div>
            <Typography className={classes.gridItemHead}>
              Equipment Gas Leakage
            </Typography>
            <p className={classes.paragraph}>
              Emissions from operation of assets (e.g vehicles and facilities)
              that are leased by the company.
            </p>
            <Typography className={classes.UpstramLeasesTxt}>
              3.8 Upstream Leased Assets{" "}
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem} md={4} sm={6}>
            <div className={classes.headingGridItem}>
              <Typography className={classes.scopeHead}>Scope 1</Typography>
              <MoreVertIcon></MoreVertIcon>
            </div>
            <Typography className={classes.gridItemHead}>Franchises</Typography>
            <p className={classes.paragraph}>
              Emissions from operation of assets (e.g vehicles and facilities)
              that are leased by the company.
            </p>
            <Typography className={classes.UpstramLeasesTxt}>
              3.8 Upstream Leased Assets
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem} md={4} sm={6}>
            <div className={classes.headingGridItem}>
              <Typography className={classes.scopeHead}>Scope 1</Typography>
              <MoreVertIcon></MoreVertIcon>
            </div>
            <Typography className={classes.gridItemHead}>
              Heating and Facility Fuel Use
            </Typography>
            <p className={classes.paragraph}>
              Emissions from operation of assets (e.g vehicles and facilities)
              that are leased by the company.
            </p>
            <Typography className={classes.UpstramLeasesTxt}>
              3.8 Upstream Leased Assets{" "}
            </Typography>
          </Grid>
        </Grid>
        <PaginationPage/>
      </div>
    );
  }
}
export default withStyles(styles)(Testcomponent);
