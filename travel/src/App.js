import { useState } from "react";
import Flash from "./flash";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: true },
];


export default function App() {
  return (
    <>
      {/* <div className="app">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div> */}
      <Flash />

    </>
  )
}
function Logo() {
  return <h1>🌴 Far Away 👜</h1>
}
function Form() {
  const [descrption, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)
  function handleSubmit(e) {
    e.preventDefault();

    if (!descrption) return;

    const newItem = { descrption, quantity, packed: false, id: Date.now() };
    console.log(newItem)

    setDescription("");
    setQuantity(1);

  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😊 trip ?</h3>
      <select name="" id="" value={quantity} onChange={(e) => { setQuantity(Number(e.target.value)) }}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map
          ((num) => (
            <option value={num} key={num}>{num}</option>
          ))}
      </select>
      <input type="text" name="" id="" placeholder="..item" value={descrption} onChange={(e) => setDescription(e.target.value)} />
      <button>add</button>
    </form>
  )
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => <Item item={item} key={item.id} />)}
      </ul>
    </div>
  )
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>{item.quantity} {item.description}</span>
      <button>❌</button>
    </li>
  )
}
function Stats() {
  return (
    <footer className="stats">
      <em>
        👜 You have X items on your list, and you already packaed X (X%)
      </em>
    </footer>
  )
}