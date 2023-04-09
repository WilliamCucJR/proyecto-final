import React, { Component } from 'react';
import BodegaContent from "../components/BodegaContent";

export class Bodega extends Component {
    static displayName = Bodega.name;

    render() {
        document.body.style = 'background: #e5dccf;';

        return (
            <BodegaContent />
        );
    }
}
