import React from 'react';
import Grid from '@material-ui/core/Grid'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';
import {getBookList} from '../../api/books';
import {BookCard} from '../../components/BookCard';

export class BookList extends React.PureComponent {
  state = {
    books: [],
    booksFiltered: [],
    filterValue: '',
    cartItems: []
  }

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     books: [],
  //     booksFiltered: [],
  //     filterValue: ''
  //   }

  //  this.onFilterChange = this.onFilterChange.bind(this);
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

  onCartClick = (book) => {
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
    const {booksFiltered, filterValue, cartItems} = this.state;

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField id="standard-basic" label="Filter Books" value={filterValue} onChange={this.onFilterChange}/>
          {/* <input type="text" value={filterValue} onChange={this.onFilterChange}></input> */}

          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </Grid>
        {
          booksFiltered.map(book => (
            <Grid key={book.id} item xs={12} md={6} lg={3}>
              <BookCard 
                key={book.id}
                book={book}
                className="book-list-item"
                onCartClick={this.onCartClick}
              />
            </Grid>
          ))
        }
      </Grid>
    )
  }
}