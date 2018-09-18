import React, { Component } from 'react';
import Show from '../components/content/Show';

class ShowContainer extends Component {
  constructor() {
    super();
    this.state = {
      show: [],
    };
    this.showIndex = this.showIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://api.hnpwa.com/v0/show/1.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          show: data,
        });
      })
      .catch(err => console.log(err));
  }

  showIndex(id) {
    fetch(`https://api.hnpwa.com/v0/show/${id}.json`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          show: data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { show } = this.state;
    return (
      <Show show={show} showIndex={this.showIndex} />
    );
  }
}

export default ShowContainer;
