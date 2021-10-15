import React from 'react';
import PropTypes from 'prop-types';
import '../Home.css';
import linkedInLogo from '../assets/linkedin-icon.png';

const Profile = ({ teammate }) => {
	const { avatar_url, name, location, role, pronouns, date_of_admission, date_of_birth } = teammate;
	return (
		<div className="card col-md-3 mt-100">
      <div className="card-content">
        <div className="card-body">
          <div className="profile">
            <img src={avatar_url} />
         	</div>
          <div className="card-title mt-2">
            <div className="profile-name">{name}</div>
            <div className="profile-details-container">
              <div className="profile-details">{location}</div>
              <div className="profile-details">{role}</div>
              <div className="profile-details">{pronouns}</div>
          	</div>
          </div>

          <div className="more-actions">
            <div className="card-subtitle">
              <div className="profile-sub-details">Started: {date_of_admission}</div>
              <div className="profile-sub-details">Birthday: {date_of_birth}</div>
            </div>
            <div className="linkedin-logo">
              <img src={linkedInLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
	);
}

Profile.propTypes = {
	teammate: PropTypes.object,
}

Profile.defaultProps = {
	teammate: {}
}

export default Profile;
