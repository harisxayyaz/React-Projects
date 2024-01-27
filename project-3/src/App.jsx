import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import GamePlay from "./components/GamePlay/GamePlay";

import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <div className="container">
      {isGameStarted ? <GamePlay /> : <HomePage toggle={toggleGamePlay} />}
    </div>
  );
}

export default App;
