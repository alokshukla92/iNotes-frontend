import React from 'react'

const NoteItem = ({dataObj}) => {
    return (
        <div className="card my-3 mx-3" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">{dataObj.title}</h5>
            <p className="card-text">
                {dataObj.description}
            </p>
          </div>
        </div>
      );
    }

export default NoteItem
