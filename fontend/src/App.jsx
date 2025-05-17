import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admission from "./pages/Admission";
import Receiveout from "./pages/Receiveout";
import Sidebar from "./_components/Sidebar";
import TableProduct from "./pages/TableProduct";
import History from "./pages/History";


function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '200px', padding: '1rem', flexGrow: 1 }}>
          <Routes>
            <Route path="/admission" element={<Admission />} />
            <Route path="/" element={<TableProduct />} />
            <Route path="/Receiveout" element={<Receiveout />} />
            <Route path="/History" element={<History />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;












