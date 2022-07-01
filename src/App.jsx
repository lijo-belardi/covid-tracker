// React
import { BrowserRouter as Router } from 'react-router-dom'
// My Components
import Header from './components/Header';
import Footer from './components/Footer';
// Contexts
import { AllGlobalDataProvider } from "./context/AllGlobalData";
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <AllGlobalDataProvider>
      <Router>
        <div className="App">
          <Header />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </AllGlobalDataProvider>
  );
}

export default App;
