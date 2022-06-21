// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Pages
import Home from "./pages/Home";
import Country from './pages/Country';
// Contexts
import { AllGlobalDataProvider } from "./context/AllGlobalData";

function App() {
  return (
    <AllGlobalDataProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/countries/:country' element={<Country />} />
          </Routes>
        </div>
      </Router>
    </AllGlobalDataProvider>

  );
}

export default App;
