import React from 'react';
import Nav from './Nav';
import {
    Link
} from "react-router-dom";

import uploadImg from '../images/upload.png';
import sampleAvatarImg from '../images/sample-avatar.png';
import TweetList from './TweetList';

class ProfileEditPage extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="col-2of5 bg-white profile">
                        <form className="profile" action="profile.html">
                            <div className="relative img-edit">
                                <img className="avatar" src={sampleAvatarImg} alt="avatar" id="avatar-image" />
                                {/* role="uploadcare-uploader" */}
                                <input type="hidden" name="content" id="avatar-file" data-public-key="7d92f12ba9b3c1d2afd1" data-images-only />
                                <img className="avatar-upload" src={uploadImg} alt="upload-img" id="avatar-file-btn" />
                            </div>
                            <input className="input-profile" type="text" id="name-input" placeholder="Full name" />
                            <h5 id="username">@username</h5>
                            <input className="input-profile" type="text" id="location-input" placeholder="Location" />
                            <textarea className="input-profile" id="bio-input" placeholder="Personal Bio"></textarea>
                            <button className="btn-primary space-top" type="button" id="save-btn">Save</button>
                            {/* <button className="btn-border space-top" type="button" id="cancel-btn">Cancel</button> */}
                            <Link className="btn-border space-top" to="/profile">Cancel</Link>
                        </form>
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
