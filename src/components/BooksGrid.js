import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
    marginLeft: '-15px'
  },
  table: {
    minWidth: 900
  }
});

const BooksGrid = props => {
  const books = props.books;
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ 'fontWeight': 'bold' }}>Title</TableCell>
              <TableCell align="center" style={{ 'fontWeight': 'bold' }}>Author</TableCell>
              <TableCell align="center" style={{ 'fontWeight': 'bold' }}>Format</TableCell>
              <TableCell align="center" style={{ 'fontWeight': 'bold' }}>Language</TableCell>
              <TableCell align="center" style={{ 'fontWeight': 'bold' }}>Publication Year</TableCell>
              <TableCell align="center" style={{ 'fontWeight': 'bold' }}>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow 
                key={book.id}
                hover
                role="checkbox"
                tabIndex={-1}
                onClick={ (event) => props.onClickRow(event, book) } 
              >
                <TableCell 
                  component="th"
                  scope="row">
                  {book.title}
                </TableCell>
                <TableCell align="center">{book.author}</TableCell>
                <TableCell align="center">{book.format}</TableCell>
                <TableCell align="center">{book.language}</TableCell>
                <TableCell align="center">{book.pubYear}</TableCell>
                <TableCell align="center">
                  <Rating value={book.rating} readOnly />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >
    </>
  );
}

export default BooksGrid;