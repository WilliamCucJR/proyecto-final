import React, { Component } from 'react';
import ComprasContent from "../components/ComprasContent";

export class Compras extends Component {
    static displayName = Compras.name;

    render() {
        document.body.style = 'background: #e5dccf;';

        return (
            <ComprasContent />
        );
    }
}
