import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getMondayDetails } from "./MondayCalculator";

function App() {
  const [count, setCount] = useState(0);
  const { date, mondayCount } = getMondayDetails();

  return (
    <>
      <div className="App">
        <h1>Monday Motivation</h1>
        <p>
          Today is {date}, and this is the {mondayCount}th Monday of the year!
        </p>
      </div>
    </>
  );
}

export default App;
