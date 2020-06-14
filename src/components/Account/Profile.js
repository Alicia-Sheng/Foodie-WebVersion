import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({profile}) => {
    return(
        <div>
            <h3>Username: {profile.username}</h3>
            <h3>Email: {profile.email}</h3>
            <h3>Phone #: {profile.phone}</h3>
            <h3>Orders: </h3>
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