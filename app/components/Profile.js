var React = require('react');
var UserInfo = require('./github/UserInfo');
var Repos = require('./github/Repos');
var Notes = require('./notes/Notes');

var Profile = React.createClass({
    getInitialState: function() {
        return {
            notes: [1,2,3],
            bio: {
                name: 'Kasia'
            },
            repos: ['a','b','c']
        }
    },

    render: function() {
        return (
            <div className = "row">
                <div className = "col-md-4">
                    <UserInfo userName = {this.props.params.username} bio = {this.state.bio}/>
                </div>
                <div className = "col-md-4">
                    <Repos repos = {this.state.repos}/>
                </div>
                <div className = "col-md-4">
                    <Notes notes = {this.state.notes}/>
                </div>
            </div>
        );
    }
});

module.exports = Profile;