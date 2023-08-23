import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
      console.log('Content.js 렌더링 완료');
      return (
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e) {
              e.preventDefault();
              var _title = e.target.title.value;
              var _desc = e.target.desc.value;  
              console.log("title : " + _title);
              console.log("desc : " + _desc);    
            }.bind(this)}
          >
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

export default CreateContent; 