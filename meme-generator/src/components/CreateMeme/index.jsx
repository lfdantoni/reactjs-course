import React, { PureComponent, Fragment } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import styles from './styles.module.css';
import { setSelectedMeme } from '../../actions/memes';
import { connect } from 'react-redux';
import { addMeme } from '../../actions/user';
import * as memesApi from '../../apis/memes.api';

class CreateMeme extends PureComponent {
  state = {
    text1: '',
    text2: '',
    redirectToList: false,
    isCreating: false
  }

  getSelectMemeView = () => {
    return <Grid item xs={12} className={styles["select-meme"]}>
      Select a meme on <Link to="/memes">Memes Section</Link>
    </Grid>
  }

  createMeme = () => {
    this.setState({isCreating: true});

    memesApi.createMeme(this.props.meme.id, this.state.text1, this.state.text2)
      .then(data => {
        console.log(data);
        this.props.createMeme(data.data.url);
        this.setState({redirectToList: true})
      })
  }

  getCreateMemeView = () => {
    const {meme} = this.props;

    return this.state.redirectToList ?  <Redirect to="/my-memes" /> :
    
    !meme ? <h2> Loading... </h2> :

    this.state.isCreating ? <h2> Creating... </h2> :

    <Fragment>
      <Grid item xs={5} className={styles["input-wrapper"]}>
        <TextField
          id="text1"
          label="Text 1"
          fullWidth
          value={this.state.text1}
          onChange={event => this.setState({text1: event.target.value})}/>
      </Grid>
      <Grid item xs={5} className={styles["input-wrapper"]}>
        <TextField
          id="text2"
          label="Text 2"
          fullWidth
          value={this.state.text2}
          onChange={event => this.setState({text2: event.target.value})}/>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={this.createMeme} color="primary" variant="contained">Create Meme</Button>
      </Grid>
      <Grid item xs={12} className={styles["input-wrapper"]}>
        <img src={meme.url} alt={meme.name}/>
      </Grid>
    </Fragment>
  }

  componentDidMount() {
    const {id} = this.props.match.params;

    if (id) {
      // because there is no get meme by id endpoint
      memesApi.getMeme()
        .then(data => {
          const meme = data.data.memes.find(m => m.id === id.toString());
          this.props.setSelectedMeme(meme);
        })
    }
  }

  render() {
    return (
      <Grid container spacing={2}>
        {this.props.match.params.id ? this.getCreateMemeView() : this.getSelectMemeView()}
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    meme: state.memes.selectedMeme
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedMeme: (meme) => { dispatch(setSelectedMeme(meme)) },
    createMeme: (memeUrl) => { dispatch(addMeme(memeUrl)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeme);
