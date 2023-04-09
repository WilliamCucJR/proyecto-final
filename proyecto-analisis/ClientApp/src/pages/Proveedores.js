import React, { Component } from 'react';
import ProveedoresContent from "../components/ProveedoresContent";

export class Proveedores extends Component {
    static displayName = Proveedores.name;

    render() {
        document.body.style = 'background: #e5dccf;';

        return (
            <ProveedoresContent />
        );
    }
}
