import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfileButtons extends React.Component {
    render() {
        return (
            <div className="profile-content">
                <Link className="btn-border space-top" to='/profile-edit'>Edit profile</Link>
                <button className="btn-border space-top" onClick={this.props.logout}>Log out</button>
            </div>
        );
    }
}

const mapDispath = ({user: { cleanUserState }}) => ({
    logout: () => cleanUserState(),
});

export default connect(null, mapDispath)(ProfileButtons);
