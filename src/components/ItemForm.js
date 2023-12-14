import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [newItem, SetNewItem] = useState({
    id: uuid(),
    name: "",
    category: "produce",
  })

  function handleInputChange(event) {
    const name = event.target.name
    const value = event.target.value

    SetNewItem({
      ...newItem,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    onItemFormSubmit(newItem)
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={newItem.name} onChange={handleInputChange} />
      </label>

      <label>
        Category:
        <select name="category" value={newItem.category} onChange={handleInputChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
