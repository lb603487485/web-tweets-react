import React from 'react';
 
class LoginForm extends React.Component {

    state = {
        username: '',
        password: '',
        logined: false,
        success: false,
    }

    handleFormUpdate = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLoginRequest = async () => {
        const success = await this.props.logInRequestAsync(this.state);
        console.log(success);
        if (!success){
            this.setState({
                logined: true,
                success: false,
            });
        }
        
    }

    render() {
        if (this.state.success) {
            return (<div>Good</div>);
        } else {
            return (
                <form id="login-form">
                    <input className="input-auth" type="text" placeholder="Username" name="username" onChange={this.handleFormUpdate} required/>
                    <input className="input-auth" type="password" placeholder="Password" name="password" onChange={this.handleFormUpdate} required/>
                    {this.state.logined && !this.state.success && <p className='input-auth login-fail'>Username or Password is not correct.</p>}
                    <button className="btn-primary" type="button" id="login-btn" onClick={this.handleLoginRequest} 
                    disabled={this.state.username && this.state.password ? '' : 'disabled'}>Log in</button>
                </form>
            );
        }
    }
}

export default LoginForm;