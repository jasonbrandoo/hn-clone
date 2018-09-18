import React, { Component } from 'react';
import Jobs from '../components/content/Jobs';

class JobsContainer extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    fetch('https://api.hnpwa.com/v0/jobs/1.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          jobs: data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { jobs } = this.state;
    return (
      <Jobs jobs={jobs} />
    );
  }
}

export default JobsContainer;
