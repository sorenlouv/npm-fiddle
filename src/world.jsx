import React from 'react';
import ReactDOM from 'react-dom';

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

class World extends React.Component {
  render() {
	var commentNodes = this.props.comments.map(function(comment) {
	  return (
	    <p key={comment.id}>
	      {comment.text}
	    </p>
	  );
	});

    return <div><h1>World 2</h1>{commentNodes}</div>
  }
}

ReactDOM.render(<World comments={data}/>, document.getElementById('world'));


