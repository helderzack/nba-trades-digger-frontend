import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
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
    const teamLogoSrc = teamsData.find((teamData) => teamData.teamLastName === teamLastName)?.teamLogo;

    teamTransactions = transactions
      .filter((transaction) => transaction.team.name === teamLastName) as unknown as Array<Transaction>;
    navigate(`team-transactions-page/${teamTransactions[0].team.name}`, { state: { teamTransactions,  teamLogoSrc } });
  }

  return (
    <>
      <Routes>
        <Route path='/'
          element={
            <>
              <PageHeader />
              <main className='main-content-container'>
                {
                  teamsData.map((teamData, index) =>
                    <div key={index} className='team-card' onClick={() => openTeamTransactionsPage(teamData.teamLastName)}>
                      <img src={teamData.teamLogo} alt={`${teamData.teamFirstName} Logo`} />
                      <span>{`${teamData.teamFirstName} ${teamData.teamLastName}`}</span>
                    </div>
                  )
                }
              </main>
            </>
          } />
        <Route path='/team-transactions-page/:teamName'
          element={<TeamTransactionsPage />} />
      </Routes>
    </>
  );
}

export default App;
