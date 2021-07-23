import React from 'react';
 
class LoginForm extends React.Component {
    render() {
        return (
            <form id="login-form">
                <input className="input-auth" type="text" placeholder="Username" id="username" />
                <input className="input-auth" type="password" placeholder="Password" id="password" />
                <button className="btn-primary" type="button" id="login-btn">Log in</button>
            </form>
        );
    }
}

export default LoginForm;