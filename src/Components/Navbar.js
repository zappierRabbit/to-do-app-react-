import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        ></IconButton>
        <Typography variant="h6" className={classes.title}>
          To-Do App
        </Typography>
        <NavLink to="/addTask" className={classes.menuButton} style={{color: "white"}}>Add Task</NavLink>
        <NavLink to="/" style={{color: "white"}}>Tasks</NavLink>
      </Toolbar>
    </AppBar>
  );
};


export default Navbar;