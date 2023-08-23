import React, { Component } from 'react';

class ReadContent extends Component {
  render() {
    console.log('Content.js 렌더링 완료');
    return (
      <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
      </article>
    );
  }
}

export default ReadContent;