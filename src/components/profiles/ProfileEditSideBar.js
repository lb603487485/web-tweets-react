import React, { useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';

import uploadImg from '../../images/upload.png';
import { connect } from 'react-redux';
import { Widget } from "@uploadcare/react-widget";
import { UPC_PUBLIC_KEY } from '../../config';

const ProfileEditSideBar = (props) => {

    const [userProfile, setUserProfile] = useState({
        name: props.user.name,
        location: props.user.location,
        bio: props.user.bio,
        avatarUrl: props.user.avatarUrl,
    });

    const [saving, setSaving] = useState(false);

    const handleFormUpdate = e => {
        setUserProfile({
            ...userProfile,
            [e.target.name]: e.target.value
        });
    };

    const widgetApi = useRef();
    const handleAvatarUpdate = async (file) => {
        // console.log('file', file);
        if (file) {
            await file.promise().done((info) => {
                console.log('info', info);
                setUserProfile({
                    ...userProfile,
                    avatarUrl: info.cdnUrl,
                });
            });
        } else {
            console.log('no file');
        }
    };

    const handleSaveButton = async () => {
        // console.log(userProfile);
        const success = await props.updateProfileRequest(userProfile);
        if (success){
            setSaving(true);
        }
    };

    if (saving){
        return <Redirect to="/profile" />
    } else {
        return (
            <form className="profile">
                <div className="relative img-edit" >
                    <img className="avatar" src={userProfile.avatarUrl} alt="avatar" />
                    {/* role="uploadcare-uploader" */}
                    <input type="hidden" name="content" id="avatar-file" data-public-key="7d92f12ba9b3c1d2afd1" data-images-only />
                    {/* <input type="hidden" role="uploadcare-uploader" data-public-key="b824b3e62a092e8c38d2" name="my_file_input" /> */}
                    <img className="avatar-upload" src={uploadImg} alt="upload-img" onClick={() => {widgetApi.current.openDialog()}} />
                    <div hidden>
                    <Widget publicKey={UPC_PUBLIC_KEY} ref={widgetApi} onFileSelect={handleAvatarUpdate} crop="1:1" imagesOnly previewStep></Widget>
                    </div>
                </div>
                <input className="input-profile" type="text" placeholder="Full name" name="name" value={userProfile.name} onChange={handleFormUpdate}/>
                <h5>@{props.user.username}</h5>
                <input className="input-profile" type="text" placeholder="Location" name="location" value={userProfile.location} onChange={handleFormUpdate}/>
                <textarea className="input-profile" placeholder="Personal Bio" name="bio" onChange={handleFormUpdate}>{userProfile.bio}</textarea>
                <button className="btn-primary space-top" type="button" onClick={handleSaveButton}>Save</button>
                <Link className="btn-border space-top" to="/profile">Cancel</Link>
            </form>
        );
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
