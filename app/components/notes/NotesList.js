var React = require('react');

var NotesList = React.createClass({
    render: function() {
        var notes = this.props.notes.map(function(item, index) {
            return <li className = "list-group-item" key = {index}>{ item['.value'] }</li>
        });
        return (
            <ul className = "list-group">
                { notes }
            </ul>
        )
    }
});

module.exports = NotesList;