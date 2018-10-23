import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card/Card";
import StarBorder from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import Paper from "@material-ui/core/Paper/Paper";

const styles = theme => ({
  root: {
    margin: 20,
    maxWidth: 350,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },

  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 6px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: "2px",
    width: "342px"
  }
});

class ScoreboardList extends React.Component {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper>
          <Card>
            <List
              component="nav"
              subheader={
                <ListSubheader component="div" style={{ fontSize: "24px" }}>
                  <Typography
                    component="h1"
                    variant="display1"
                    gutterBottom
                    style={{ borderBottom: "solid 1px", marginTop: "30px" }}
                  >
                    ScoreBoards
                  </Typography>
                </ListSubheader>
              }
            >
              <Button
                onClick={this.handleClick}
                className={classes.button}
                href="http://www.google.com"
              >
                <ListItem button onClick={this.handleClick}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Score 1" />
                </ListItem>
              </Button>
              <Button
                onClick={this.handleClick}
                className={classes.button}
                href="http://www.google.com"
              >
                <ListItem button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Score 2" />
                </ListItem>
              </Button>
              <Button
                onClick={this.handleClick}
                className={classes.button}
                href="http://www.google.com"
              >
                <ListItem button onClick={this.handleClick}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Score 3" />
                </ListItem>
              </Button>
              {/* <ListItem button onClick={this.handleClick} /> */}
            </List>
          </Card>
        </Paper>
      </div>
    );
  }
}

ScoreboardList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScoreboardList);
