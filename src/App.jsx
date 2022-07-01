// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Pages
import Home from "./pages/Home";
import Continents from './pages/Continents';
import Country from './pages/Country';
import USAPage from './pages/USA';
// Contexts
import { AllGlobalDataProvider } from "./context/AllGlobalData";

function App() {
  return (
    <AllGlobalDataProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/continents' element={<Continents />} />    
            <Route path='/countries/usa' element={<USAPage />} />
            <Route path='/countries/:country' element={<Country />} />
          </Routes>
        </div>
      </Router>
    </AllGlobalDataProvider>
  );
}

export default App;
