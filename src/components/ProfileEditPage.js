import React from 'react';
import Nav from './others/Nav';

import ProfileEditSideBar from './profiles/ProfileEditSideBar';
import TweetList from './tweets/TweetList';

class ProfileEditPage extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="col-2of5 bg-white profile">
                        <ProfileEditSideBar />
                    </div>

                    <div className="col-3of5 bg-white">
                        <TweetList />
                    </div>
                </div>
            </div>
        );
    }

}

export default ProfileEditPage;
