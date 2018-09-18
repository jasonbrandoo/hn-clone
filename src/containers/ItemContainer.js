import React, { Component } from 'react';
import SingleItem from '../components/content/SingleItem';

class ItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      id: props.match.params,
    };
  }

  componentDidMount() {
    const { id, item } = this.state;
    fetch(`https://api.hnpwa.com/v0/item/${id.ask_id}.json`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          item: [...item, data],
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { item } = this.state;
    return (
      <SingleItem item={item} />
    );
  }
}

export default ItemContainer;
