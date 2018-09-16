import React, { Component } from 'react';
import Ask from '../components/Ask';

class AskContainer extends Component {
  constructor() {
    super();
    this.state = {
      ask: [],
    };
    this.askIndex = this.askIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://api.hnpwa.com/v0/ask/1.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          ask: data,
        });
      })
      .catch(err => console.log(err));
  }

  askIndex(id) {
    fetch(`https://api.hnpwa.com/v0/ask/${id}.json`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          ask: data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { ask } = this.state;
    return (
      <Ask ask={ask} askIndex={this.askIndex} />
    );
  }
}

export default AskContainer;
