import React, { useEffect, useState, useRef } from 'react';
import TransactionFactory from 'components/TransactionFactory';
import History from 'components/History';
import Balance from 'components/Balance';
import {dbService, TRANSACTIONS} from 'fBase';


function Home() {
    const [transactions, setTransactions] = useState([]);
    const refNewBtn = useRef();

    const showContainer = () => {
        const historyContainer = document.getElementById('historyComponent');
        historyContainer.classList.toggle('short');
        const container = document.getElementById('newTransactionContainer');
        container.classList.toggle('show');
  
        refNewBtn.current.innerText = 
          (container.classList.contains('show')) ? 
          'Cancel' :
          'Add new transaction';
      }

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
        <section className="addNewButton">
          <button className="button" onClick={showContainer} ref={refNewBtn}>
            Add new transaction
          </button>
        </section>
        <article id="newTransactionContainer" className="">
          <TransactionFactory />
        </article>
      </>
    );
}

export default Home
