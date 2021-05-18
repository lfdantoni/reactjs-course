import React from 'react'
import { getBookList } from '../../api/books'
import { BookCard } from '../../components/BookCard/BookCard'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

// export const BookList = () => {
// export class BookList extends React.Component {
export class BookList extends React.PureComponent {
  state = {
    book: [],
    booksFiltered: [],
    filterValue: '',
    cartItems: [],
  }

  onFilterChange = (event) => {
    console.log(event.target.value);
    const currentValue = event.target.value;

    this.setState({
      filterValue: currentValue,
    })
  }

  componentDidMount() {
    const books = getBookList();

    this.setState({
      books,
      booksFiltered: books,
    })
  }

  onCartClick = (book) => {
    console.log('cart clicked', book)
    const {cartItems} = this.state;

    // Children components have the same parent Pure component behaviour
    // If a parent component is PureComponent and its child is Component
    // the child one will not update every time
    // cartItems.push(book);

    this.setState({
      cartItems: cartItems.concat(book)
      // cartItems
    })
  }

  render() {
    // const book = {id: 75675}
    const {filterValue, booksFiltered} = this.state;
    // const books = getBookList();

    // if(booksFiltered.length) booksFiltered.forEach(book => book.random = Date.now())
    // const booksWithRandom = booksFiltered.map(book => ({...book, random: Date.now()}))

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField id="standard-basic" label="Filter Books" value={filterValue} onChange={this.onFilterChange}/>
          {/* <input type="text" value={filterValue} onChange={this.onFilterChange}></input> */}
        </Grid>
        {booksFiltered.map(book => (
          <Grid key={book.id} item xs={12} md={6} lg={3}>
            <BookCard key={book.id} book={book} onCartClick={this.onCartClick}/>
          </Grid>
        ))}
      </Grid>
    )
  }
}
