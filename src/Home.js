import React, { useState } from 'react';
import './Home.css';
import { useTeamList } from './lib/useTeamList'
import Modal from './Modal.js';
import Life from './svgs/Life.js';
import CareNavigator from './svgs/CareNavigator.js';
import Therapy from './svgs/Therapy.js';
import Divider from './svgs/Divider.js';
import linkedInLogo from './assets/linkedin-icon.png';
import hero from './assets/hero.png';
import Profile from './Profile';

const Home = () => {
    const team = useTeamList();
    const [show, setShow] = useState(false);
    const [selectedTeamMember, setSelectedTeamMember] = useState({});

    let careGivers = team.filter(teammate => teammate.group === "Caregiver Experience Pod");
    let leadership = team.filter(teammate => teammate.group === 'Leadership');
		let growth = team.filter(teammate => teammate.group === 'Growth Pod');

    let caregiverTeammates = careGivers.map((teammate, i) => {
        return <Profile teammate={teammate} key={`cg_${i}`} />;
    });

    let leadershipTeammates = leadership.map((teammate, i) => {
        return <Profile teammate={teammate} key={`ls_${i}`} />;
    });

		let growthTeammates = growth.map((teammate, i) => {
        return <Profile teammate={teammate} key={`ls_${i}`} />;
    });

    return (
        <>
            <div className='page-title-container mx-auto mt-8 col-md-10'>
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
                    <p>They aren’t just great judges, they’re people too. But really, where would we be without our leaders. This text should in no way influence who our judges choose as the winner of this hackathon, right!?</p>
                    <div className="divider">
                        <Divider />
                    </div>
                </div>
                <div className="row justify-content-center pb-5">
                    {leadershipTeammates}
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
                    {caregiverTeammates}
                </div>
            </div>

						<div className='container mx-auto mt-8 col-md-10 mt-50'>
                <div className="header">
                    <div className="title">
                        <span><span className="pod-logo"><Therapy /></span>Growth Pod</span>
                    </div>
                    <p>The Growth Pod is focused on building tools to expand our outreach, improve customer experience, and impact the greatest number of lives possible.</p>
                    <div className="divider">
                        <Divider />
                    </div>
                </div>

                <div className="row justify-content-center pb-5">
                    {growthTeammates}
                </div>
            </div>

            <Modal onClose={() => setShow(false)} show={show} teamMember={selectedTeamMember} />
        </>
    );
}

export default Home;
