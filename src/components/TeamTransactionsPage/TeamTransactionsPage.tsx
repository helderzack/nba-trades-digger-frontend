import { useLocation } from 'react-router-dom';
import { Transaction } from '../../entities/Transaction';
import './TeamTransactionsPage.css';

interface LocationInterface {
    teamTransactions: Array<Transaction>;
}

function TeamTransactionsPage() {

    const location  = useLocation();
    const myState = location.state as LocationInterface;

    return (
        <>
            {myState.teamTransactions.map((transaction, index) => {
                return <div key={index}>
                    <span>{transaction.team.name}</span>
                    <span>{transaction.date.toString()}</span>
                    <span>{transaction.description}</span>
                </div>;
            })}
        </>
    );
}

export default TeamTransactionsPage;