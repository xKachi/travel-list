import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearlist() {
    const confirm = window.confirm(
      "Are you sure, you want to delete all items"
    );

    if (confirm) setItems([]);
  }

  /*
  First: For the item with the id being toggled change the value of the of the packed property.
  Second: Return the other objects without the id, just as they are.
  */
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearlist={handleClearlist}
      />
      <Stats items={items} />
    </div>
  );
}
