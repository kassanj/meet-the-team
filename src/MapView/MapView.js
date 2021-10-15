import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapViewModal from '../MapViewModal';
import { useTeamList } from '../lib/useTeamList'
import { getAddressesForMapView } from '../services/googleMaps';
import './MapView.css';

const TeamMemberAvatar = ({ teamMember, handleClick }) => {
	const { avatar_url, first_name, last_name } = teamMember;
	return (
		<img
			className='team-member-avatar'
			src={avatar_url}
			alt={`${first_name} ${last_name}`}
			onClick={() => handleClick(teamMember)}
		/>
	);
}

const MapView = (props) => {
	const [teamMembers, setTeamMembers] = useState([]);
	const [error, setError] = useState(false);
	const [selectedMember, setSelectedMember] = useState({});
	const [showModal, setShowModal] = useState(false);

	const team = useTeamList();
	
	useEffect(() => {
		const getAddress = async () => {
			const result = await getAddressesForMapView(team);
			if (result && !result.error) {
				setTeamMembers(result);
				setError(false);
			} else {
				setTeamMembers([]);
				setError(true);
			}
		}
		getAddress();
	}, [team]);

	useEffect(() => {
		if (selectedMember.first_name) {
			setShowModal(true);
		} else {
			setShowModal(false);
		}
	}, [selectedMember]);

	const handleAvatarClick = teamMember => {
		console.log(teamMember);
		setSelectedMember(teamMember);
	}

	const closeModal = () => {
		setSelectedMember({});
	}

  return (
		<>
      <h1 className='display-1 text-center my-3'>Team Member Map</h1>
			<MapViewModal teamMember={selectedMember} showModal={showModal} hideModal={closeModal}/>
			{error && <h2 className='text-danger text-center my-3'>Error: { error }</h2>}
			<div className='map-container'>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
					defaultCenter={props.center}
					defaultZoom={props.zoom}
				>
					{teamMembers.map((teamMember, i) => {
						return (
							<TeamMemberAvatar
								key={`avatar_${i}`}
								teamMember={teamMember}
								lat={teamMember.location?.lat}
								lng={teamMember.location?.lng}
								handleClick={handleAvatarClick}
							/>
						);
					})}
				</GoogleMapReact>
				
			</div>
		</>
  );
}

MapView.propTypes = {
	center: PropTypes.shape({
		lat: PropTypes.number,
		lng: PropTypes.number,
	}),
	zoom: PropTypes.number,
}

MapView.defaultProps = {
	center: {
		lat: 40.7128,
		lng: -74.0060,
	},
	zoom: 5,
}

export default MapView;
