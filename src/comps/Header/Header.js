import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import usestyles from "./style";
//import Image from "../1624.jpg"
import SearchIcon from '@material-ui/icons/Search';
//import Divider from '@mui/material/Divider';
import Avatar from "@material-ui/core/Avatar";

import {
  Button,
  IconButton,
  InputBase,
  Paper,
  Typography,
  Tooltip
} from "@material-ui/core";

const Header = (currentUser) => {
  //  const Signinwithfirebase = () => {
  //    var google_provider = new firebase.auth.GoogleAuthProvider();
  //     firebase
  //      .auth()
  //      .signInWithPopup(google_provider)
  //      .then((re) => {
  //        console.log(re);
  //      })
  //      .catch((err) => {
  //        console.log(err);
  //      });
  //};
  const classes = usestyles();

  return (
    <>
      <AppBar position="Static" className={classes.container}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.topLeft}>
            
            <Typography variant="h6" className={classes.space}>
              Photos
            </Typography>
            
          </div>
          <div>
            <Typography variant="h3" className={classes.font}>
              Project-Gallery
            </Typography>
          </div>

          <div className={classes.topRight}>
            <IconButton>
              <Button
                variant="outlined"
                color="secondary"
                // onClick={Signinwithfirebase}
              >
                Sign in
              </Button>
            </IconButton>

            <Avatar
              alt="Remy Sharp"
              src="https://randomuser.me/api/portraits/men/4.jpg"
            />
            <Tooltip title={currentUser.displayName}>
              <Avatar
                alt={currentUser.displayName}
                src={currentUser.photoURL}
              />
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>

      <br />
      <div className={classes.color}>
        <div>
          <br />
          <Typography variant="h3" align="center" className={classes.hello}>
            Graphic project for Group-A.
          </Typography>
        </div>
        <br />
        <div>
          <Typography variant="h6" align="center">
            Graphical way to connect.
          </Typography>
        </div>
        <br />
        <div align="center" className={classes.display}>
          <Paper elevation={3} className={classes.field}>
            <InputBase placeholder="Search All Resources" />

            <IconButton className={classes.icon}>
              <SearchIcon color="action" />
            </IconButton>
          </Paper>
          <br />
        </div>
      </div>
    </>
  );
};

export default Header;
