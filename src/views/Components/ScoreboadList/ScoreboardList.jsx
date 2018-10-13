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
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  challengeList: {
    maxWidth: "none",
    width: "100%"
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
      <div style={{ marginLeft: 1030 }} className={classes.root}>
        <Paper>
          <Card>
            <List
              component="nav"
              subheader={
                <ListSubheader component="div" style={{ fontSize: "24px" }}>
                  <Typography
                    fontWeightRegular="400"
                    component="h1"
                    variant="display1"
                    gutterBottom
                    style={{ borderBottom: "solid 1px", marginTop: "30px" }}
                  >
                    ScoreBoard
                  </Typography>
                </ListSubheader>
              }
              style={{
                maxWidth: "100%",
                maxwidth: "100%",
                fontSize: "bold 24px"
              }}
            >
              <Button onClick={this.handleClick} href="http://www.google.com">
                <ListItem button onClick={this.handleClick}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Score 1" />
                </ListItem>
              </Button>
              <Button onClick={this.handleClick} href="http://www.google.com">
                <ListItem button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Score 2" />
                </ListItem>
              </Button>
              <Button onClick={this.handleClick} href="http://www.google.com">
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
