import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileButtons from './ProfileButtons';
class ProfileSideBar extends React.Component {
    render() {
        return (
            <div className="profile">
                <img className="avatar" src={this.props.user.profile.avatarUrl} alt="avatar" />
                <h3>{this.props.user.profile.name}</h3>
                <h5>@{this.props.user.profile.username}</h5>
                <h4><i className="fas fa-map-marker-alt"></i> {this.props.user.profile.location}</h4>
                <p className="center">{this.props.user.profile.bio}</p>
                <Route path='/profile' render={() => <ProfileButtons />} />
            </div>
        );
    }
}

const mapState = state => ({
    user: state.user,
})

export default connect(mapState, null)(ProfileSideBar);