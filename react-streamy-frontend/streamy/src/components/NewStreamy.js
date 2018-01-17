import React from 'react';

const NewStreamy = (props) => {
  return (
    <form onSubmit={props.handleNewStreamy}>
      <label>Youtube Mini Link</label>
      <input type="text" name="stream_url" placeholder="Copy and Paste a Shortened Youtube Link" onChange={(e) => props.handleNewStreamChange(e.target.value, e.target.name)} value={props.newStream.stream_url}/>
      <label>Username</label>
      <input type="text" name="user" placeholder="Username" onChange={(e) => props.handleNewStreamChange(e.target.value, e.target.name)} value={props.newStream.user}/>
      <label>Title</label>
      <input type="text" name="title" placeholder="Title" onChange={(e) => props.handleNewStreamChange(e.target.value, e.target.name)} value={props.newStream.title}/>
      <label>Description</label>
      <input type="text" name="description" placeholder="Description" onChange={(e) => props.handleNewStreamChange(e.target.value, e.target.name)} value={props.newStream.description}/>
      <label>Video length</label>
      <input type="text" name="time" placeholder="Video length" onChange={(e) => props.handleNewStreamChange(e.target.value, e.target.name)} value={props.newStream.time}/>
    <button type="submit" className="ui submit button" id="card-margin">Submit</button>
  </form>
  )
}

export default NewStreamy;
