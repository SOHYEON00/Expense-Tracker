import React from 'react'

function Modal({header, contents, onToggleHandler}) {
  return (
    <>
      {/* <div id="coverBackground"></div> */}
      <div className="modal">
        <div>
          <h4>{header}</h4>
          <button onClick={onToggleHandler}>X</button>
        </div>
        {contents}
      </div>
    </>
  );
}

export default Modal

