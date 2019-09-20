import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router-dom';

const useStyles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundSize: '50%'
  },
};

export default class PokemonCard extends React.Component {
  state = {
    detailId: 0
  }

  showCard = () => {
    const idStr = this.props.data.id.toString();
    const pIdStr = '000'.substring(0, 3 - idStr.length) + idStr

    return (
      <Card style={useStyles.card}>
        <CardActionArea onClick={() => this.setState({detailId: this.props.data.id})}>
          <CardMedia
            style={useStyles.media}
            image={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pIdStr}.png`}
            title={this.props.data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.data.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>)
  }

  render() {
    return <Fragment>
      {this.state.detailId > 0 ?
        <Redirect to={`/${this.props.data.id}`}/> :
        this.showCard()}
      </Fragment>
  }
}