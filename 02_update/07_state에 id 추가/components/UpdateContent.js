import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    };
  }
  render() {
    console.log(this.props.data);
    console.log('UpdateContent.js 렌더링 완료');
    return (
      <article>
        <h2>Update</h2>
        <form action="/update_process" method="post">
          <input type="hidden" name="id" value={this.props.data.id}></input>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="title"
              value={this.state.title}
              onChange={function(e) {
                console.log(e.target.value);
                this.setState({title:e.target.value});
              }.bind(this)}
            ></input>
          </p>
          <p>
            <textarea 
              name="desc" 
              placeholder="description"
              value={this.state.desc}
              onChange={function(e) {
                console.log(e.target.value);
                this.setState({desc:e.target.value});
              }.bind(this)}></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent; 