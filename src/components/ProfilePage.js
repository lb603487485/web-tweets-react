import React from 'react';
import Nav from './Nav';
import PostBox from './PostBox';
import {
    Link
  } from "react-router-dom";
import TweetList from './TweetList';
import ProfileSideBar from './ProfileSideBar';

class ProfilePage extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="col-2of5 bg-white profile">
                        <ProfileSideBar />
                        <Link className="btn-border space-top" to='/profile-edit'>Edit profile</Link>
                        <Link className="btn-border space-top" to='/login'>Log out</Link>
                        {/* <button className="btn-border space-top" id="logout-btn">Log out</button> */}
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
