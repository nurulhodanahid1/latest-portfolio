import { Routes, Route, Link } from "react-router-dom";
import ProjectDetails from './components/Pages/ProjectDetails/ProjectDetails';
import Home from './components/Pages/Home/Home';

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
