import './ListView.css';
import './fonts/HKGrotesk/HKGrotesk-Bold.otf';
import { useTeamList } from './lib/useTeamList';

const ListView = () => {
    const team = useTeamList()

    team.sort((a, b) => {
        if (a === b) {
            return 0;
        }
        return a.name < b.name ? -1 : 1;
    });

    let profiles = team.map((teammate) => {

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
                <div className="page-title">
                    Directory
               </div>
            </div>
            <div className='container mx-auto mt-8 col-md-10 mt-50'>
                <div className="header">
                    <div className="title">
                        <span>Search</span>
                    </div>
                </div>
                <div className="row justify-content-center pb-5">
                    {profiles}
                </div>
            </div>
        </>
    );
}

export default ListView;
