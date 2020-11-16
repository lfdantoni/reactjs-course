import React from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import {getBookList} from '../../api/books';
import {BookCard} from '../../components/BookCard';

import './book-list.css'

export class BookList extends React.Component {
  state = {
    books: [],
    booksFiltered: [],
    filterValue: ''
  }

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     books: [],
  //     booksFiltered: [],
  //     filterValue: ''
  //   }

    // this.onFilterChange = this.onFilterChange.bind(this);
  // }

  onFilterChange = (event) => {
    console.log(event.target.value);
    const currentValue = event.target.value;
    const {books} = this.state;

    const booksFiltered = books.filter(book => book.title.toLowerCase().startsWith(currentValue.toLowerCase()));

    this.setState({
      booksFiltered,
      filterValue: currentValue
    });
  }

  componentDidMount = () => {
    const books = getBookList();

    this.setState({
      books,
      booksFiltered: books
    })
  }

  render() {
    const {booksFiltered, filterValue} = this.state;

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField id="standard-basic" label="Filter Books" value={filterValue} onChange={this.onFilterChange}/>
          {/* <input type="text" value={filterValue} onChange={this.onFilterChange}></input> */}
        </Grid>
        {
          booksFiltered.map(book => (
            <Grid key={book.id} item xs={12} md={6} lg={3}>
              <BookCard 
                key={book.id}
                book={book}
                className="book-list-item"
              />
            </Grid>
          ))
        }
      </Grid>
    )
  }
}