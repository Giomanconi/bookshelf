import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/Textfield';
import BaseSelect from './custom/BaseSelect';
import BaseInput from './custom/BaseInput';
import Container from '@material-ui/core/Container';
import BaseRating from './custom/BaseRating';
import { formats, languages } from '../helpers/enums';

const useStyles = makeStyles((theme) => ({
  formBook: {
    '& > *': {
      margin: '10px auto 10px auto',
      width: 600
    },
  },
}));


const BookForm = props => {
  const classes = useStyles();
  const [titleEmpty, setTitleEmpty] = React.useState(false);
  const [authorEmpty, setAuthorEmpty] = React.useState(false);

  const handleTitleBlur = (event) => {
    event.target.value !== '' ? setTitleEmpty(false) : setTitleEmpty(true);
  }

  const handleAuthorBlur = (event) => {
    event.target.value !== '' ? setAuthorEmpty(false) : setAuthorEmpty(true);
  }

  return (
    <Container maxWidth='md'>
      <form className={classes.formBook} noValidate autoComplete='off'>
        <BaseInput
          title='Title *'
          name='title'
          value={props.book.title}
          onChange={props.onChange}
          maxLength={100}
          onBlur={handleTitleBlur}
          error={titleEmpty}
        />
        <BaseInput
          title='Author *'
          name='author'
          value={props.book.author}
          onChange={props.onChange}
          maxLength={100}
          onBlur={handleAuthorBlur}
          error={authorEmpty}
        />
        <BaseSelect
          label='Format'
          items={formats}
          name='format'
          value={props.book.format}
          onChange={props.onChange}
        />
        <BaseSelect
          label='Languages'
          items={languages}
          name='language'
          value={props.book.language}
          onChange={props.onChange}
        />
        <BaseInput
          title='Publication Year'
          name='pubYear'
          value={props.book.pubYear}
          onChange={props.onChange}
          maxLength={4}
        />
        <TextField
          id='outlined-multiline-static'
          label='Description'
          multiline
          rows={8}
          variant='outlined'
          name='description'
          value={props.book.description.replace(/\s{2,10}/g, ' ')}
          onChange={props.onChange}
        />
        <BaseRating
          label='Rating'
          name='rating'
          value={props.book.rating}
          onChange={props.onChange}
        />
      </form>
    </Container>
  );
};

export default BookForm;
