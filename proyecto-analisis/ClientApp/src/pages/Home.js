import React, { Component } from 'react';
import HomeContent from "../components/HomeContent";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        document.body.style = 'background: #e5dccf;';

        return (
            <HomeContent />
        );
    }
}
