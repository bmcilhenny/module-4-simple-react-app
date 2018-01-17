import React from 'react';

const ActiveStreamCard = (props) => {
  return (
    <div>
      <div className="ui card">
        <iframe width="560" height="315" src={props.stream.stream_url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <div className="content">
        <a className="header">Kristy</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
        <div className="description">
          Kristy is an art director living in New York.
        </div>
        </div>
        <div className="extra content">
        <a>
          <i className="user icon"></i>
          {props.stream.user}
        </a>
        <div class="ui large buttons">
          <button class="ui yellow button">Edit</button>
          <div class="or"></div>
          <button class="ui red button" id={props.stream.id}>Delete</button>
        </div>

        </div>
      </div>
    </div>
  )
}


export default ActiveStreamCard;
