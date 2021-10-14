import React from "react";
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import './MapView.css';

// const GOOGLE_MAPS_API_KEY = 'AIzaSyDpomrdhlhMJsurmyNO4VeKep9cH-UrE98';

const TestText = ({ text }) => <div>{text}</div>;

const MapView = (props) => {
	const defaultCenter = {
		lat: 40.7128,
		lng: -74.0060,
	}
	const defaultZoom = 11;

  return (
		<>
       <h1>
           MAP GOES HERE!
       </h1>
			<div className='map-container'>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
					defaultCenter={defaultCenter}
					defaultZoom={props.zoom || defaultZoom}
				>
					<TestText
						lat={39.9526}
						lng={-75.1652}
						text='Philadelphia'
					/>
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
	center: {},
	zoom: 0,
}

export default MapView;
