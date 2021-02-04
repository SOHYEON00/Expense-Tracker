import React, { useEffect, useState } from 'react';
import TransactionFactory from 'components/TransactionFactory';
import History from 'components/History';
import Balance from 'components/Balance';
import {dbService, TRANSACTIONS} from 'fBase';


function Home() {
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
        <Balance transactions={transactions} />
        <History transactions={transactions} />
        <article id="newTransactionContainer" className="">
          <TransactionFactory />
        </article>
      </>
    );
}

export default Home
