import './TeamCard.css';

interface TeamCardProps {
    teamFirstName: string;
    teamLastName: string;
    teamLogo: string;
}

function TeamCard(props: TeamCardProps) {
    return(
        <div className='container'>
            <img src={props.teamLogo} alt={`${props.teamFirstName} Logo`}/>
            <span>{`${props.teamFirstName} ${props.teamLastName}`}</span>
        </div>
    );
}

export default TeamCard;