import React, { useState } from "react";
import './ListView.css';
import Modal from './Modal.js';
import { useTeamList } from './lib/useTeamList';
import Divider from './svgs/Divider.js';
import linkedInLogo from './assets/linkedin-icon.png';

const ListView = () => {

    const team = useTeamList();
    const [show, setShow] = useState(false);
    const [selectedTeamMember, setSelectedTeamMember] = useState({});
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);

    React.useEffect(() => {
        team.sort((a, b) => {
            if (a === b) {
                return 0;
            }
            return a.name < b.name ? -1 : 1;
        });

        setSearchResults(team);
    }, [team])

    React.useEffect(() => {
        const results = team.filter(person =>
            person.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    let profiles = searchResults.map((teammate) => {
        return (
            <div className="card col-md-3 mt-100">
                <div className="card-content">
                    <div className="card-body">
                        <div className="profile">
                            <img src={teammate.avatar_url} />
                        </div>
                        <div className="card-title mt-2">
                            <div className="profile-name">{teammate.name}</div>
                            <div className="profile-details-container">
                                <div className="profile-details">{teammate.location}</div>
                                <div className="profile-details">{teammate.role}</div>
                                <div className="profile-details">{teammate.pronouns}</div>
                            </div>
                        </div>

                        <div className="card-subtitle">
                            <div className="profile-sub-details">Started: {teammate.date_of_admission}</div>
                            <div className="profile-sub-details">Birthday: {teammate.date_of_birth}</div>
                        </div>

                        <div className="more-actions">
                            <div className="card-action">
                                <a
                                    className="cta-link"
                                    onClick={() => {
                                        setShow(true);
                                        setSelectedTeamMember(teammate);
                                    }}>
                                    See More +
                            </a>
                            </div>
                            <div className="linkedin-logo">
                                <img src={linkedInLogo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <>
            <div className="page-title-container-list mx-auto mt-8 col-md-10">
                <div className="searchbar">
                    <span>Search</span>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='container mx-auto mt-8 col-md-10 mt-50'>
                <div className="header">
                    <p>Explore team members by name, specialty, or interest</p>
                    <div><Divider /></div>
                </div>
                <div className="row justify-content-center pb-5">
                    {profiles}
                </div>
            </div>
            <Modal onClose={() => setShow(false)} show={show} teamMember={selectedTeamMember} />
        </>
    );
}

export default ListView;
