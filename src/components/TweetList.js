import React from 'react';
import Tweet from './Tweet';
 
class TweetList extends React.Component {
    render() {
        return (
            <div id="tweet-list">
                <Tweet />
                <Tweet />
            </div>
        );
    }
}

export default TweetList;