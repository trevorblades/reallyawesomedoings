var React = require('react');

var members = [
  {
    name: 'Miguel Barbosa',
    slug: 'miguel',
    twitter: 'yeahfilms'
  },
  {
    name: 'Trevor Blades',
    slug: 'trevor',
    twitter: 'trevorblades'
  },
  {
    name: 'Marvin Sanchez',
    slug: 'marvin',
    twitter: 'marvinsanchez'
  }
];

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
          <div className="rad-members">
            {members.map(function(member, index) {
              return (
                <div className="rad-member" key={index}>
                  <img className="rad-member-profile"
                      src={'assets/members/' + member.slug + '.jpg'}/>
                  <h4>{member.name}</h4>
                  <h5>
                    <a href={'https://twitter.com/' + member.twitter}
                        target="_blank">
                      <img src="assets/twitter.svg"/>
                      <span>{'@' + member.twitter}</span>
                    </a>
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
