import React from 'react';

const StreamCard = (props) => {

  let youtubeCode = props.stream.stream_url.split('.be/')[1];
  let embeddedYoutubeCode = `https://www.youtube.com/embed/${youtubeCode}`
  return (
    <div className="ui card">
      <iframe title={props.stream.title} width="100%" height="100%" src={embeddedYoutubeCode} frameBorder="0"></iframe>
      <div className="content">
        <a className="header">{props.stream.title}</a>
        <div className="meta">
          <span className="date">Length: {props.stream.time} minutes</span>
        </div>
        <div className="description">
          {props.stream.description}
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          {props.stream.user}
        </a>
        <br/>
        <br/>
        <div className="ui large buttons">
          <button className="ui yellow button">Edit</button>
          <div className="or"></div>
          <button className="ui red button" id={props.stream.id} onClick={props.handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}


export default StreamCard;
