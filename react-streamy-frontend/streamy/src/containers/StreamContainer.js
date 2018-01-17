import React from 'react';
import ActiveStreamCard from '../components/ActiveStreamCard';
import StreamCard from '../components/StreamCard';

class StreamContainer extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      active: false
    };
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div id="card-margin">
        {this.state.active ? <ActiveStreamCard stream={this.props.stream}  /> : <StreamCard stream={this.props.stream} handleDelete={this.props.handleDelete} />}
      </div>
    )
  }

}

export default StreamContainer;
