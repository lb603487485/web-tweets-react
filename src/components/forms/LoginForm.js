import React from 'react';
import axios from 'axios';
import {BASE_URL} from '../../config';
 
class LoginForm extends React.Component {

    state = {
        username: '',
        password: '',
    }

    handleFormUpdate = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLoginRequest = () => {
        // let that = this;
        axios.post(`${BASE_URL}/auth/login`, this.state)
            .then((res) => {
                console.log(res);
            })
    }

    render() {
        return (
            <form id="login-form">
                <input className="input-auth" type="text" placeholder="Username" name="username" onChange={this.handleFormUpdate}/>
                <input className="input-auth" type="password" placeholder="Password" name="password" onChange={this.handleFormUpdate}/>
                <button className="btn-primary" type="button" id="login-btn" onClick={this.handleLoginRequest}>Log in</button>
            </form>
        );
    }
}

export default LoginForm;