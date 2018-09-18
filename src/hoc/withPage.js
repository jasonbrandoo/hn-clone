import React, { Component } from 'react';

const withNews = WrappedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsPage: [1, 2, 3, 4, 5],
      askPage: [1, 2],
      showPage: [1, 2],
    };
  }

  render() {
    const { newsPage, askPage, showPage } = this.state;
    return (
      <WrappedComponent {...this.props} newsPage={newsPage} askPage={askPage} showPage={showPage} />
    );
  }
};

export default withNews;
