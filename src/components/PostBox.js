import React from 'react';

import sampleAvatarImg from '../images/sample-avatar.png';

class PostBox extends React.Component {
    render() {
        return (
        <div className="tweet">
            <form id="tweet-form">
                <div className="row">
                    <img className="avatar-sm v-top" src={sampleAvatarImg} alt="avatar" />                       
                    <textarea className="input-tweet" placeholder="What's up?" id="tweet-content"></textarea>
                </div>
                <div className="row tweet-actions">
                    {/* role="uploadcare-uploader" */}
                    <input type="hidden"  name="content" id="tweet-image" data-public-key="7d92f12ba9b3c1d2afd1" data-images-only />
                    <button className="btn-clear" type="button"><i className="far fa-image" id="tweet-image-btn">image-button</i></button>
                    <button className="btn-primary" type="button" id="post-btn" disabled>Post</button>
                </div>
            </form>
        </div>
        );
    }
}

export default PostBox;
