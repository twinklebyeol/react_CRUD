import React, { Component } from 'react';

class Subject extends Component {
  render() {
    console.log('Subject.js 렌더링 완료');
    return (
      <header>
          <h1><a href="/" onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}>{this.props.title}</a></h1>
          <p>{this.props.sub}</p>
      </header>  
    );
  }
}

export default Subject; 