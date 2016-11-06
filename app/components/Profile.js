var React = require('react');
var UserInfo = require('./github/UserInfo');
var Repos = require('./github/Repos');
var Notes = require('./notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
    mixins: [ReactFireMixin],

    getInitialState: function() {
        return {
            notes: [],
            bio: {
                name: 'Kasia'
            },
            repos: ['a','b','c']
        }
    },

    componentDidMount: function() {
        this.ref = new Firebase('https://github-notetaker-c2e31.firebaseio.com/');
        this.bindAsArray(this.ref.child(this.props.params.username), 'notes');
    },

    componentWillUnmount: function() {
        this.unbind('notes');
    },

    handleAddNote: function(newNote) {
        this.ref.child(this.props.params.username).push(newNote);
    },

    handleRemoveNote: function(key) {
        this.ref.child(this.props.params.username).child(key).remove();
    },

    render: function() {
        return (
            <div className = "row">
                <div className = "col-md-4">
                    <UserInfo username = {this.props.params.username} bio = {this.state.bio}/>
                </div>
                <div className = "col-md-4">
                    <Repos username = {this.props.params.username} repos = {this.state.repos}/>
                </div>
                <div className = "col-md-4">
                    <Notes
                        username = {this.props.params.username}
                        notes = {this.state.notes}
                        addNote = {this.handleAddNote}
                        removeNote = {this.handleRemoveNote}
                    />
                </div>
            </div>
        );
    }
});

module.exports = Profile;