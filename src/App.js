import "./App.css";
import Home from "./Page/Home";
import { useState } from "react";

function App() {
  const [showLodding, setshowLodding] = useState(true);
  setTimeout(() => {
    setshowLodding(false);
  }, 2500);

  return (
    <div className="bg-[#fff] w-full h-full relative">
      <Home />
    </div>
  );
}

export default App;
