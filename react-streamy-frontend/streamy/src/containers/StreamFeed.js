import React from 'react'
import StreamContainer from './StreamContainer'

const StreamFeed = (props) => {
  const streamFeed = props.streams.map(stream => <StreamContainer stream={stream} key={stream.id} handleDelete={props.handleDelete} />)
  return (
    <div className="ui cards ui container center aligned" id="margin-top">
      {streamFeed}
    </div>
  )
}

export default StreamFeed;
