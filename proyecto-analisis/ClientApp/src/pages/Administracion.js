import React, { Component } from 'react';
import AdministracionContent from "../components/AdministracionContent";

export class Administracion extends Component {
    static displayName = Administracion.name;

    render() {
        document.body.style = 'background: #e5dccf;';

        return (
            <AdministracionContent />
        );
    }
}
