import React, {Component, Fragment} from "react";

export default class Hijo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidad: props.plata
        }

        this.pedirPlata = this.pedirPlata.bind(this);
    }

    pedirPlata() {
        this.setState((state) =>
            ({
                cantidad: state.cantidad - 1
            }),
            this.avisarAPapa
        );
    }

    avisarAPapa() {
        console.log('Hijo tiene: ', this.state.cantidad);
        if(this.state.cantidad === 0) {
            this.props.necesitoPlata(10) // UPLIFTING
        }
    }

    render() {
        return (<Fragment>
            <h1>
                Hijo ${this.state.cantidad}
            </h1>
            <button onClick={this.pedirPlata}>Gastar plata</button>
        </Fragment>)
    }
}