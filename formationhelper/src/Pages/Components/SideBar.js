import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles({
  sideList: {
    width: 250,
  },

});

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
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {currentList[side].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <div>
      <Fab onClick={toggleDrawer('left', true)}>
        L
      </Fab>
      <Fab onClick={toggleDrawer('right', true)}>
        R
      </Fab>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}