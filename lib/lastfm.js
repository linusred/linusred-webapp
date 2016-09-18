let request = require('request-promise');
let queryString = require('querystring');
let config = require('config');
let _ = require('lodash');
const baseUrl = "http://ws.audioscrobbler.com/2.0/?";

module.exports = {
    getLatestSong: getLatestSong
};

function getLatestSong(req, res) {
    let options = {
        uri: baseUrl + queryString.stringify({
            method: "user.getRecentTracks",
            format: "json",
            user: config.get('lastfmUser'),
            api_key: config.get('lastfmKey')
        })
    };
    request(options).then(jsonResult => {
        let lastfmRaw = JSON.parse(jsonResult);

        res.send(parseFirstSongFromRaw(lastfmRaw))
    })
}

function parseFirstSongFromRaw(lastfmResponse) {
    let parsedTrack = {};
    let firstTrack = _.get(lastfmResponse.recenttracks.track, 0, {});
    parsedTrack.artist = firstTrack.artist["#text"];
    parsedTrack.song = firstTrack.name;
    if (firstTrack['@attr'].nowplaying == 'true') {
        parsedTrack.date = "Now Playing!"
    }
    else {
        parsedTrack.date = firstTrack.date["#text"];
    }
    parsedTrack.image = _.get(_.last(firstTrack.image), "#text");
    return parsedTrack;
}