import { GlobalDataProvider } from './context/globalDataContext'
import Home from "./pages/Home";

function App() {
  return (
    <GlobalDataProvider>
      <div className="App">
        <Home />
      </div>
    </GlobalDataProvider>
  );
}

export default App;
