import React, { Component } from 'react';
import './App.css';
import StreamFeed from './containers/StreamFeed';
import NewStreamy from './containers/NewStreamy';


class App extends Component {

  constructor() {
    super()

    this.state = {
      streams: [],
      newStream: {
        stream_url: '',
        user: '',
        title: '',
        time: '',
        description: ''
      }
    }
  }

  handleNewStreamChange = (value, key) => {
    this.setState({
      // newStream: {...this.state.newStream, [key]: value}
      newStream: Object.assign({}, this.state.newStream, {[key]: value})
    })
  }



  fetchStreams = () => {
    fetch('http://localhost:3000/api/v1/streams').then(resp => resp.json()).then(streams =>
    this.setState({
      streams: streams
    }))
  }

  clearNewStreamyField = () => {
    this.setState({
      newStream: {
        stream_url: '',
        user: '',
        title: '',
        time: '',
        description: ''
      },
      modalActive: false,
    })
  }

  handleNewStreamy = (e) => {
    e.preventDefault();
    debugger;
    fetch('http://localhost:3000/api/v1/streams', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stream_url: this.state.newStream.stream_url,
        user: this.state.newStream.user,
        title: this.state.newStream.title,
        time: this.state.newStream.time,
        description: this.state.newStream.description
      })
    }).then(resp => resp.json()).then(streams => this.fetchStreams()).then(anything => this.clearNewStreamyField())
  }


  handleDelete = (e) => {
    let id = e.target.id;
    debugger;
    fetch(`http://localhost:3000/api/v1/streams/${id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(resp => resp.json()).then(newStreams => this.fetchStreams())
  }

  componentDidMount() {
    this.fetchStreams();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://imgur.com/aSMEBps.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Me.tv</h1>
             <a href="https://github.com/bmcilhenny">
              <button className="ui circular purple icon button">
                <i className="github icon"></i>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/brendan-mcilhenny/">
              <button className="ui circular linkedin icon button">
                <i className="linkedin icon"></i>
              </button>
            </a>
            <a href="https://medium.com/@bmcilhen">
              <button className="ui circular medium plus icon button">
                <i className="medium plus icon"></i>
              </button>
            </a>
        </header>
        <p className="App-header">
          <code>My First Attempt at a React.js CRUD app/celebrating an Eagles playoff win</code>
          <p className="italic">To submit a Streamy, make sure you are using a Youtube sharable link. Go to the youtube video, click share and use that link.</p>
        </p>
        <NewStreamy handleNewStreamy={this.handleNewStreamy} handleNewStreamChange={this.handleNewStreamChange} newStream={this.state.newStream}/>
        <StreamFeed streams={this.state.streams} handleDelete={this.handleDelete} handleNewStreamChange={this.handleNewStreamChange}/>
      </div>
    );
  }
}

export default App;
