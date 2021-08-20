import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './components/HomePage';
import Profile from './components/ProfilePage';
import ProfileEdit from './components/ProfileEditPage';
import Signup from './components/SignupPage';
import Login from './components/LoginPage';
import TweetEdit from './components/TweetEditPage';

// import Redux Rematch
import { connect } from 'react-redux';

const App = (props) => {
  return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            {props.user.token ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {/* <Login /> */}
            {props.user.token ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/signup">
            {props.user.token ? <Redirect to="/" /> : <Signup /> }
          </Route>
          <Route path="/profile">
            {props.user.token ? <Profile /> : <Redirect to="/login" />}
          </Route>
          <Route path="/profile-edit">
            {props.user.token ? <ProfileEdit /> : <Redirect to="/login" />}
          </Route>
          <Route path="/tweet-edit">
            {props.user.token ? <TweetEdit /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

const mapState = state =>({
  user: state.user
});

export default connect(mapState, null)(App);
