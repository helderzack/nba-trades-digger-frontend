const LOGO_URL = 'https://a.espncdn.com/i/teamlogos/nba/500/';

const TEAMS_DATA = [
        {
                teamFirstName: 'Atlanta',
                teamLastName: 'Hawks',
                teamLogo: `${LOGO_URL}atl.png`
        },
        {
                teamFirstName: 'Boston',
                teamLastName: 'Celtics',
                teamLogo: `${LOGO_URL}bos.png`
        },
        {
                teamFirstName: 'Brooklyn',
                teamLastName: 'Nets',
                teamLogo: `${LOGO_URL}bkn.png`
        },
        {
                teamFirstName: 'Charlotte',
                teamLastName: 'Hornets',
                teamLogo: `${LOGO_URL}cha.png`
        },
        {
                teamFirstName: 'Chicago',
                teamLastName: 'Bulls',
                teamLogo: `${LOGO_URL}chi.png`
        },
        {
                teamFirstName: 'Cleveland',
                teamLastName: 'Cavaliers',
                teamLogo: `${LOGO_URL}cle.png`
        },
        {
                teamFirstName: 'Dallas',
                teamLastName: 'Mavericks',
                teamLogo: `${LOGO_URL}dal.png`
        },
        {
                teamFirstName: 'Denver',
                teamLastName: 'Nuggets',
                teamLogo: `${LOGO_URL}den.png`
        },
        {
                teamFirstName: 'Detroit',
                teamLastName: 'Pistons',
                teamLogo: `${LOGO_URL}det.png`
        },
        {
                teamFirstName: 'Golden State',
                teamLastName: 'Warriors',
                teamLogo: `${LOGO_URL}gs.png`
        },
        {
                teamFirstName: 'Houston',
                teamLastName: 'Rockets',
                teamLogo: `${LOGO_URL}hou.png`
        },
        {
                teamFirstName: 'Indiana',
                teamLastName: 'Pacers',
                teamLogo: `${LOGO_URL}ind.png`
        },
        {
                teamFirstName: 'Los Angeles',
                teamLastName: 'Clippers',
                teamLogo: `${LOGO_URL}lac.png`
        },
        {
                teamFirstName: 'Los Angeles',
                teamLastName: 'Lakers',
                teamLogo: `${LOGO_URL}lal.png`
        },
        {
                teamFirstName: 'Memphis',
                teamLastName: 'Grizzlies',
                teamLogo: `${LOGO_URL}mem.png`
        },
        {
                teamFirstName: 'Miami',
                teamLastName: 'Heat',
                teamLogo: `${LOGO_URL}mia.png`
        },
        {
                teamFirstName: 'Milwaukee',
                teamLastName: 'Bucks',
                teamLogo: `${LOGO_URL}mil.png`
        },
        {
                teamFirstName: 'Minnesota',
                teamLastName: 'Timberwolves',
                teamLogo: `${LOGO_URL}min.png`
        },
        {
                teamFirstName: 'New Orleans',
                teamLastName: 'Pelicans',
                teamLogo: `${LOGO_URL}no.png`
        },
        {
                teamFirstName: 'New York',
                teamLastName: 'Knicks',
                teamLogo: `${LOGO_URL}ny.png`
        },
        {
                teamFirstName: 'Oklahoma City',
                teamLastName: 'Thunder',
                teamLogo: `${LOGO_URL}okc.png`
        },
        {
                teamFirstName: 'Orlando',
                teamLastName: 'Magic',
                teamLogo: `${LOGO_URL}orl.png`
        },
        {
                teamFirstName: 'Philadelphia',
                teamLastName: '76ers',
                teamLogo: `${LOGO_URL}phi.png`
        },
        {
                teamFirstName: 'Phoenix',
                teamLastName: 'Suns',
                teamLogo: `${LOGO_URL}phx.png`
        },
        {
                teamFirstName: 'Portland',
                teamLastName: 'Trail Blazers',
                teamLogo: `${LOGO_URL}por.png`
        },
        {
                teamFirstName: 'Sacramento',
                teamLastName: 'Kings',
                teamLogo: `${LOGO_URL}sac.png`
        },
        {
                teamFirstName: 'San Antonio',
                teamLastName: 'Spurs',
                teamLogo: `${LOGO_URL}sa.png`
        },
        {
                teamFirstName: 'Toronto',
                teamLastName: 'Raptors',
                teamLogo: `${LOGO_URL}tor.png`
        },
        {
                teamFirstName: 'Utah',
                teamLastName: 'Jazz',
                teamLogo: `${LOGO_URL}utah.png`
        },
        {
                teamFirstName: 'Washington',
                teamLastName: 'Wizards',
                teamLogo: `${LOGO_URL}wsh.png`
        }
]

export function getTeamsData() {
        return TEAMS_DATA;
}