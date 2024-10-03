import React from "react";
import { useState } from "react";

const GroceryItems = (props) => {
  const [decoration, setDecoration] = useState("none");

  const handlecheckbox = (e) => {
   
    if (e.target.checked) {
      setDecoration("line-through");
    } else {
      setDecoration("none");
    }
  };


  const deleteItem=(e)=>{
   const text=e.target.parentNode.children[0].textContent;
   props.delete(text);
   
  }

  return (
    <div className="item">
      <label style={{ textDecoration: decoration }}>
        <input type="checkbox" onChange={handlecheckbox} />
        {props.itemname}
      </label>
      <button className="delete-btn" onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default GroceryItems;
