const React = require("react");
const Results = require('./Results.js');

const Query = React.createClass({
  render: function() {
	return (
	  <div>
		<Results 
		  articles={this.props.articleArray}
		  parentSaved={this.props.parentSaved} 
		/>
	  </div>
	);
  }
});


module.exports = Query;