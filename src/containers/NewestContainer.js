import React, { Component } from 'react';
import Newest from '../components/content/Newest';

class NewestContainer extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
    this.newestIndex = this.newestIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://api.hnpwa.com/v0/newest/1.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          news: data,
        });
      })
      .catch(err => console.log(err));
  }

  newestIndex(id) {
    fetch(`https://api.hnpwa.com/v0/newest/${id}.json`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          news: data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { news } = this.state;
    return (
      <Newest news={news} newestIndex={this.newestIndex} />
    );
  }
}

export default NewestContainer;
