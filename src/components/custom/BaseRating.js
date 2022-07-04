import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '20px',
    marginLeft: '10px',
    display: 'flex'
  }
});

const BaseRating = props => {
  const classes = useStyles();
  
  return (
    <Box component='div' borderColor='transparent' className={classes.root}>
      <Typography component='legend'>{props.label}</Typography>
      <Rating
        name={props.name}
        value={Number(props.value)}
        onChange={props.onChange}
        style= { { 'marginLeft' : '20px' } }
      />
    </Box>
  );
};

export default BaseRating;
