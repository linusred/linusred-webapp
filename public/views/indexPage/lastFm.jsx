'use strict';

var React = require('react');
var ImageCard = require('../common/imageCard');

module.exports = React.createClass({
    displayName: 'SectionTitle',
    render: function render() {
        return (
            <ImageCard imageUrl={this.props.imageUrl}
                       content={this.createContent()}
                       linkTitle="last.fm"
                       imageClass="card-image-lastfm"
                       link="http://last.fm/user/linusred"/>
        );
    },
    createContent: createContent
});

function createContent() {
    {
        return (
            <span className="last-fm-card-content">
                <p>Artist: {this.props.artist}</p>
                <p>Song: {this.props.song}</p>
                <p>Date Played: {this.props.datePlayed}</p>
            </span>
        )
    }
}
