import React from 'react';
 
class SignUpForm extends React.Component {
    state = {
        username: '',
        password: '',
        comfirmPassword: '',
        different: false,
        success: true,
    }

    handleFormUpdate = e => {
        this.setState({
            [e.target.name]: e.target.value,
            different: false,
            success: true,
        });
    }

    handleSignUpBtn = async () => {
        console.log(this.state);
        if (this.state.password === this.state.comfirmPassword) {
            console.log('signing up');
            try {
                const success = await this.props.signUpRequest({ username: this.state.username, password: this.state.password,});
                if (success) {
            
                } else { this.setState({ success: false });}
            } catch (err) { console.log(err); }
            
        } else { this.setState({ different: true }); }
    }

    render() {
        return (
            <form id="signup-form">
                <input className="input-auth" type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleFormUpdate}/>
                <input className="input-auth" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleFormUpdate}/>
                <input className="input-auth" type="password" placeholder="Repeat password" name="comfirmPassword" value={this.state.comfirmPassword} onChange={this.handleFormUpdate}/>
                {this.state.different && <p className="signup-fail input-auth"> Passwords do not match.</p>}
                {!this.state.success && <p className="signup-fail">The given username is already registered</p>}
                <button className="btn-primary" type="button" id="signup-btn" onClick={this.handleSignUpBtn}
                disabled={this.state.username && this.state.password ? '' : 'disabled'}>Sign up</button>
            </form>
            
        );
    }
}

export default SignUpForm;