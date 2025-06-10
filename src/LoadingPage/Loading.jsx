import React, { useEffect, useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      ) : (
        <div className="text-green-600 text-2xl font-semibold">Loaded!</div>
      )}
    </div>
  );
};

export default Loading;
