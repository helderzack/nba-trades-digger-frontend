import { useEffect, useState } from 'react';
import './App.css';
import TeamCard from './components/TeamCard/TeamCard';
import { Transaction } from './entities/Transaction';
import { getTeamsData } from './teams-data';

function App() {

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const teamsData = getTeamsData();

  useEffect(() => {
    fetch('/api/v1/fetchTrades')
      .then((response: Response) => response.json())
      .then((fetchedTransactions: Array<Transaction>) => {
        setTransactions(fetchedTransactions);
      });
  }, []);

  return (
    <div>
      <header>
        <h1>NBA Trades Digger</h1>
        <main className='main-content-container'>
          {/* {transactions.map((transaction, index) => {
            return <div key={index}>
              <h2>
                <img src={transaction.team.logos[0].href} />
                <span>{`${index + 1} ${transaction.description}`}</span>
              </h2>
            </div>;
          })} */}
          {
            teamsData.map((teamData, index) => <div key={index}>
              <TeamCard teamFirstName={teamData.teamFirstName} 
              teamLastName={teamData.teamLastName} 
              teamLogo={teamData.teamLogo}
              key={index}/>
            </div>)
          }
        </main>
      </header>
    </div>
  );
}

export default App;
