import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ProfileComponent from '../Components/ProfileComponent';

function Profile({ history }) {
  return (
    <div>
      <Header componente="Profile" />
      <ProfileComponent history={ history } />
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape(Object).isRequired,
};

export default Profile;
