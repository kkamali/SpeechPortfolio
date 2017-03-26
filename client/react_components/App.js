var React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory,
    IndexRoute = ReactRouter.IndexRoute,
    Layout = require('./Layout'),
    ChatPage = require('./ChatPage'),
    NoPageFound = require('./NoPageFound');

    var App = React.createClass({
        render: function(){
          return (
              <Router history={hashHistory}>
                <Route path='/' component={Layout}>
                    <IndexRoute component={ChatPage}/>
                    <Route path="*" component={NoPageFound} />
                </Route>
              </Router>
            )
        }
    });

    module.exports = App;
