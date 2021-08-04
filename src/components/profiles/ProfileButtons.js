import React from 'react';
import { Link } from 'react-router-dom';

class ProfileButtons extends React.Component {
    render() {
        return (
            <div className="profile-content">
                <Link className="btn-border space-top" to='/profile-edit'>Edit profile</Link>
                <Link className="btn-border space-top" to='/login'>Log out</Link>
            </div>
        );
    }
}

export default ProfileButtons;
