import React, { useEffect, useState } from 'react';
import './App.css';
import { TransactionWrapper } from './entities/TransactionWrapper';

function App() {
  const [transactionsWrapper, setTransactionWrappers] = useState<TransactionWrapper[]>([]);

  useEffect(() => {
    fetch('/api/v1/fetchTrades')
      .then((response) => response.json()).then(data => setTransactionWrappers(data));
  }, []);

  return (
    <div>
      <header>
        <h1>NBA Trades Digger</h1>
        <main>
          {transactionsWrapper.map((transactionWrapper: TransactionWrapper, index) =>
            <div key={index}>
              {transactionWrapper.transactions.map((transaction, index) =>
                <h2>{`${index + 1} ${transaction.description}`}</h2>)}
            </div>)};
        </main>
      </header>
    </div>
  );
}

export default App;
