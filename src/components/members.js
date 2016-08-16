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

var Members = React.createClass({
  render: function() {
    return (
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
    );
  }
});

module.exports = Members;
