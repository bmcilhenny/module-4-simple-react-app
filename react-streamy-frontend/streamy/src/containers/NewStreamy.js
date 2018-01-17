import React from 'react';


class NewStreamy extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalActive: false
    }
  }

  switchModalView = () => {
    this.setState({
      modalActive: !this.state.modalActive
    })
  }


  render() {
    let modalClasses = this.state.modalActive ? 'ui modal transition visible active' : 'ui modal transition hidden';
    return (
      <div>
        <div className="ui center aligned basic segment">
          <div className="ui left icon action input">
            <i className="search icon"></i>
            <input type="text" placeholder="Find A Saved Streamy" />
            <div className="ui blue submit button">Search</div>
          </div>
          <div className="ui horizontal divider">
            Or
          </div>
          <div className="ui teal labeled icon button" onClick={this.switchModalView}>
            Create a Streamy
            <i className="add icon"></i>
          </div>
        </div>

        <NewVideoForm switchModalView={this.switchModalView} handleNewStreamy={this.props.handleNewStreamy} modalClasses={modalClasses} newStream={this.props.newStream} handleNewStreamChange={this.props.handleNewStreamChange}/>
      </div>
    )
  }
}

const NewVideoForm = (props) => {
  return (
    <div className={props.modalClasses}>
        <i className="close icon" onClick={props.switchModalView}></i>
        <div className="header">
        Submit a new Streamy
        </div>
        <div className="image content">
          <div className="ui medium image">
            <img src="/images/avatar/large/chris.jpg" />
          </div>
          <form onSubmit={props.handleNewStreamy}>
          <div className="description">
            <div className="ui header">Enter the Stream details below.</div>
                <div class="ui right labeled left icon input">
                  <i class="tags icon"></i>
                  <input type="text" name="stream_url" placeholder="Link Here" onChange={(e) => props.handleNewStreamChange(e.target.value, e.target.name)} value={props.newStream.stream_url} />
                  <a class="ui tag label">
                    Enter a Sharable Youtube Link
                  </a>
                </div>
                <label>Username: </label>
                <input type="text" name="user" placeholder="Username" onChange={(e) => props.handleNewStreamChange(e.target.value, e.target.name)} value={props.newStream.user}/>
                <label>Title: </label>
                <input type="text" name="title" placeholder="Title" onChange={(e) => props.handleNewStreamChange(e.target.value, e.target.name)} value={props.newStream.title}/>
                <label>Description: </label>
                <input type="text" name="description" placeholder="Description" onChange={(e) => props.handleNewStreamChange(e.target.value, e.target.name)} value={props.newStream.description}/>
                <label>Video length: </label>
                <input type="text" name="time" placeholder="Video length" onChange={(e) => props.handleNewStreamChange(e.target.value, e.target.name)} value={props.newStream.time}/>
          </div>
          <div className="actions">
            <div className="ui black deny button" onClick={props.switchModalView}>
              Cancel
            </div>
            <button type="submit" className="ui positive right labeled icon button">
              Submit
              <i className="checkmark icon"></i>
            </button>
          </div>
        </form>
        </div>

  </div>
  )
}

export default NewStreamy;
