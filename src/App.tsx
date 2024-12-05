import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <SearchProvider>
      <div className="relative min-h-screen bg-radial-custom overflow-hidden">
        {/* <h1 className="text-2xl text-center py-3  text-slate-50">Meta movies</h1> */}
        <Header />
        {/* all my pages */}
        <Outlet />
      </div>
    </SearchProvider>
  );
}

export default App;
