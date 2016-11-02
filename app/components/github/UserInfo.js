var React = require('react');

var UserInfo = React.createClass ({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <div>
                <h3>User Profile</h3>
                <p>Username: {this.props.username}</p>
                <p>Bio: {this.props.bio.name}</p>
            </div>
        )
    }
});

module.exports = UserInfo;