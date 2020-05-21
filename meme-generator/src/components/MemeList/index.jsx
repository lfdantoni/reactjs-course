import React, { PureComponent } from 'react';
import { Grid } from '@material-ui/core';
import mockData from '../../mock_data';
import { Link } from 'react-router-dom';
import { listMemes } from '../../actions/memes';
import { connect } from 'react-redux';

class MemeList extends PureComponent {
  componentDidMount() {
    this.props.listMemes(mockData.data.memes);
  }

  getLoadingView() {
    return <h2>Loading...</h2>
  }

  getMemeListView() {
    return <Grid container spacing={2}>

      {this.props.memes.map(meme => {

        return <Grid item xs={12} lg={3} md={4} key={meme.id}>

          <Link to={"/create-meme/"+meme.id}>
            Title: {meme.name}
            <br/>
            <img src={meme.url} alt={meme.name} style={{width: '100%'}}/>
            <br/>
          </Link>

        </Grid> 
      })}

    </Grid>
  }

  render() {
    return this.props.memes.length === 0 ? this.getLoadingView() : this.getMemeListView();
  }
}

const mapStateToProps = (state) => {
  return {
    memes: state.memes.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // listMemes: (memes) => { setTimeout( () => dispatch(listMemes(memes)), 10000) } // To simulate loading
    listMemes: (memes) => { dispatch(listMemes(memes)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemeList);