import React from 'react';
import Tweet from './Tweet';
 
class TweetList extends React.Component {
    render() {
        return (
            <div >
                {console.log(this.props.tweets)}
                {this.props.tweets.map(tweet => <Tweet value={tweet} key={tweet._id}/>)}
            </div>
        );
    }
}

export default TweetList;