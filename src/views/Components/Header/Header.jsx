import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import { Apps, CloudDownload } from "@material-ui/icons";
import CreateUserWrapped from "../Modal/createUser";
import LoginUserWrapped from "../Modal/createUser";
import FormDialog from "../formDialog/formDialog";

const styles = {
  root: {
    flexGrow: 1
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
      <AppBar position="static">
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
