import React from 'react';
import Nav from './others/Nav';

import ProfileSideBar from './profiles/ProfileSideBar';

class TweetEditPage extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="col-2of5 bg-white profile">
                        <ProfileSideBar />
                    </div>

                    <div className="col-3of5 bg-white">
                        <h2>Comming Soon...</h2>
                    </div>
                </div>
            </div>
        );
    }

}

export default TweetEditPage;
