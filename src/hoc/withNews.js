import React, { Component } from 'react';

const withNews = WrappedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsPage: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      askPage: [1, 2],
    };
  }

  render() {
    const { newsPage, askPage } = this.state;
    return (
      <WrappedComponent {...this.props} newsPage={newsPage} askPage={askPage} />
    );
  }
};

export default withNews;
