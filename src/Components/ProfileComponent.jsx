import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ProfileComponent({ history }) {
  const result = localStorage.getItem('user');
  const [checkEmail, setCheckEmail] = useState('');

  useEffect(() => {
    if (result !== null) {
      // console.log('entrou');
      const { email } = JSON.parse(result); // transforma de string para objj
      setCheckEmail(email);
    }
  }, [result]);
  function redirect({ target }) {
    switch (target.name) {
    case 'done':
      history.push('/done-recipes');
      break;
    case 'favorite':
      history.push('/favorite-recipes');
      break;
    case 'logout':
      localStorage.clear('user');
      history.push('/');
      break;
    default: return '';
    }
  }

  return (
    <div>
      <h3 data-testid="profile-email">{ checkEmail }</h3>
      <button
        type="button"
        data-testid="profile-done-btn"
        name="done"
        onClick={ redirect }
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        name="favorite"
        onClick={ redirect }
      >
        Favorite Recipes
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        name="logout"
        onClick={ redirect }
      >
        Logout
      </button>
    </div>
  );
}

ProfileComponent.propTypes = {
  history: PropTypes.shape(Object).isRequired,
};

export default ProfileComponent;
