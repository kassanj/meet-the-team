import './Home.css';
import FlowerPerson from './svgs/FlowerPerson.js';
import Plant from './svgs/Plant.js';
import './fonts/HKGrotesk/HKGrotesk-Bold.otf';

const team = [
    { name: 'Angelina Frederic', pronouns: 'They/Them', location: 'New Jersey, USA', image: 'https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg', role: 'Engineer' },
    { name: 'Samuel Plamer', pronouns: 'He/His', location: 'New York, USA', image: 'https://i.imgur.com/uppKNuF.jpg', role: 'Engineer' },
    { name: 'Martha Col', pronouns: 'She/Her', location: 'Florida, USA', image: 'https://i.imgur.com/HFpxxJz.jpg', role: 'Engineer' },
    { name: 'Nancy Markus', pronouns: 'She/Her', location: 'Porto, Portugal', image: 'https://i.imgur.com/oJmLthK.jpg', role: 'Engineer' },
    { name: 'Angelina Frederic', pronouns: 'She/Her', location: 'Texas, USA', image: 'https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg', role: 'Engineer' },
    { name: 'Samuel Plamer', pronouns: 'He/His', location: 'London, UK', image: 'https://i.imgur.com/uppKNuF.jpg', role: 'Engineer' },
    { name: 'Martha Col', pronouns: 'She/Her', location: 'New Jersey, USA', image: 'https://i.imgur.com/HFpxxJz.jpg', role: 'Engineer' },
    { name: 'Nancy Markus', pronouns: 'She/Her', location: 'New York, USA', image: 'https://i.imgur.com/oJmLthK.jpg', role: 'Engineer' },
]

const Home = () => {

    let profiles = team.map((teammate) => {
        return (
            <div className="card col-md-3 mt-100">
                <div className="card-content">
                    <div className="card-body">
                        <div className="profile">
                            <img src={teammate.image} />
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
                            <div className="profile-sub-details">Started: 8/20</div>
                            <div className="profile-sub-details">Birthday: Jan 4</div>
                        </div>

                        <div className="card-action">
                            <div className="cta-link">See More +</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });


    return (
        <>

            <div className="page-title-container">
                <div className="page-logo">
                    <FlowerPerson />
                </div>
                <div className="page-title">
                    Meet the Product Team
                </div>
            </div>
            <div className='container mx-auto mt-8 col-md-10 mt-50'>
                <div className="header">
                    <div className="title">
                        <span>Growth Pod<span className="pod-logo"><Plant /></span></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo</p>
                </div>
                <div className="row justify-content-center pb-5">
                    {profiles}
                </div>
            </div>
        </>
    );
}

export default Home;
