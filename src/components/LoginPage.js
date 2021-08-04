import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from './forms/LoginForm';
import Nav from './others/Nav';
import TweetList from './tweets/TweetList';

class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="col-2of5 bg-white profile user-auth">
                        <h3>Log in to Web Tweet</h3>
                        <LoginForm />
                        <h6>New to Web Tweet? <Link to="/signup">Sign up Now</Link></h6> 
                    </div>
                    <div className="col-3of5 bg-white">
                        <TweetList />
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginPage;
