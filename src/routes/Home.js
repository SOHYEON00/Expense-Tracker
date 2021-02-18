import React, { useEffect, useState, useRef } from 'react';
import TransactionFactory from 'components/TransactionFactory';
import History from 'components/History';
import Balance from 'components/Balance';
import {dbService, TRANSACTIONS} from 'fBase';
import {changeBtnColor} from 'utilities/changeBtnColor';


function Home({mainColor}) {
    const [transactions, setTransactions] = useState([]);
    const refNewBtn = useRef();
    const {SubmitBtn} = changeBtnColor({ mainColor });

    const showContainer = () => {
        const historyContainer = document.getElementById('historyComponent');
        historyContainer.classList.toggle('short');
        const container = document.getElementById('newTransactionContainer');
        container.classList.toggle('show');
  
        refNewBtn.current.value = 
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
          <SubmitBtn type="button" className="button" onClick={showContainer} ref={refNewBtn} value='Add new transaction'>
          </SubmitBtn>
        </section>
        <article id="newTransactionContainer">
          <TransactionFactory SubmitBtn={SubmitBtn}/>
        </article>
      </>
    );
}

export default Home
