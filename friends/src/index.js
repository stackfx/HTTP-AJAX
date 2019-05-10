import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import FriendList from "./components/FriendList";
import Friend from "./components/Friend";
import FriendForm from "./components/FriendForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(error => console.log(error));
  }

  addfriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push("/friend-list");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">My friends</h1>
          <div className="nav-links">
            <NavLink to="/friend-form">Add Friend</NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/friend-list">Shop</NavLink>
          </div>
        </nav>

        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/friends-list"
          render={props => (
            <FriendList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path="/friends-list/:id"
          render={props => <Friend {...props} friends={this.state.friends} />}
        />
        <Route
          path="/item-form"
          render={props => <FriendForm {...props} addFriend={this.addFriend} />}
        />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  rootElement
);
