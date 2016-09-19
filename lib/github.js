let request = require('request-promise');
let queryString = require('querystring');
let config = require('config');
let _ = require('lodash');
let moment = require('moment');

const baseUrl = "https://api.github.com";

module.exports = {
    getLastThreeRepos: getLastThreeRepos
};

function getLastThreeRepos(req, res) {
    let username = config.get('githubUser');
    let options = {
        uri: baseUrl + `/users/${username}/repos?` + queryString.stringify({
            sort: "updated"
        }),
        headers: {
            "user-agent": username
        }
    };
    request(options).then(githubResult => {
        let githubRaw = JSON.parse(githubResult);
        res.send(parseLastThreeRepos(githubRaw))
    })
}

function parseLastThreeRepos(githubResponse) {
    let lastThreeRepos = _.slice(githubResponse, 0, 3);
    return lastThreeRepos.map(repo => {
        return {
            link: repo.html_url,
            name: repo.name,
            lastUpdated: parseDate(repo.updated_at),
            stars: repo.stargazers_count,
            language: repo.language
        }
    })
}

function parseDate(date) {
    return moment(date).format("MMM DD, YYYY");
}