import React, {Component, Fragment} from "react";
import Hijo from "./Hijo";

export default class Padre extends Component {
    necesitaPlata(cantidad) {
        console.log('Mi hijo me pide $', cantidad);
    }

    render() {
        return (<Fragment>
            <h1>
                Padre
            </h1>
            <Hijo necesitoPlata={this.necesitaPlata} plata={4}/> 
        </Fragment>)
    }
}