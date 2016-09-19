'use strict';

var React = require('react');
var Preloader = require('./preloader');
module.exports = React.createClass({
    displayName: 'SectionTitle',
    render: function render() {
        return (
            <div className="card grey darken-3">
                {(()=> {
                    return this.props.imageUrl == "" ?
                        (<Preloader/>) :
                        (<img className={this.props.imageClass} src={this.props.imageUrl}/>)
                })()}

                <div className="card-content">
                    {this.props.content}
                </div>
                <div className="card-stacked">
                    <div className="card-action grey darken-3">
                        <a href={this.props.link}>{this.props.linkTitle}</a>
                    </div>
                </div>
            </div>
        );
    }
});

