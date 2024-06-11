import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [myOpinion, setMyOpinion] = useState("0");
  const [friendOpinion, setFriendOpinion] = useState("0");
  const opinion = (+myOpinion + +friendOpinion) / 2;
  const tip = (bill * +opinion) / 100;

  function handleReset() {
    setBill("");
    setMyOpinion("0");
    setFriendOpinion("0");
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <Opinion opinion={myOpinion} onSetOpinion={setMyOpinion}>
        How did you like the service?
      </Opinion>
      <Opinion opinion={friendOpinion} onSetOpinion={setFriendOpinion}>
        How did your friend like the service?
      </Opinion>
      {bill > 0 && (
        <>
          <Total bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  // const arr = ["-", "/", "*", "+", ",", "="];
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value) || "")}
        placeholder="Bill value"
      />
      {/* <input
        type="text"
        value={bill}
        placeholder="Bill Value"
        onChange={
          (e) =>
            isNaN(+e.target.value) || e.target.value < 0
              ? ""
              : onSetBill(+e.target.value) // Once again thanks to Jonas JS course 😍
        }
      /> */}
      {/* <input
        placeholder="Bill value"
        type="text"
        value={bill}
        onChange={
          (e) =>
            onSetBill(
              isNaN(Number(e.target.value)) ? 0 : Number(e.target.value)
            )
          setBill(arr.includes(e.target.value) ? 0 : Number(e.target.value))
          setBill(Number(e.target.value))
        }
      /> */}
    </div>
  );
}
function Opinion({ children, opinion, onSetOpinion }) {
  return (
    <div>
      <label>{children}</label>
      <select value={opinion} onChange={(e) => onSetOpinion(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutly amazing! (20%)</option>
      </select>
    </div>
  );
}
function Total({ bill, tip }) {
  const total = bill + tip;
  return (
    <div>
      <h3>
        You pay ${total} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
