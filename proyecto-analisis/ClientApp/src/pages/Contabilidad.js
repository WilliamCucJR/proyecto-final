import React, { Component } from 'react';
import ContabilidadContent from "../components/ContabilidadContent";

export class Contabilidad extends Component {
    static displayName = Contabilidad.name;

    render() {
        document.body.style = 'background: #e5dccf;';

        return (
            <ContabilidadContent />
        );
    }
}
