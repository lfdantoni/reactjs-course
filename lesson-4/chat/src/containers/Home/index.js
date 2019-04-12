import React, {Component} from 'react';
import { Grid } from "@material-ui/core";
import Messages from '../Messages';
import RichInput from '../RichInput';


export default class Home extends Component {
    render() {
        return <Grid container spacing={0}>
            <Grid item xs={12}>
                <Messages />
            </Grid>
            <Grid item xs={12}>
                <RichInput />
            </Grid>
        </Grid>
    }
}