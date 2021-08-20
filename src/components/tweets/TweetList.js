import React from 'react';
import Tweet from './Tweet';
import { connect } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
// import axios from 'axios';
// import { BASE_URL } from '../../config';
class TweetList extends React.Component {

    componentDidMount = () => {
        this.props.fetchTweetsRequest();
    }

    render() {
        return (
            <div >
                {/* {console.log('statetweets', this.props.tweets)} */}
                <Switch>
                    <Route path="(/profile|/profile-edit)">
                        {this.props.tweets
                        .filter(tweet => tweet.author._id === this.props.userId)
                        .map(tweet => <Tweet value={tweet} key={tweet._id}/>)}
                    </Route>
                    
                    <Route path="/">{this.props.tweets.map(tweet => <Tweet value={tweet} key={tweet._id}/>)}</Route>
                </Switch>
            </div>
        );
    }
}

const mapState = state => ({
    tweets: state.tweets,
    userId: state.user.profile._id
});

const mapDispath = ({tweets: { fetchTweetsRequest }}) => ({
    fetchTweetsRequest: () => fetchTweetsRequest(),
});

export default connect(mapState, mapDispath)(TweetList);