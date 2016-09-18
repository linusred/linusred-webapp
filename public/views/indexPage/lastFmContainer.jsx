'use strict';

var React = require('react');
var LastFm = require('./lastFm');

module.exports = React.createClass({
    displayName: 'LastFmContainer',
    getInitialState: function () {
        return {
            song: "Loading..",
            artist: "Loading..",
            imageUrl: "",
            datePlayed: ""
        }
    },
    componentDidMount: fetchLastSong,
    render: function render() {
        return (
            <LastFm song={this.state.song}
                    artist={this.state.artist}
                    imageUrl={this.state.imageUrl}
                    datePlayed={this.state.datePlayed}
            />
        );
    }
});

function fetchLastSong() {
    fetch(new Request("/lastSong")).then(response => {
        if (response.ok) {
            return response.json()
        }
        return Promise.reject("api request failed")
    }).then(lastFmJson => {
        this.setState({
            song: lastFmJson.song,
            artist: lastFmJson.artist,
            datePlayed: lastFmJson.date,
            imageUrl: lastFmJson.image
        });
    }).catch(err => {
        console.log(err)
    })
}

