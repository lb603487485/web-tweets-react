import React from 'react';
import Nav from './others/Nav';
import PostBox from './others/PostBox';
import ProfileSideBar from './profiles/ProfileSideBar';
import TweetList from './tweets/TweetList';
import axios from 'axios';
import { BASE_URL } from '../config';
class HomePage extends React.Component {
    state = {
        tweets: [],
    }

    componentDidMount = () => {
        let that = this;
        axios.get(`${BASE_URL}/tweet`)
        .then(res => {
            console.log(res);
            that.setState({tweets: res.data.tweets});
        });
    }

    render() {
        
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="col-2of5 bg-white profile">
                        <ProfileSideBar />
                    </div>
                    <div className="col-3of5 bg-white">
                        <PostBox />
                        <TweetList tweets={this.state.tweets}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default HomePage;
