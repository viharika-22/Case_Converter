import { useState } from "react";
import "./styles.css";

export default function App() {
  const [casee, setCase] = useState(false);
  const [sen, setSen] = useState("");
  const [cased, setCased] = useState("");
  function handelChange(e) {
    setSen(e.target.value);
  }
  function handelCase() {
    if (casee) {
      setCased(sen.toLowerCase());
    } else {
      setCased(sen.toUpperCase());
    }
    setCase(!casee);
  }
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your sentence"
        value={sen}
        onChange={handelChange}
      />
      <button onClick={handelCase}>Reset Case</button>
      <br />
      {cased}
    </div>
  );
}
