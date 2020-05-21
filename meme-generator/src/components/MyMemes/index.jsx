import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

const MyMemes = ({myMemes}) => {
  return <Grid container spacing={2}>

      {myMemes.map(meme => {

        return <Grid item xs={12} lg={3} md={4} key={meme.id}>
          <img src={meme.memeUrl} alt={meme.memeUrl} style={{width: '100%'}}/>
        </Grid> 
      })}

    </Grid>
}

const mapStateToProps = (state) => {
  return {
    myMemes: state.user.memes
  }
}

export default connect(mapStateToProps)(MyMemes);
