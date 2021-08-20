import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import uploadImg from '../../images/upload.png';
import { connect } from 'react-redux';

class ProfileEditSideBar extends React.Component {
    state = {
        name: this.props.user.name,
        location: this.props.user.location,
        bio: this.props.user.bio,
        avatarUrl: this.props.user.avatarUrl,
        saving: false,
    }

    handleFormUpdate = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSaveButton = () => {
        const profile = {
            name: this.state.name,
            location: this.state.location,
            bio: this.state.bio,
            avatarUrl: this.state.avatarUrl
        }
        this.props.updateProfileRequest(profile);
        this.setState({
            saving: true
        });
    }


    render() {
        if (this.state.saving){
            return <Redirect to="/profile" />
        } else {
            return (
                <form className="profile">
                    <div className="relative img-edit">
                        <img className="avatar" src={this.state.avatarUrl} alt="avatar" />
                        {/* role="uploadcare-uploader" */}
                        <input type="hidden" name="content" id="avatar-file" data-public-key="7d92f12ba9b3c1d2afd1" data-images-only />
                        {/* <input type="hidden" role="uploadcare-uploader" data-public-key="b824b3e62a092e8c38d2" name="my_file_input" /> */}
                        <img className="avatar-upload" src={uploadImg} alt="upload-img" id="avatar-file-btn" />
                    </div>
                    <input className="input-profile" type="text" placeholder="Full name" name="name" value={this.state.name} onChange={this.handleFormUpdate}/>
                    <h5>@{this.props.user.username}</h5>
                    <input className="input-profile" type="text" placeholder="Location" name="location" value={this.state.location} onChange={this.handleFormUpdate}/>
                    <textarea className="input-profile" placeholder="Personal Bio" name="bio" onChange={this.handleFormUpdate}>{this.state.bio}</textarea>
                    <button className="btn-primary space-top" type="button" onClick={this.handleSaveButton}>Save</button>
                    <Link className="btn-border space-top" to="/profile">Cancel</Link>
                </form>
            );
        }
    }
}

const mapState = state => ({
    tweets: state.tweets,
    user: state.user.profile
});

const mapDispath = ({user: { updateProfileRequest }}) => ({
    updateProfileRequest: (data) => updateProfileRequest(data),
});

export default connect(mapState, mapDispath)(ProfileEditSideBar);
