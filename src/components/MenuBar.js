import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Button } from '@material-ui/core';
import EuroIcon from '@material-ui/icons/EuroSymbol';
import GroupIcon from '@material-ui/icons/Group';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    profileMenuOpen: false,
    genericMenuOpen: false,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleProfileMenu = event => {
    this.setState({ anchorEl: event.currentTarget, profileMenuOpen: true });
  };

  handleGenericMenu = event => {
    this.setState({ anchorEl: event.currentTarget, genericMenuOpen: true });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, profileMenuOpen:false, genericMenuOpen:false });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl, profileMenuOpen, genericMenuOpen } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Playground Amersfoort
            </Typography>

          <Button variant="contained" color="inherit" className={classes.button}>
            <GroupIcon
           className={classes.rightIcon} />
           19
          </Button>

          <Button variant="contained" color="inherit" className={classes.button}>
            <ThumbUpIcon
           className={classes.rightIcon} />
           235
          </Button>

          <Button variant="contained" color="inherit" className={classes.button}>
            <EuroIcon
           className={classes.rightIcon} />
           53.60
          </Button>


            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'profile-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="profile-menu"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={profileMenuOpen}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem onClick={this.handleClose}>Log out</MenuItem>
                </Menu>
              </div>
            )}

              <div>
                <IconButton
                  aria-owns={open ? 'general-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleGenericMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="general-menu"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={genericMenuOpen}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
                  <MenuItem onClick={this.handleClose}>Audit trail</MenuItem>
                </Menu>
              </div>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);