import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BaseSnackbar from './custom/BaseSnakbar';
import BaseDialog from './custom/BaseDialog';
import BookForm from './BookForm';
const axios = require('axios');
const path = 'http://localhost:3001/books/';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(0),
    justifyContent: 'space-between',
    marginBottom: '30px',
    width: '60%'
  },
  titleBar: {
    width: '650px',
    position: 'sticky'
  }
}));

const BookPanel = props => {
  const classes = useStyles();
  const initialState = {
    title: '',
    format: '',
    author: '',
    language: '',
    pubYear: '',
    description: '',
    rating: 0
  };

  const [book, setBook] = React.useState(props.book || initialState);
  const [openDialog, setOpenDialog] = React.useState(false);
 
  /*Snackbar logic*/
  const [snackPack, setSnackPack] = React.useState([]);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setMessageInfo({ ...snackPack[0] });
      setSnackPack(prev => prev.slice(1));
      setOpenSnackbar(true);
    } else if (snackPack.length && messageInfo && openSnackbar) {
      setOpenSnackbar(false);
    }
  }, [snackPack, messageInfo, openSnackbar]);

  const handleExited = () => {
    setMessageInfo(undefined);
  };
  
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  /*Diaglog logic*/
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleChange = (event) => {
    setBook(prevState => (
      {
        ...prevState,
        [event.target.name]: event.target.value
      }
    ));
  };

  const handleAddClick = async() => {
    await axios.post(path, book);
    const message = 'Record has been successfully added.';
    setSnackPack(prev => [...prev, { message, key: new Date().getTime() }]);
    setBook(initialState);
  }

  const handleSaveClick = async() => {
    await axios.patch(`${path}${book.id}`, book);
    const message = 'Record has been successfully updated.';
    setSnackPack(prev => [...prev, { message, key: new Date().getTime() }]);
  }

  const handleDeleteClick = async() => {
    await axios.delete(`${path}${book.id}`, book);
    setOpenDialog(false);
    const message = 'Record has been successfully removed.';
    setSnackPack(prev => [...prev, { message, key: new Date().getTime() }]);
    props.onDelete();
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.titleBar}>
        <Toolbar>
          <Typography variant="h6">{props.title}</Typography>
        </Toolbar>
      </AppBar>

      <BookForm book={book} onChange={handleChange} />
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding='30px'
       >
        <Button
          variant='contained'
          color='primary'
          onClick={handleAddClick}
          style={ { 'display' : props.book ? 'none' : 'inherit' } }
          disabled={!book.title || !book.author} >
          Add
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={handleSaveClick}
          style={ { 'display' : props.book ? 'inline': 'none', 'margin': '0 20px 0 0' } }
          disabled={!book.title || !book.author} >
            Save
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={handleClickOpen}
          style={ { 'display' : props.book ? 'inline': 'none' } }
          disabled={!book.id} >
            Delete
        </Button>
      </Box>
      <BaseDialog
        open={openDialog}
        title='Delete Record'
        description='Do you really want to delete this record?'
        onClose={handleClose}
        onConfirm={handleDeleteClick}
      />
      <BaseSnackbar
        open={openSnackbar}
        message={messageInfo ? messageInfo.message : undefined}
        severity='success'
        onClose={handleSnackbarClose}
        onExited={handleExited}
      />
    </div>
  );
};

export default BookPanel;
