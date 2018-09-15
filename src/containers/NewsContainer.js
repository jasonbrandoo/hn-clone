import React, { Component } from 'react';
import News from '../components/News';

class NewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
    this.newsIndex = this.newsIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://api.hnpwa.com/v0/news/1.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          news: data,
        });
      })
      .catch(err => console.log(err));
  }

  newsIndex(id) {
    fetch(`https://api.hnpwa.com/v0/news/${id}.json`)
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
      <News news={news} newsIndex={this.newsIndex} />
    );
  }
}

export default NewsContainer;
