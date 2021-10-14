import './ListView.css';
import { useTeamList } from './lib/useTeamList';

const ListView = () => {
    const team = useTeamList()
    let profiles = team.map((teammate) => {

        return (
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

        )
    });


    return (
        <>
            <div className="header">
                <div className="title">Directory</div>
                <p>Search Bar</p>
            </div>
            <div className="row justify-content-center pb-5">
                {profiles}
            </div>
        </>
    );
}

export default ListView;
