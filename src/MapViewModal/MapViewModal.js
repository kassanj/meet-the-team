import React from 'react';
import PropTypes from 'prop-types';
import './MapViewModal.css';

const MapViewModal = ({ teamMember, showModal, hideModal }) => {
	return (
		<div className='map-modal-bg'>
		<div className={`text-center map-modal map-modal-${showModal ? 'open' : 'closed'}`}>
			<div className='card'>
				<div className='card-body map-modal-body mt-3'>

							<div className='mt-5'>
								<img src={teamMember.image} alt={teamMember.name} className='map-modal-image' />
							</div>

							<div className='my-3'>
								<p className='display-5'>{teamMember.name}</p>
							</div>

							<p className='h5'>{teamMember.location?.display}</p>
							<p className='h5'>{teamMember.pronouns}</p>

							<p className='h4 my-3'>{teamMember.role}</p>

							<button className='btn btn-danger mb-0' onClick={hideModal}>Close</button>
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
