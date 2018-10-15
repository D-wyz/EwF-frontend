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
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  root: {
    maxWidth: 350,
    margin: 20,
    display: "grid",
    justifycontent: "flex-end"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  challengeList: {
    maxWidth: "none",
    width: "100%"
  },
  fab: {
    margin: theme.spacing.unit * 2
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3
  }
});

class ChallengeList extends React.Component {
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
        <Card>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div" style={{ fontSize: "24px" }}>
                <Typography component="h1" variant="display1">
                  Challenges
                </Typography>
              </ListSubheader>
            }
          >
            <Button onClick={this.handleClick} href="http://www.google.com">
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText
                  inset
                  primary="Challenge 1"
                  style={{ width: 115 }}
                />
                <Tooltip title="Delete">
                  <IconButton aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add">
                  <IconButton aria-label="Add">
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
            </Button>

            <Button onClick={this.handleClick} href="http://www.google.com">
              <ListItem button>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText
                  inset
                  primary="Challenge 2"
                  style={{ width: 115 }}
                />
                <Tooltip title="Delete">
                  <IconButton aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add">
                  <IconButton aria-label="Add">
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
            </Button>
            <Button onClick={this.handleClick} href="http://www.google.com">
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText
                  inset
                  primary="Challenge 3"
                  style={{ width: 115 }}
                />
                <Tooltip title="Delete">
                  <IconButton aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add">
                  <IconButton aria-label="Add">
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
            </Button>
            {/* <ListItem button onClick={this.handleClick} /> */}
          </List>
        </Card>
      </div>
    );
  }
}

ChallengeList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChallengeList);
