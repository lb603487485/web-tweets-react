import React from 'react';
import Nav from './Nav';
import PostBox from './PostBox';
import ProfileSideBar from './ProfileSideBar';
import TweetList from './TweetList';

class HomePage extends React.Component {
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
                        <TweetList />
                    </div>
                </div>
            </div>
        );
    }

}

export default HomePage;
