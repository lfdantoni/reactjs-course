import React, { PureComponent } from 'react'
import { Button, Icon, Grid, Paper } from '@material-ui/core';
import styles from './styles.module.css';


/**
 * Material icons: https://material.io/resources/icons/?style=baseline
 * Material UI Button: https://material-ui.com/components/buttons/
 * Material UI Icons: https://material-ui.com/components/icons/
 */

export default class Menu extends PureComponent {

  constructor(props) {
    super(props);

    this.menuItems = [
      {id: 'memes', label: 'Memes', icon: 'view_comfy'},
      {id: 'create-meme', label: 'Create Meme', icon: 'add_box'},
      {id: 'my-memes', label: 'My Memes', icon: 'perm_identity'}
    ];

    const defaultMenuId = this.props.defaultMenuId || 'memes';

    this.state = {
      activeMenu: this.menuItems.find(item => item.id === defaultMenuId)
    }
  }

  menuClick = (menuItem) => {
    if(this.props.menuChange && this.state.activeMenu.id !== menuItem.id) {
      this.props.menuChange(menuItem.id);
    }

    this.setState({activeMenu: menuItem});
  }

  getButtonColor = (menuItem) => {
    return menuItem.id === this.state.activeMenu.id ? 'secondary' : 'primary';
  }

  render() {
    return (
      <Paper elevation={3}>
        <Grid container spacing={3} justify="center" className={styles.grid}>
          <Grid item xs={3} className={styles.column}>
            <Button
              variant="contained"
              color={this.getButtonColor(this.menuItems[0])}
              onClick={() => this.menuClick(this.menuItems[0])}
              endIcon={<Icon className={styles['button-icon']}> {this.menuItems[0].icon} </Icon>}
            > {this.menuItems[0].label}
            </Button>
          </Grid>
          <Grid item xs={3} className={styles.column}>
            <Button
              variant="contained"
              color={this.getButtonColor(this.menuItems[1])}
              onClick={() => this.menuClick(this.menuItems[1])}
              endIcon={<Icon className={styles['button-icon']}>{this.menuItems[1].icon}</Icon>}
            > {this.menuItems[1].label}
            </Button>
          </Grid>
          <Grid item xs={3} className={styles.column}>
          <Button
              variant="contained"
              color={this.getButtonColor(this.menuItems[2])}
              onClick={() => this.menuClick(this.menuItems[2])}
              endIcon={<Icon className={styles['button-icon']}>{this.menuItems[2].icon}</Icon>}
            > {this.menuItems[2].label}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}
