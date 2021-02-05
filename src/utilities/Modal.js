import React from 'react'

function Modal({header, contents, onToggleHandler}) {
  return (
    <>
      {/* <div id="coverBackground"></div> */}
      <div className="modal">
        <div className="modalContents">
          <h4>{header}</h4>
          <button onClick={onToggleHandler}>X</button>
        </div>
        <div className="modalContents flexColumn">{contents}</div>
        
      </div>
    </>
  );
}

export default Modal

