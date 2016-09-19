'use strict';

var React = require('react');
var utils = require('../../lib/linus_utils');
var RepoList = require('./repoList');

module.exports = React.createClass({
    displayName: 'RepoListContainer',
    getInitialState: function () {
        return {
            repos: []
        }
    },
    componentDidMount: fetchRepoList,
    render: function render() {
        return (
            <RepoList repos={this.state.repos}/>
        );
    }
});

function fetchRepoList() {
    utils.fetchJson("/repoList").then(repoList => {
        this.setState({
            repos: repoList
        })
    }).catch(err => {
        console.log(err)
    })
}

