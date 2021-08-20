import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import TweetActions from './TweetActions';
 
class Tweet extends React.Component {
    render() {
        return (
            <div className="tweet">
                <div className="row">
                    <img className="avatar-sm" src={this.props.value.author.avatarUrl} alt="avatar" />   
                    <h4><b>{this.props.value.author.name}</b></h4>
                    <h5>@{this.props.value.author.username}</h5>
                    <h5>{moment(this.props.value.createdAt).format('MMMM D, YYYY hh:mm A')}</h5>
                    {this.props.userId === this.props.value.author._id && <TweetActions tweetId={this.props.value._id}/> }
                </div>
                <p> {this.props.value.content}
                    <br />
                    <img src={this.props.value.imageUrl} alt="tweet" />
                </p>
            </div>
        );
    }
}

const mapState = state => ({
    userId: state.user.profile._id
});

export default connect(mapState, null)(Tweet);