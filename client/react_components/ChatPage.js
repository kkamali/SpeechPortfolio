var React = require('react')
var ReactBootstrap = require('react-bootstrap')
var axios = require('axios')

var ChatPage = React.createClass({
    getInitialState: function() {
        return {
            answer: "Hello! Please feel free to ask me a question!"
        }
    },
    handleFormSubmit: function(e) {
        e.preventDefault();
        var question = e.target.elements[0].value;
        axios.post('/questions', {question: question})
          .then(function (response) {
            this.setState({answer: response.data.print_answer});
            console.log(this.state.answer);
        }.bind(this))
    },
    render: function() {
        return (
            <div className="chat-area">
                <form onSubmit={ this.handleFormSubmit }>
                    <input type="text" placeholder="Ask your question!"/>
                    <input type="submit" value="Ask!"/>
                </form>
                <textarea value={ this.state.answer }></textarea>
            </div>
        )
    }
});

module.exports = ChatPage;
