import React from 'react';
import Nav from './others/Nav';
import PostBox from './others/PostBox';
import TweetList from './tweets/TweetList';
import ProfileSideBar from './profiles/ProfileSideBar';


class ProfilePage extends React.Component {
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

export default ProfilePage;
