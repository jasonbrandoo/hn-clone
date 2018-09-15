import React, { Component } from 'react';

const withNews = WrappedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsPage: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      newestPage: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  }

  render() {
    const { newsPage, newestPage } = this.state;
    return (
      <WrappedComponent {...this.props} newsPage={newsPage} newestPage={newestPage} />
    );
  }
};

export default withNews;
