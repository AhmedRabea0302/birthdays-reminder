import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [pepole, setPepole] = useState(data);
  return (
    <main>
      <section className="container">
        {pepole}
        <h3>0 Birthdays today</h3>
        <List pepole={pepole} />
        <button
          onClick={() => {
            console.log("GGG");
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
