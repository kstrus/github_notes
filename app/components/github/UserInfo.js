var React = require('react');

var UserInfo = React.createClass ({
    render: function() {
        return (
            <div>
                <p>USER INFO</p>
                <p>Username: {this.props.userName}</p>
                <p>Bio: {this.props.bio.name}</p>
            </div>
        )
    }
});

module.exports = UserInfo;