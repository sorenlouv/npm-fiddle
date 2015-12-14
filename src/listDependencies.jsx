var React = require('react');
var ReactDOM = require('react-dom');

var dependencies = ['angular', 'jquery'];
class ListDependencies extends React.Component {
  render() {
  var dependencyNodes = this.props.dependencies.map(function(dependency) {
    return (
        <p key={dependency}>{dependency}</p>
    );
  });

  return <div><h1>List dependencies</h1>{dependencyNodes}</div>;
  }
}

ReactDOM.render(<ListDependencies dependencies={dependencies}/>, document.getElementById('list-dependencies'));

