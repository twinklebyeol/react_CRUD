import React, { Component } from 'react';

class UpdateContent extends Component {
  render() {
    console.log(this.props.data);
    console.log('UpdateContent.js 렌더링 완료');
    return (
      <article>
        <h2>Update</h2>
        <form action="/update_process" method="post">
          <input type="hidden" name="id" value=""></input>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="title"
              value={this.props.data.title}
            ></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
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