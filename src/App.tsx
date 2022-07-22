import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import TeamTransactionsPage from './components/TeamTransactionsPage/TeamTransactionsPage';
import { Transaction } from './entities/Transaction';
import { getTeamsData } from './teams-data';

function App() {

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const teamsData = getTeamsData();
  let navigate = useNavigate();
  let teamTransactions: Array<Transaction> = [];

  useEffect(() => {
    fetch('/api/v1/fetchTrades')
      .then((response: Response) => response.json())
      .then((fetchedTransactions: Array<Transaction>) => {
        setTransactions(fetchedTransactions);
      });
  }, []);

  const openTeamTransactionsPage = (teamLastName: string) => {
    teamTransactions = transactions
      .filter((transaction) => transaction.team.name === teamLastName) as unknown as Array<Transaction>;
    navigate(`team-transactions-page/${teamTransactions[0].team.name}`, {state: { teamTransactions }});
  }

  return (
    <div>
      <header>
        <div className='header-div'>
          <img src='https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png&w=100&h=100&scale=crop&cquality=40&location=origin' alt='NBA Logo' />
          <h1>NBA Trades Digger</h1>
        </div>
      </header>
      <main className='main-content-container'>
        <Routes>
          <Route path='/'
            element={
              teamsData.map((teamData, index) =>
                <div key={index} onClick={() => openTeamTransactionsPage(teamData.teamLastName)}>
                  <img src={teamData.teamLogo} alt={`${teamData.teamFirstName} Logo`} />
                  <span>{`${teamData.teamFirstName} ${teamData.teamLastName}`}</span>
                </div>
              )
            }>
          </Route>
          <Route path='/team-transactions-page/:teamName'
            element={<TeamTransactionsPage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
