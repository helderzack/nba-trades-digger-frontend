import { useLocation } from 'react-router-dom';
import { Transaction } from '../../entities/Transaction';
import PageHeader from '../PageHeader/PageHeader';
import './TeamTransactionsPage.css';

interface LocationInterface {
    teamTransactions: Array<Transaction>;
    teamLogoSrc: string;
}

function TeamTransactionsPage() {

    const location = useLocation();
    const state = location.state as LocationInterface;

    return (
        <>
        <PageHeader teamLogoSrc={state.teamLogoSrc} 
        teamName={state.teamTransactions[0].team.name}/>
            {state.teamTransactions.map((transaction, index) => {
                return <div key={index} className='team-transaction-card'>
                    {/* <img src={transaction.team.logos[0].href} alt={`${transaction.team.name} Logo`} /> */}
                    <span>{transaction.team.name}</span>
                    <span>{transaction.date.toString()}</span>
                    <span>{transaction.description}</span>
                </div>;
            })}
        </>
    );
}

export default TeamTransactionsPage;