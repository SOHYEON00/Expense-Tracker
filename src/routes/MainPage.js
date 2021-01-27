import React, { useEffect, useState } from 'react';
import TransactionFactory from 'components/TransactionFactory';
import History from 'components/History';
import Balance from 'components/Balance';
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

    return (
      <>
        <Balance />
        <History transactions={transactions}/>
        <article>
          <h3>Add New Transaction</h3>
          <TransactionFactory />
        </article>
      </>
    );
}

export default MainPage
