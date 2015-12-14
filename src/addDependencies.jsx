var React = require('react');
var ReactDOM = require('react-dom');
var cdnjsService = require('./services/cdnjs');
var Spinner = require('./spinner.jsx');
var _ = require('lodash');

var AddDependencies = React.createClass({
  getInitialState: function() {
    return {
      query: '',
      results: [],
      isLoading: false,
    };
  },

  search: _.debounce(function(event) {
    var _this = this;
    var query = event.target.value;
    this.setState({
      query: query,
      isLoading: true,
    });

    if (!query) {
      _this.setState({
        results: [],
        isLoading: false,
      });
      return;
    }

    cdnjsService.search(query).then(function(res) {
      if (_this.state.query === query) {
        // var regex = /ajax\/libs\/[-_.a-zA-Z0-9]+\/([-_.a-zA-Z0-9]+)\//g;
        var results = _(res.body.results).slice(0, 10).uniq('name').value();
        _this.setState({
          results: results,
          isLoading: false,
        });
      }
    })
      .done();
  }, 150),

  render: function() {
    var resultNodes = this.state.results.map(function(result) {
      return <li key={result.name}>{result.name}</li>;
    });

    return (
      <div>
        <h1>Add dependencies</h1>
        <input type="text" onChange={this.search}/> <Spinner isLoading={this.state.isLoading}/>
        {resultNodes}
      </div>
      );
  },
});

ReactDOM.render(<AddDependencies/>, document.getElementById('add-dependencies'));
