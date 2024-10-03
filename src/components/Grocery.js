import React, { useEffect } from "react";
import { useState } from "react";
import GroceryItems from "./GroceryItems";

const Grocery = () => {
  const [itemName, setItemname] = useState("");
  const [itemlist, setitemlist] = useState(
    localStorage.getItem("listOfItems")
      ? JSON.parse(localStorage.getItem("listOfItems"))
      : []
  );

  const handleItemName = (e) => {
    setItemname(e.target.value);
  };

  const AddToList = () => {
    const newItem = itemName;
    setitemlist([...itemlist, newItem]);

    localStorage.setItem("listOfItems", JSON.stringify([...itemlist, newItem]));

    setItemname("");
  };

  function deleteItemFromList(text){
    const filterlist=itemlist.filter((name)=>name!=text
    )
    setitemlist(filterlist)
    localStorage.setItem("listOfItems", JSON.stringify(filterlist));

  }

  return (
    <div className="grocery-bud">
        <h1>Grocery Bud</h1>

        <div className="add-item-wrapper">
            <input 
            type="text" 
            value={itemName}
            onChange={handleItemName}
            className="add-item"/>


            <button onClick={AddToList}>
                Add item
            </button>
        </div>

        <div className="listitem">
            {itemlist.map((name, index) => {
            //   console.log(name);
            return <GroceryItems key={index} itemname={name} delete={deleteItemFromList}></GroceryItems>;
            })}
        </div>
    </div>
  );
};

export default Grocery;
