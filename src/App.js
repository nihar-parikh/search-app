import "./App.css";
import Signup from "./pages/Signup";
import Table from "./Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="app">
      {/* <button onClick={handleAsc}>asc</button>
      <button onClick={handleDsc}>dsc</button> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
