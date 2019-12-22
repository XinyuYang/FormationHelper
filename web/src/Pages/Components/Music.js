import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from "@material-ui/core/Button";
// import AudioSpectrum from 'react-audio-spectrum'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: 840,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(2),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControl() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card}>
      <Grid className={classes.details} container justify="space-between">
        <Grid item>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Perfect
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Leo Li
            </Typography>
          </CardContent>
        </Grid>
        <Grid item className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
          <Button variant="contained" color="primary">Load Music</Button>
        </Grid>
      </Grid>
    </Card>
  );
}
