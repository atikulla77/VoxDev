import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./App.css";
import Home from "./Page/Home";
import { useEffect, useState } from "react";

function App ()
{
  const [ showLoading, setShowLoading ] = useState(true);

  useEffect(() =>
  {
    const timer = setTimeout(() =>
    {
      setShowLoading(false);
    }, 2500);

    return () => clearTimeout(timer); // Cleanup timeout to prevent memory leaks
  }, []);

  useEffect(() =>
  {
    Aos.init({
      duration: 1500, // Animation duration
    });

    Aos.refresh(); // Refresh AOS animations on page update
  }, []);

  return (
    <div className="bg-[#fff] w-full h-full relative">
      {showLoading ? (
        <div className="flex items-center justify-center h-screen">
          {/* Pimple-style Loader */}
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-400"></div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
