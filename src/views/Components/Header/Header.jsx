import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FormDialog from "../formDialog/formDialog";

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "red"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "indigo" }}>
        <Toolbar>
          <Typography
            variant="display1"
            color="inherit"
            className={classes.grow}
          >
            Class Project
          </Typography>
          <FormDialog />
          {/* <LoginUserWrapped /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
