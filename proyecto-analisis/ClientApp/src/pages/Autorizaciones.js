import React, { Component } from 'react';
import AutorizacionesContent from "../components/AutorizacionesContent";

export class Autorizaciones extends Component {
    static displayName = Autorizaciones.name;

    render() {
        document.body.style = 'background: #e5dccf;';

        return (
            <AutorizacionesContent />
        );
    }
}
