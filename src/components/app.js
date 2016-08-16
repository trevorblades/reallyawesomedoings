var React = require('react');

var Members = require('./members');

var App = React.createClass({
  render: function() {
    return (
      <div className="rad-app">
        <div className="rad-cover">
          <div className="rad-cover-logo">
            <img src="assets/logo.svg"/>
          </div>
        </div>
        <div className="rad-content">
          <div className="rad-content-wrap">
            <h1>A gang of creatives</h1>
            <p>RAD is a group of creators with diverse skill sets. We make awesome doings for a living and work on cool projects in our spare time.</p>
          </div>
          <Members/>
        </div>
      </div>
    );
  }
});

module.exports = App;
