import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { team } from '../dummyData';
import { getAddressData, getAddressesForMapView } from '../services/googleMaps';
import './MapView.css';

const TestText = ({ text }) => <div>{text}</div>;

const TeamMemberAvatar = ({ image, name }) => {
	return <img className='team-member-avatar' src={image} alt={name} />;
}

const MapView = (props) => {
	const [teamMembers, setTeamMembers] = useState([]);
	const [error, setError] = useState(false);
	
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
	}, []);

	console.log(teamMembers);

  return (
		<>
      <h1 className='display-1 text-center my-3'>Team Member Map</h1>
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
								image={teamMember.image}
								name={teamMember.name}
								lat={teamMember.location.lat}
								lng={teamMember.location.lng}
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
