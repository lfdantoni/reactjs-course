import React, { PureComponent } from 'react'
import { Icon, Grid, Paper, withTheme } from '@material-ui/core';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';


/**
 * Material icons: https://material.io/resources/icons/?style=baseline
 * Material UI Button: https://material-ui.com/components/buttons/
 * Material UI Icons: https://material-ui.com/components/icons/
 */

class Menu extends PureComponent {

  constructor(props) {
    super(props);

    this.menuItems = [
      {id: 'memes', label: 'Memes', icon: 'view_comfy'},
      {id: 'create-meme', label: 'Create Meme', icon: 'add_box'},
      {id: 'my-memes', label: 'My Memes', icon: 'perm_identity'}
    ];

    this.activeLinkStyle = {
      color: this.props.theme.palette.secondary.light
    }

    this.linkStyle = {
      color: this.props.theme.palette.text.primary
    }
  }

  render() {
    return (
      <Paper elevation={3}>
        <Grid container spacing={3} justify="center" className={styles.grid}>
          <Grid item xs={3} className={styles.column}>
            <NavLink to={"/" + this.menuItems[0].id}
              style={this.linkStyle}
              activeStyle={this.activeLinkStyle}>

              {this.menuItems[0].label}
              {<Icon className={styles['button-icon']}> {this.menuItems[0].icon} </Icon>}
            </NavLink>
          </Grid>
          <Grid item xs={3} className={styles.column}>
            <NavLink to={"/" + this.menuItems[1].id}
              style={this.linkStyle}
              activeStyle={this.activeLinkStyle}>

              {this.menuItems[1].label}
              {<Icon className={styles['button-icon']}> {this.menuItems[1].icon} </Icon>}
            </NavLink>
          </Grid>
          <Grid item xs={3} className={styles.column}>
            <NavLink to={"/" + this.menuItems[2].id}
              style={this.linkStyle}
              activeStyle={this.activeLinkStyle}>

              {this.menuItems[2].label}
              {<Icon className={styles['button-icon']}> {this.menuItems[2].icon} </Icon>}
            </NavLink>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withTheme(Menu);
