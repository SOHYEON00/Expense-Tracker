import React from 'react'

function Modal({header, contents, onModalHandler}) {
  return (
    <>
      <div className="modal">
        <div className="modalContents">
          <h4>{header}</h4>
          <button onClick={onModalHandler}>X</button>
        </div>
        <div className="modalContents flexColumn">{contents}</div>
        
      </div>
    </>
  );
}

export default Modal

