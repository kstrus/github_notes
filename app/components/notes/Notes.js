var React = require('react');
var NotesList = require('./NotesList');
var AddNote = require('./AddNote');

var Notes = React.createClass ({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired,
        addNote: React.PropTypes.func.isRequired,
        removeNote: React.PropTypes.func.isRequired,
    },

    render: function() {
        return (
            <div>
                <h3>Notes for {this.props.username}</h3>
                <AddNote addNote = {this.props.addNote}/>
                <NotesList notes = {this.props.notes} removeNote = {this.props.removeNote}/>
            </div>
        )
    }
});

module.exports = Notes;