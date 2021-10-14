import './ListView.css';

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


const ListView = () => {

    let profiles = team.map((teammate) => {

        return (
            <div className="card-content">
                <div className="card-body p-0">
                    <div className="profile">
                        <img src={teammate.image} />
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
