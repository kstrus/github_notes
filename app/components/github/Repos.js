var React = require('react');

var Repos = React.createClass ({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },

    render: function() {
        return (
            <div>
                <h3>User Repos</h3>
                <p>Repos: {this.props.repos}</p>
            </div>
        )
    }
});

module.exports = Repos;