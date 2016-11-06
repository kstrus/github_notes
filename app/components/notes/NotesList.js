var React = require('react');

var NotesList = React.createClass({
    propTypes: {
        removeNote: React.PropTypes.func.isRequired
    },

    handleRemove: function(e) {
        this.props.removeNote(e.target.dataset.key);
    },

    render: function() {
        var self = this;
        var notes = this.props.notes.map(function(item, index) {
            return (
                <li className="list-group-item" key={index}>
                    { item['.value'] }
                    <button type="button" className="close" data-key={item['.key']} onClick={self.handleRemove}>&times;</button>
                </li>
            )
        });
        return (
            <ul className = "list-group">
                { notes }
            </ul>
        )
    }
});

module.exports = NotesList;