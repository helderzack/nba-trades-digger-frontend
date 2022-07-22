import './PageHeader.css';

interface TeamPageProps {
    teamName?: string;
    teamLogoSrc?: string;
}

function PageHeader(props: TeamPageProps) {
    const teamName: JSX.Element = props.teamName === undefined ? <></>
    : <span>{props.teamName}</span>
    
    const teamLogoSrc: JSX.Element = props.teamLogoSrc === undefined ? <></>
        : <img src={props.teamLogoSrc} id='team-logo' alt={`${teamName} Logo`}/>
        
    return (<header className='header'>
        <div className='nba-logo-div'>
            <img src='https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png&w=100&h=100&scale=crop&cquality=40&location=origin' alt='NBA Logo' />
            <h1>NBA Trades</h1>
        </div>
        {teamLogoSrc}
        {teamName}
    </header>);
}

export default PageHeader;