import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import LogIn from "./components/LogIn";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;
