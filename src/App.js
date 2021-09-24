import React,{useState} from "react";
import List from "./List";
import data from "./data"

function App() {
  const [peopole, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{peopole.length} Birthday Member</h3>
        <List  people={peopole}/>
        <button onClick={()=>setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
