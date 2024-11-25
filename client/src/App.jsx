import React from "react";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-4/6">
          <Home />
        </div>
      </div>
    </>
  );
};

export default App;
