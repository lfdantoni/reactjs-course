import React, { PureComponent, Fragment } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import dataMock from '../../mock_data';

export default class CreateMeme extends PureComponent {
  state = {
    text1: '',
    text2: ''
  }

  getSelectMemeView = () => {
    return <Grid item xs={12} className={styles["select-meme"]}>
      Select a meme on <Link to="/memes">Memes Section</Link>
    </Grid>
  }

  createMeme = () => {
    console.log("Create Meme");
  }

  getCreateMemeView = () => {
    const meme = dataMock.data.memes.find(m => m.id === this.props.match.params.id.toString());

    return <Fragment>
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

  render() {
    return (
      <Grid container spacing={2}>
        {this.props.match.params.id ? this.getCreateMemeView() : this.getSelectMemeView()}
      </Grid>
    )
  }
}