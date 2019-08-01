import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import "../CSS/SideBar.css"


const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
  },
  list: {
      maxHeight: 240,
  },
  menuButton: {
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2)
  },
  sideList: {
    width: 'auto',
  },
  rightList: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    position: 'absolute',
    right: 0,
    top: 0
  }
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });
  const currentList = {'left':['Show/Hide Music','Show/Hide Pages', 'Change Dance Name', 'Change Dancer Number'], 
                       'right':['Default Formation', 'Copy previous formation', 'Change dots information',
                                'Settings']};

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
      style={{maxHeight: 360}}
    >
      <List component="nav" aria-label="main mailbox folders">
        {currentList[side].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
  <div className={classes.root}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDrawer('left', true)}>
          <MenuIcon />
        </IconButton>
        <Drawer type="temporary" classes={{paper: classes.list}} open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
        </Drawer>

        <IconButton className={classes.rightList} color="inherent" anchor="right" onClick={toggleDrawer('right', true)}>
          <MoreIcon />
        </IconButton>
        <Drawer type="temporary" classes={{paper: classes.list}} className={classes.rightList} anchor="right" open={state.right} onClose={toggleDrawer('right', false)} style={{ flex: 1 }}>
          {sideList('right')}
        </Drawer>
      </Toolbar>
  </div>
  );
}