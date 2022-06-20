import Home from "./pages/Home";
import { AllGlobalDataProvider } from "./context/AllGlobalData";

function App() {
  return (

      <AllGlobalDataProvider>
        <div className="App">
          <Home />
        </div>
      </AllGlobalDataProvider>

  );
}

export default App;
