import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Widget } from "@uploadcare/react-widget";
import { UPC_PUBLIC_KEY } from '../../config';
import { Helmet } from 'react-helmet';


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
            [e.target.name]: e.target.value
        })
    }

    const handlePost = () => {
        console.log('posting')
        if (myState.content === ''){
            console.log('empty content');
        } else {
            console.log(myState);
            // this.props.postTweetRequest(this.state);
            // clear set
            setMyState({
                content: '',
                imageUrl: '',
                imageGroup: '',
            });
        }
    }
    useEffect(() => {
        // console.log(document.getElementsByClassName('uploadcare--widget__button_type_open'));
        // console.log(React.findDOMNode(this));
        // console.log(document.head);
        // const script = document.createElement('script');
        // script.src = '/upload_custom.js';
        // script.async = true;
        // document.body.appendChild(script);
        // console.log(document.body.getElementsByClassName('uploadcare--widget__button_type_open').item(0));
        console.log();
      }, []);

    return (
        <div className="tweet">
            <form>
                <div className="row">
                    <img className="avatar-sm v-top" src={props.user.profile.avatarUrl} alt="avatar" />                       
                    <textarea className="input-tweet" placeholder="What's up?" name="content" onChange={handleBoxUpdate} value={myState.content}></textarea>
                </div>
                <div className="row tweet-actions">
                    {/* role="uploadcare-uploader" */}
                    {/* <input type="hidden"  name="content"  data-images-only /> */}
                    {/* <button className="btn-clear" type="button"><i className="far fa-image" id="tweet-image-btn"></i></button> */}
                    <div>
                    <i className="far fa-images"></i>
                    <Widget publicKey={UPC_PUBLIC_KEY} data-btn-text="hi"></Widget>
                    </div>
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
