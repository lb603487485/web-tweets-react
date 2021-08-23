import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { Widget } from "@uploadcare/react-widget";
import { UPC_PUBLIC_KEY } from '../../config';


function PostBox (props) {
    const [myState, setMyState] = useState({
        content: '',
        imageUrl: '',
        imageGroup: '',
    });

    const handleBoxUpdate = e => {
        console.log(e.target.value);
        setMyState({
            ...myState,
            [e.target.name]: e.target.value,
        });
    }

    const widgetApi = useRef();

    const handleImagesSelect = async (file) => {
        console.log('file', file)
        if (file) {
            await file.promise().done((info) => {
                console.log('info', info);
                setMyState({
                    ...myState,
                    imageGroup: info.cdnUrl,
                });
            });
        } else {
            console.log('no file');
            setMyState({
                ...myState,
                imageGroup: '',
            });
        }
    };

    const handlePost = () => {
        console.log('posting')
        if (myState.content === ''){
            console.log('empty content');
        } else {
            console.log(myState);
            props.postTweetRequest(myState);
            // clear set
            setMyState({
                content: '',
                imageUrl: '',
                imageGroup: '',
            });
        }
    }

    return (
        <div className="tweet">
            <form>
                <div className="row">
                    <img className="avatar-sm v-top" src={props.user.profile.avatarUrl} alt="avatar" />                       
                    <textarea className="input-tweet" placeholder="What's up?" name="content" onChange={handleBoxUpdate} value={myState.content}></textarea>
                </div>
                <div className="row tweet-actions">
                    <button className="btn-clear my-images-action" type="button"> <i className="far fa-images" onClick={() => {widgetApi.current.openDialog()}}></i></button>
                    <Widget publicKey={UPC_PUBLIC_KEY} ref={widgetApi} value={myState.imageGroup} onFileSelect={handleImagesSelect} multiple multipleMax={9} crop="4:3" imagesOnly previewStep clearable></Widget>
                    <button className="btn-primary" type="button" name="post-btn" onClick={handlePost} disabled={myState.content ? '' : 'disabled'}>Post</button>
                </div>
            </form>
        </div>
        );
}

const mapState = state => ({
    user: state.user
});

const mapDispath = ({tweets: { postTweetRequest }}) => ({
    postTweetRequest: (data) => postTweetRequest(data),
});

export default connect(mapState, mapDispath)(PostBox);
