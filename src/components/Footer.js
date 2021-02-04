import React, {useRef} from 'react'

function Footer() {
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

    return (
      <footer>
          <button className="button" onClick={showContainer} ref={refNewBtn}>
            Add new transaction
          </button>
        &copy; {new Date().getFullYear()} Expense Tracker - SOHYEON OH 오소현
      </footer>
    );
}

export default Footer
