import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import GithubUserCard from './components/GithubUserCard';


class App extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/MsMaddyMac')
    .then(res => {
      console.log(res);
      this.setState({
        user: res.data
      });
    })
  
    .catch(error => {
    console.log("No information found.", error);
    });
  }

  render() {
    console.log('App is rendering...', this.state.user)
    return (
      <div className="App">
        <h1>Github Users</h1>
        <GithubUserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
