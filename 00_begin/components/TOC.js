import React, { Component } from 'react';

class TOC extends Component {
  render() {
    console.log('TOC.js 렌더링 완료');
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            // data-id={data[i].id} // 삭제
            onClick={function (id, e) {
              // debugger;
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)} // bind에 추가한 속성이 function의 매개변수에 우선 할당
          >{data[i].title}</a></li>);
      i = i + 1;
    }
    return (
      <nav>
          <ul>
            {lists}
          </ul>
      </nav>
    );
  }
}

export default TOC; 
