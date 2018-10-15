const React = require("react");
const Search = require("./children/Search.js");
const Saved = require("./children/Saved.js");
const helpers = require("./utils/helpers");

const Main = React.createClass ({
    getInitialState: function() {
        return { savedArticle: []};
    },
    getSaved: function(articles) {
        this.setState({ savedArticle: articles });
    },
    render: function() {
        return (
            <div className="main-container">
            <div className="container">
            <Search parentSaved={this.getSaved} />
                <Saved
                articles={this.state.savedArticle}
                parentSaved={this.getSaved}
                />
            </div>
        </div>
        );
    }
});