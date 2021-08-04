import React from 'react';

import { Route } from 'react-router-dom';
import avatarImg from '../../images/avatar.jpg';
import ProfileButtons from './ProfileButtons';
 
class ProfileSideBar extends React.Component {
    render() {
        return (
            <div className="profile-content">
                <img className="avatar" src={avatarImg} alt="avatar" />
                <h3>Yan Hong</h3>
                <h5>@honlyan</h5>
                <h4><i className="fas fa-map-marker-alt"></i> Vancouver</h4>
                <p className="center">Director of EduHacks * Digital Ocean Vancouver Meetup Co-organizer * CEO of HackHub * Founder of Inverse Technology Inc.</p>
                <Route path='/profile' render={() => <ProfileButtons />} />
            </div>
        );
    }
}

export default ProfileSideBar;