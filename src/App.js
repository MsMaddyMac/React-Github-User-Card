import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import GithubUserCard from './components/GithubUserCard';
import GithubUserFollowers from './components/GithubUserFollowers';


class App extends Component {
  state = {
    user: {},
    followers: []
  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/MsMaddyMac')
    .then(res => {
      console.log(res);
      this.setState({
        user: res.data
      });
      axios
      .get('https://api.github.com/users/MsMaddyMac/followers')
      .then(res => {
        console.log(res);
        this.setState({
          followers:res.data
        })
      })
    })
  
    .catch(error => {
    console.log("No information found.", error);
    });
  }

  render() {
    console.log('App is rendering...')
    return (
      <div className="App">
        <h1>Github Users</h1>
        <GithubUserCard user={this.state.user} />
        <GithubUserFollowers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
