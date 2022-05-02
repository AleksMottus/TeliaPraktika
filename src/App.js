import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Koikvoistlused from "./pages/Koikvoistlused";
import TulemusteLeht from "./pages/TulemusteLeht";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Avaleht />}/> 
        <Route path="/panustamine" element={<Koikvoistlused />}/> 
        <Route path="/tulemused" element={<TulemusteLeht/>}/>
      </Routes>
    </Router>
  );
}

export default App;
