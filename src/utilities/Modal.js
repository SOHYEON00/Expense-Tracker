import React from 'react'

function Modal({formType, header, contents, onToggleHandler}) {
    
    
    return (
    <>
    <div id="coverBackground"></div>
        <div className="modal">
            
            <div>
              <h3>{header}</h3>  
              <button onClick={onToggleHandler} >X</button>
            </div>
            
            {contents}
            
        </div>
        </>
    )
}

export default Modal
