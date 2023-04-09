import React, { Component } from 'react';
import LoginForm from "../components/LoginForm";

export class Login extends Component {
    static displayName = Login.name;

    render() {
        document.body.style = 'background: #e5dccf;';

        return (
            <LoginForm />
        );
    }
}
