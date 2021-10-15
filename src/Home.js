import React, { useState } from 'react';
import './Home.css';
import { useTeamList } from './lib/useTeamList'
import Modal from './Modal.js';
import Life from './svgs/Life.js';
import CareNavigator from './svgs/CareNavigator.js';
import Divider from './svgs/Divider.js';
import linkedInLogo from './assets/linkedin-icon.png';
import hero from './assets/hero.png';
import './fonts/HKGrotesk/HKGrotesk-Bold.otf';

const Home = () => {
    const team = useTeamList();
    const [show, setShow] = useState(false);
    const [selectedTeamMember, setSelectedTeamMember] = useState({});

    let careGivers = team.filter(teammate => teammate.Group === "Caregiver Experience Pod");
    let leadership = team.filter(teammate => teammate.Group === 'Leadership')

    let profiles = careGivers.map((teammate) => {
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

    let profiles2 = leadership.map((teammate) => {
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

            <div className='page-title-container mx-auto mt-8  col-lg-9 col-md-10'>
                <div className="page-image col-md-6" >
                    <img src={hero} />
                </div>
                <div className="page-title col-md-6">
                    Meet the Product Team
                </div>
            </div>

            <div className='container mx-auto mt-8 col-md-10 mt-50'>
                <div className="header">
                    <div className="title">
                        <span><span className="pod-logo"><Life /></span>Product Leadership</span>
                    </div>
                    <p>They aren’t just great judges, they’re people too. But really, where would we be without our leaders. This text should in no way influence who our judges choose is the winner of this hackothon, right!?</p>
                    <div className="divider">
                        <Divider />
                    </div>
                </div>
                <div className="row justify-content-center pb-5">
                    {profiles2}
                </div>
            </div>

            <div className='container mx-auto mt-8 col-md-10 mt-50'>
                <div className="header">
                    <div className="title">
                        <span><span className="pod-logo"><CareNavigator /></span>Caregiver Experience Pod</span>
                    </div>
                    <p>The Caregiver Experience Pod is focused on building out a software for Spring Health Caregiver, to simplify their onboarding and admin experiences and to give them the tools and insights necessary to deliver the highest quality of care for our members.</p>
                    <div className="divider">
                        <Divider />
                    </div>
                </div>

                <div className="row justify-content-center pb-5">
                    {profiles}
                </div>
            </div>

            <Modal onClose={() => setShow(false)} show={show} teamMember={selectedTeamMember} />
        </>
    );
}

export default Home;
