import React from 'react';
 
class SignUpForm extends React.Component {
    render() {
        return (
            <form id="signup-form">
                <input class="input-auth" type="text" placeholder="Username" id="username" />
                <input class="input-auth" type="password" placeholder="Password" id="password" />
                <input class="input-auth" type="password" placeholder="Repeat password" id="repeat-password" />
                <button class="btn-primary" type="button" id="signup-btn">Sign up</button>
            </form>
        );
    }
}

export default SignUpForm;