import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import SearchBar from './custom/SearchBar';
import BooksGrid from './BooksGrid';
import BookPanel from './BookPanel';

const axios = require('axios');
const baseUrl = 'http://localhost:3001/books';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1),
    justifyContent: 'space-between',
    marginBottom: '30px',
    width: '100%'
  }
}));

const getUniqueListBy = (arr, key) => {
  return [...new Map(arr.map(item => [item[key], item])).values()]
}

const BookSearchPanel = props => {
  const classes = useStyles();
  const [searchText, setSearchText] = React.useState('');
  const [listBooks, setListBooks] = React.useState([]);

  /*book panel*/
  const [book, setBook] = React.useState({});
  const [bookPanel, setBookPanel] = React.useState(false);

  const handleRowClick = (event, book) => {
    setBook(book);
    setBookPanel(true);
  };

  const handleOnClose = async () => {
    setBookPanel(false);
    await getBooks();
  }
  // end 

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyActions = async (ev) => {
    if (ev.key === 'Enter') {
      await getBooks();
    }
  };

  const getBooks = async () => {
    const [booksByTitle, booksByAuthor]  =  await Promise.all([
      axios.get(`${baseUrl}?title_like=${searchText}`),
      axios.get(`${baseUrl}?author_like=${searchText}`)]);
    setListBooks( getUniqueListBy([ ...booksByTitle.data, ...booksByAuthor.data ], 'id') );
  };
  
  const handleBookDelete = async() => {
    handleOnClose();
  };

  return (
    <Container className={classes.root}>
      <SearchBar
        placeholder='Search by Title or Author ...'
        title='Book Search'
        onChange={handleChange}
        onKeyDown={handleKeyActions}
      />
      <BooksGrid books={listBooks} onClickRow={handleRowClick}/>
      <SwipeableDrawer
        anchor='right'
        open={bookPanel}
        onClose={handleOnClose}
      >
        <BookPanel book={book} title='Book' onDelete={handleBookDelete} onSave={getBooks}/>
      </SwipeableDrawer>
    </Container>
  );
};

export default BookSearchPanel;