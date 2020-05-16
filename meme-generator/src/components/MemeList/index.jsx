import React from 'react';
import { Grid } from '@material-ui/core';
import mockData from '../../mock_data';
import { Link } from 'react-router-dom';

export default function MemeList() {
  return <Grid container spacing={2}>
    {mockData.data.memes.map(meme => {
      return <Grid item xs={12} lg={3} md={4}  key={meme.id}>
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