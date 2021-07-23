import React from 'react';

import phLogo from '../images/ph-logo.png';
import tweetImg from '../images/tweet.jpg';
 
class Tweet extends React.Component {
    render() {
        return (
            <div className="tweet">
                <div className="row">
                    <img className="avatar-sm" src={phLogo} alt="avatar" />   
                    <h4><b>Product Hunt</b></h4>
                    <h5>@ProductHunt</h5>
                    <h5>April 26, 2018 10:20PM</h5>
                </div>
                <p>Who goes to banks anymore? Not you, with this UK banking app 💰 https://www.producthunt.com/posts/starling-bank-2
                    <br />
                    <img src={tweetImg} alt="tweet" />
                </p>
            </div>
        );
    }
}

export default Tweet;