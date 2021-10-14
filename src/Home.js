import './Home.css';
import { useTeamList } from './lib/useTeamList'

const Home = () => {
    const team = useTeamList()
    let profiles = team.map((teammate) => {
        return (
            <div className="card col-md-3 mt-100">
                <div className="card-content">
                    <div className="card-body p-0">
                        <div className="profile">
                            <img src={teammate.avatar_url} />
                        </div>
                        <div className="card-title mt-4">
                            <div className="profile-name">{teammate.name}</div>
                            <small>{teammate.location}</small><br />
                            <small>{teammate.role}</small><br />
                            <small>{teammate.pronouns}</small><br />
                        </div>
                        <br />
                        <div className="card-subtitle">
                            <small className="text-muted">Started At: 8/20</small><br />
                            <small className="text-muted">Birthday: Jan 4</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    });


    return (
        <>
            <div className='container mx-auto mt-5 col-md-10 mt-100'>
                <div className="header">
                    <div className="title">Member Experience - Engagement</div>
                    <p>Lorem ipsum blah blah blah blah.</p>
                </div>
                <div className="row justify-content-center pb-5">
                    {profiles}
                </div>
            </div>
        </>
    );
}

export default Home;
