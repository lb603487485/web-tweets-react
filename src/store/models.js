import { BASE_URL } from "../config";
import axios from "axios";

const user = {
    state: {
        token: '',
        profile: {},
    },

    reducers: {
        updateToken(state, payload) { // payload should be a token
            return {
                ...state,
                token: payload,
            }
        },

        updateProfile(state, payload) { // payload should be a object of profile
            return {
                ...state,
                profile: payload,
            }
        },

        cleanUserState(state, payload) {
            return {
                token: '',
                profile: {},
            }
        },

        addTweet(state, tweetId) {
            const prev_tweets = state.profile.tweets;
            state.profile.tweets = [tweetId, ...prev_tweets];
            return state;
        },

        removeTweet(state, tweetId) {
            state.profile.tweets = state.profile.tweets.filter((item) =>(item !== tweetId) );
            return state;
        },
    },

    effects: (dispatch) => ({
        async logInRequestAsync(payload, rootState) { // payload should be { username: String, password: String}
            // const that = dispatch;
            try {
                const res = await axios.post(`${BASE_URL}/auth/login`, payload);
                console.log(res);
                if (res.data.success){
                    this.updateProfile(res.data.profile);
                    this.updateToken(res.data.token);
                    return true;
                    // console.log(that.tweets);
                } else {
                    console.log(res.data.error);
                    return false;
                }
            } catch (err) {
                console.log(err);
                return false;
            }
        },

        async decrementAsync(payload, rootState) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            dispatch.count.decrement(payload);
        },

        async updateProfileRequest(payload, rootState) { // { name: String, location: String, bio: String, avatarUrl: String }
            console.log(payload);
            const res = await axios.put(`${BASE_URL}/profile`, payload, {
                headers: {
                    Authorization: 'Bearer ' + rootState.user.token
                }
            });
            
            try {// { profile: Object, error: Object, success: Bool }
                if (res.data.success){
                    this.updateProfile(res.data.profile);
                    return true;
                } else {
                    console.log(res.data.error);
                    return false;
                }
            } catch (err) {
                console.log(err);
                return false;
            }
            // console.log('updating profile done');
        }
        
    })

}

const tweets = {
    state: [],

    reducers: {
        replaceTweets(state, newTweets) {
            return newTweets ? newTweets : state;
        },

        addTweet (state, newTweet) {
            return newTweet ? [newTweet, ...state] : state;
        },

        removeTweet(state, tweetId) {
            return state.filter((item) =>(item._id !== tweetId));
        },

    },

    effects: (dispatch) => ({
        fetchTweetsRequest(payload, rootState) {
            const that = dispatch.tweets;
            axios.get(`${BASE_URL}/tweet`)
            .then(res => {
                // console.log(res);
                if (res.data.success) {
                    that.replaceTweets(res.data.tweets);
                }
            });
        },
        async postTweetRequest(payload, rootState){ // payload should be like { content: String, imageUrl: String, imageGroup: String}
            const that = dispatch.user;
            axios.post(`${BASE_URL}/tweet`, payload, {
                headers: {
                    Authorization: 'Bearer ' + rootState.user.token
                }
            }).then(res => {
                if (res.data.success){
                    // { tweet: Object, error: Object, success: Bool }
                    this.addTweet(res.data.tweet);
                    that.addTweet(res.data.tweet._id);
                } else {
                    console.log(res.data.error);
                }
            })
            .catch(err => {
                console.log(err);
            });
            console.log("post done");
        },

        async removeTweetRequest(tweetId, rootState) {
            const that = dispatch.user;
            axios.delete(`${BASE_URL}/tweet/${tweetId}`,{
                headers: {
                    Authorization: 'Bearer ' + rootState.user.token
                }
            }).then(res => {
                if (res.data.success){
                    this.removeTweet(tweetId);
                    that.removeTweet(tweetId);
                } else {
                    console.log(res.data.error);
                }
            }).catch(err => {
                console.log(err);
            });

            console.log("delete done");
        },
    })
}

export { user, tweets }