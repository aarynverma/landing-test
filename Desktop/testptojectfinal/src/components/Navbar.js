import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Steps.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#120E43",
  },
  title: {
    flexGrow: 1,
    color: "#120E43",
  },
  secondary: {
    marginLeft: 10,
    marginRight: 20,
    color: "#120E43",
  },
  bgcolor: { backgroundColor: "transparent" },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={`${classes.root} p-5`}>
      <AppBar position="static">
        <Toolbar className={classes.bgcolor}>
          <Typography variant="h6" className={classes.title}>
            Medical
          </Typography>
          <Typography className={classes.secondary}>What is PRP |</Typography>
          <Typography className={classes.secondary}>What is fue |</Typography>
          <Typography className={classes.secondary}>All About</Typography>
          <Button color="#120E43">Sign up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
