var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var NotFound = React.createClass({
    render: function() {
        return (
            <div className="not-found">
                <h1>404</h1>
                <h2>Page not found!</h2>
                <p>
                    <Link to="/">Go back to the main page</Link>
                </p>
            </div>
        );
    }
});

module.exports = NotFound;
