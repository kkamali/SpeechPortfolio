var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Layout = React.createClass({
    render: function() {
        return (
            <div className="app-container">
                <header>
                    <h2>Hello!</h2>
                </header>
                <div className="app-content">{this.props.children}</div>
            </div>
        );
    }
});

module.exports = Layout;
