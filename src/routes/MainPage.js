import React, { useEffect, useState } from 'react';
import TransactionFactory from 'components/TransactionFactory';
import History from 'components/History';
import Balance from 'components/Balance';
import Nav from 'routes/Nav';
import {dbService, TRANSACTIONS} from 'fBase';


function MainPage() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
      dbService.collection(TRANSACTIONS).onSnapshot((snapshot) => {
        const transactionArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTransactions(transactionArray);
      });
    }, [])

    const showContainer = () => {
      const container = document.getElementById('newTransactionContainer');
      container.classList.toggle('show');
    }

    return (
      <>
        <Balance transactions={transactions} />
        <h3>History</h3>
        <History transactions={transactions} />
        <button className="button" onClick={showContainer}>Add new transaction</button>
        <article id="newTransactionContainer" className=''>
          <h3>Add New Transaction</h3>
          <TransactionFactory />
        </article>
      </>
    );
}

export default MainPage
