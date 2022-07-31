import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </>

  );
}

export default App;
