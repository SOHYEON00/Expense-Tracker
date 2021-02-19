import React, { useEffect, useState } from 'react';
import TransactionFactory from 'components/TransactionFactory';
import History from 'components/History';
import Balance from 'components/Balance';
import {dbService, TRANSACTIONS} from 'fBase';


function Home({SubmitBtn}) {
    const [transactions, setTransactions] = useState([]);
    const [btnValue, setBtnValue] = useState('Add new transaction');
    
    const showContainer = () => {
        const historyContainer = document.getElementById('historyComponent');
        historyContainer.classList.toggle('short');

        const container = document.getElementById('newTransactionContainer');
        container.classList.toggle('show');

        container.classList.contains('show') ?
          setBtnValue( 'Cancel') :
          setBtnValue( 'Add new transaction');
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
          <SubmitBtn type="button" className="button" onClick={showContainer} value={btnValue}>
          </SubmitBtn>
        </section>
        <article id="newTransactionContainer">
          <TransactionFactory SubmitBtn={SubmitBtn}/>
        </article>
      </>
    );
}

export default Home
