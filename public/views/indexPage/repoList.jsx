'use strict';

var React = require('react');
var ImageCard = require('../common/imageCard');

module.exports = React.createClass({
    displayName: 'RepoList',
    render: function render() {
        return (
            <div className="row">
                {listCreate(this.props.repos)}
            </div>);
    },
    createContent: createContent
});

function listCreate(repoList) {
    return repoList.map(repo => {
        return (
            <div className="col s4">
                <ImageCard imageClass="card-image-repo" imageUrl="images/githubLogo.png" content={createContent(repo)}
                           link={repo.link} linkTitle="Github"/>
            </div>
        )
    });
}

function createContent(repo) {
    return (
        <div className="git-repo-card">
            <p className="red darken-3">{repo.name}</p>
            <p>Last Updated: {repo.lastUpdated}</p>
            <p>{repo.language == "" ? "" : "Language: " + repo.language }</p>
        </div>
    )
}
