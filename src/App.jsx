// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Pages
import Home from "./pages/Home";
import Continents from './pages/Continents';
import Country from './pages/Country';
import USAPage from './pages/USA';
import ItalyPage from './pages/Italy';
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
            {/* TODO Route per i singoli continent continenti */}
            <Route path='/countries/italy' element={<ItalyPage />} />
            {/* TODO Route per gli stati americani */}
            <Route path='/countries/usa' element={<USAPage />} />
            <Route path='/countries/:country' element={<Country />} />
          </Routes>
        </div>
      </Router>
    </AllGlobalDataProvider>

  );
}

export default App;
