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
import Player from "./MusicPlayer/Player";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
  },
  list: {
      width: 240,
  },
  sideList: {
    width: 'auto',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref){
  return <Slide direction="up" ref={ref} {...props}/>;
});

export default function SideBar(danceInfo) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });
  const [showMusic, setShowMusic] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);
  const currentList = {'left':['Show/Hide Music','Show/Hide Pages', 'Change Basic Dance Info'], 
                       'right':['Default Formation', 'Copy previous formation', 'Change dots information',
                                'Settings']};

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const handleOnClick = (event) =>{
    let side = event.target.getAttribute('side');
    let index = event.target.getAttribute('index');
    if(side==='left'){
      if (index==='0'){
        setShowMusic(!showMusic);
      }else if (index === '2'){
        setShowInfo(!showInfo);
      }
    }
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
          <ListItem button key={text} index={index} side={side} onClick={handleOnClick}>
            {text}
          </ListItem>
        ))}
      </List>
    </div>
  );

  function handleInfoClose(){
    setShowInfo(false);
  }

  function changeInfo(){
    setShowInfo(false);
  }


  return (
  <div className={classes.root}>
      <Toolbar className="toolbar">
        <div>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
          <Drawer type="temporary" classes={{paper: classes.list}} open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
        </div>
        <div>
          {showMusic ? <Player/> : null}
        </div>
        <Dialog open={showInfo} TransitionComponent={Transition} keepMounted onClose={handleInfoClose}
                aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description" >
          <DialogTitle id="alert-dialog-slide-title">{"Change Basic Dance Info"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="dance-name-dialog">
              Dance Name:
            </DialogContentText>
            <TextField autoFocus margin="dense" id="name" label="Dance Name" type="dance name" value={danceInfo.danceName} fullWidth/>
            <DialogContentText id="dancer-number-dialog">
              Dancer Number:
            </DialogContentText>
            <TextField autoFocus margin="dense" id="number" label="Dancer Number" type="dancer number" value={danceInfo.dancerNumber} fullWidth/>
          </DialogContent>

          <DialogActions>
            <Button onClick={changeInfo}>Confirm</Button>
            <Button onClick={handleInfoClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
        <div>
          <IconButton className={classes.rightList} color="inherent" anchor="right" onClick={toggleDrawer('right', true)}>
            <MoreIcon />
          </IconButton>
          <Drawer type="temporary" classes={{paper: classes.list}} className={classes.rightList} anchor="right" open={state.right} onClose={toggleDrawer('right', false)} style={{ flex: 1 }}>
            {sideList('right')}
          </Drawer>
        </div>
      </Toolbar>
  </div>
  );
}