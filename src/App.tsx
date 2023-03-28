import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App(): ReactElement {
  return (
    <div className="bg-base-100 flex flex-col items-stretch min-h-screen">
      <Navbar title={document.title} />
      <div className="flex-1 bg-base-100 h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
