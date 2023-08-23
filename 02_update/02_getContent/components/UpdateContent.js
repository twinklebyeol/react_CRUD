import React, { Component } from 'react';

class UpdateContent extends Component {
  render() {
    console.log('UpdateContent.js 렌더링 완료');
    return (
      <article>
        <h2>Update</h2>
        <form action="/update_process" method="post">
          <p><input type="text" name="title" placeholder="title"></input></p>
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