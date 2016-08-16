var React = require('react');

var members = {
  miguel: {
    name: 'Miguel Barbosa',
    twitter: 'yeahfilms'
  },
  trevor: {
    name: 'Trevor Blades',
    twitter: 'trevorblades'
  },
  joe: {
    name: 'Joseph Homsy',
    twitter: 'thevoyager3'
  },
  marvin: {
    name: 'Marvin Sanchez',
    twitter: 'marvinsanchez'
  },
  murray: {
    name: 'Matheson Murray',
    twitter: 'mathesonmurray'
  }
};

var Members = React.createClass({
  render: function() {
    return (
      <div className="rad-members">
        {Object.keys(members).map(function(key, index) {
          var member = members[key];
          return (
            <div className="rad-member" key={index}>
              <img className="rad-member-profile"
                  src={'assets/members/' + key + '.jpg'}/>
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
    );
  }
});

module.exports = Members;
