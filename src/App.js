import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [pepole, setPepole] = useState(data);
  const handleClick = () => {
    setPepole([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{pepole.length} Birthdays today</h3>
        <List pepole={pepole} />
        <button onClick={handleClick}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
