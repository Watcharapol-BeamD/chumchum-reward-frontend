import { useEffect, useState } from "react";

// Custom Hook
function useDetectInternet() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleCheck = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleCheck);
    window.addEventListener("offline", handleCheck);

    // Cleanup function
    return () => {
      window.removeEventListener("online", handleCheck);
      window.removeEventListener("offline", handleCheck);
    };
  }, []);

  return isOnline;
}

export default useDetectInternet;
