import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children }) => {
  const handleName = (name) => {
    alert(`Profile user name is ${name}`);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {children}
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Click here my child</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'Yassir km',
  bio: 'smartass',
  profession: 'doc',
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
