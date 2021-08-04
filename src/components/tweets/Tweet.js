import React from 'react';
import moment from 'moment';
 
class Tweet extends React.Component {
    render() {
        return (
            <div className="tweet">
                <div className="row">
                    <img className="avatar-sm" src={this.props.value.author.avatarUrl} alt="avatar" />   
                    <h4><b>{this.props.value.author.name}</b></h4>
                    <h5>@{this.props.value.author.username}</h5>
                    <h5>{moment(this.props.value.createdAt).format('MMMM D, YYYY hh:mm A')}</h5>
                </div>
                <p> {this.props.value.content}
                    <br />
                    <img src={this.props.value.imageUrl} alt="tweet" />
                </p>
            </div>
        );
    }
}

export default Tweet;