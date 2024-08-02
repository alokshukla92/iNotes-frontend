import React from "react";

const NoteItem = ({ dataObj }) => {
  const iconStyle = {
    fontSize: "1.2rem", 
    marginLeft: "0.5rem", 
    cursor: "pointer"
  };
  const handleClick = ()=>{
    console.log("Hey")
  }

  return (
    <div className="card my-3 mx-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title mb-0 me-2">{dataObj.title}</h5>
          <i className="bi bi-pencil-square" onClick={handleClick} style={iconStyle}></i>
          <i className="bi bi-trash3" style={iconStyle}></i>
        </div>
        <p className="card-text">{dataObj.description}</p>
      </div>
    </div>
  );
};

export default NoteItem;
