import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import LoadingScreen from "./pages/loadpage/LoadingScreen";
import { Header, Footer } from "./components/index";

function App() {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className="min-h-screen flex flex-col justify-between bg-zinc-500">
      <div className="w-full">
        <Header />
        <main className="flex-grow p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
