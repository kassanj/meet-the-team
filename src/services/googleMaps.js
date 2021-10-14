const baseGoogleMapsUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';

const buildURL = address => {
	const formattedAddress = encodeURIComponent(address);
	return `${baseGoogleMapsUrl}address=${formattedAddress}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`;
}

export const getLocation = async address => {
	try {
		const googleMapsResponse = await fetch(buildURL(address));
		return await googleMapsResponse.json();
	} catch (error) {
		return { error }
	}
}

export const getAddressData = async address => {
	const response = await getLocation(address);
	if (!response || !response.results || response?.error) {
		return { error: response?.error || 'Something went wrong' };
	}
	return response.results.map(item => {
		return {
			lat: item.geometry?.location?.lat,
			lng: item.geometry?.location?.lng,
			display: item.formatted_address,
		}
	});
}

export const addLocationDataToTeamMember = async teamMember => {
	const addressData = await getAddressData(teamMember.location);
	return {
		...teamMember,
		location: addressData[0],
	}
}

export const getAddressesForMapView = async teamMembers => {
	const filteredTeamMembers = teamMembers.filter(item => !!item.location);
	const results = await Promise.all(filteredTeamMembers.map(member => {
		return addLocationDataToTeamMember(member);
	}));
	return results.filter(member => !member.location?.error);
}
