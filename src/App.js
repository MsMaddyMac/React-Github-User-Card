import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import LambdaLogo from '../src/images/lambdalogo.png';
import GithubLogo from '../src/images/githublogo.png';

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
        <div className="header">
          <img src={LambdaLogo} alt="Lambda Logo"/>
          <p>🧡's</p>
          <img src={GithubLogo} alt="GitHub Logo"/>
        </div>
        <div className="cards">
          <GithubUserCard user={this.state.user} />
          <h2>My Followers 🤩</h2>
          <div className="follower-cards">
            <GithubUserFollowers followers={this.state.followers} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
