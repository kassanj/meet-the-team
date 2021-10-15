import React from 'react';
import PropTypes from 'prop-types';
import './MapViewModal.css';
import '../Home.css';

const MapViewModal = ({ teamMember, showModal, hideModal }) => {
	return (
		<div className='map-modal-bg'>
			<div className={`map-modal map-modal-${showModal ? 'open' : 'closed'}`}>
				<div className='map-modal-body'>
					<div className='card'>
						<div className='card-content'>
							<div className='card-body mt-3'>
								<div className="profile">
									<img src={teamMember.avatar_url} />
								</div>
								<div className="card-title mt-2">
									<div className="profile-name">{teamMember.name}</div>
									<div className="profile-details-container">
										<div className="profile-details">{teamMember.location?.display}</div>
										<div className="profile-details">{teamMember.role}</div>
										<div className="profile-details">{teamMember.pronouns}</div>
									</div>
								</div>

								<div className="ml-5 card-subtitle mb-3">
									<div className="profile-sub-details">Started: {teamMember.date_of_admission}</div>
									<div className="profile-sub-details">Birthday: {teamMember.date_of_birth}</div>
								</div>

								<button className='btn btn-secondary mb-0' onClick={hideModal}>Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

MapViewModal.propTypes = {
	teamMember: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
		location: PropTypes.object
	}),
	showModal: PropTypes.bool,
	hideModal: PropTypes.func.isRequired,
}

MapViewModal.defaultProps = {
	teamMember: {
		location: {}
	},
	showModal: false,
}

export default MapViewModal;
