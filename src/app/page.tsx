"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Simulate a potential error for demonstration purposes
      throw new Error("Simulated build error");
    } catch (err) {
      console.error("An error occurred:", err);
      setError(err.message);
    }
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100">
        <h1 className="text-2xl font-bold text-red-600">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-2xl font-bold text-green-600">Hello world</h1>
    </div>
  );
}