import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ profile }) => {

  const listItems = profile.orders.map((order) =>
    <li key={order.id}> <strong>{order.id}</strong> - <em>{order.status}</em></li>
  );

  return (
    <div>
      <h3>Username: {profile.username}</h3>
      <h3>Email: {profile.email}</h3>
      <h3>Phone#: {profile.phone}</h3>
      <h3>Orders: </h3>
      <ul>{listItems}</ul>
    </div>
  )
}

Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    orders: PropTypes.shape({
      id: PropTypes.string,
      status: PropTypes.string,
    })
  }).isRequired,
};


export default Profile