import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './others/Nav';
import SignUpForm from './forms/SignUpForm';
import TweetList from './tweets/TweetList';
import { connect } from 'react-redux';

class SignupPage extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="col-2of5 bg-white profile user-auth">
                        <h3>Log in to Web Tweet</h3>
                        <SignUpForm signUpRequest={this.props.signUpRequest}/>
                        <h6 className="">Have an account? <Link to="/login">Log in</Link></h6>  
                    </div>
                    <div className="col-3of5 bg-white">
                        <TweetList />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispath = ({user: { signUpRequest }}) => ({
    signUpRequest: (data) => signUpRequest(data),
});

export default connect(null, mapDispath)(SignupPage);
