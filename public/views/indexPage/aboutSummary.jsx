'use strict';

var React = require('react');
var SectionTitle = require('../common/sectionTitle');
var LastFm = require('./lastFmContainer');
var RepoListContainer = require('./repoListContainer');
module.exports = React.createClass({
    displayName: 'AboutSummary',
    render: function render() {
        return (
            <div className="main-content">
                <div className="row center">
                    <div className="col m9 s8">
                        <SectionTitle title="Who I am" icon="cake"/>
                        <p className="flow-text free-text">
                            Hey! Online, I go by LinusRed. I'm a developer with a passion for just about everything
                            software.
                            Whether that's general web development, game programming, build tools, marrying data sets
                            together to create
                            insightful and intuitve dashboards,
                            or creating management tools that help with scaling massive distributed architectures, I'm
                            all
                            over it.
                        </p>
                    </div>
                    <div className="col m3 s4">
                        <SectionTitle title="Latest Scrobble" icon="hearing"/>
                        <LastFm/>
                    </div>
                </div>
                <div className="row center">
                    <div className="repo-list center col m9 s8">
                        <SectionTitle title="Recent Repo Updates" icon="folder"/>
                        <RepoListContainer/>
                    </div>
                    <div className="col m3 s4">
                        <SectionTitle title="Projects" icon="apps"/>
                        <p className="flow-text free-text">

                        </p>
                    </div>
                </div>
            </div>
        );
    }
});
