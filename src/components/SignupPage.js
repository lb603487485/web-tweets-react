import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import SignUpForm from './SignUpForm';
import TweetList from './TweetList';

class SignupPage extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="col-2of5 bg-white profile user-auth">
                        <h3>Log in to Web Tweet</h3>
                        <SignUpForm />
                        <h6 class="">Have an account? <Link to="/login">Log in</Link></h6>  
                    </div>
                    <div className="col-3of5 bg-white">
                        <TweetList />
                    </div>
                </div>
            </div>
        );
    }

}

export default SignupPage;
