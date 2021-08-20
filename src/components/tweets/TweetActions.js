import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
 
class TweetActions extends React.Component {

    handleDeleteRequest = () => {
        console.log(this.props.tweetId);
        this.props.deleteTweetRequest(this.props.tweetId)
    }

    render() {
        return (
            <div className="actionBox">
                <div className="deleteCross" onClick={this.handleDeleteRequest}></div>
                <Link to="/tweet-edit"><h5 className="editOption">Edit</h5></Link>
            </div>
        );
    }
}

const mapDispath = ({tweets: { removeTweetRequest }}) => ({
    deleteTweetRequest: (id) => removeTweetRequest(id),
});

export default connect(null, mapDispath)(TweetActions);