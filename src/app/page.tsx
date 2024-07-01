"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useQuery, useMutation } from "convex/react";
import { ContainerCounter } from "../components/ContainerCounter";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default function Home() {
  const [counters, setCounters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCounters = useQuery("getCounters");
  const addCounter = useMutation("addCounter");
  const resetCounter = useMutation("resetCounter");
  const incrementCounter = useMutation("incrementCounter");

  useEffect(() => {
    if (fetchCounters) {
      setCounters(fetchCounters);
      setIsLoading(false);
    }
  }, [fetchCounters]);

  const handleAddCounter = async () => {
    await addCounter();
  };

  const handleResetCounter = async (id) => {
    await resetCounter({ id });
  };

  const handleIncrementCounter = async (id) => {
    await incrementCounter({ id });
  };

  return (
    <ConvexProvider client={convex}>
      <main className={`flex min-h-screen flex-col items-center justify-center p-4 ${inter.className}`}>
        <h1 className="text-2xl font-bold mb-4">Recycling Container Counter</h1>
        <button
          onClick={handleAddCounter}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Counter
        </button>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 w-full">
            {counters.map((counter) => (
              <ContainerCounter
                key={counter._id}
                counter={counter}
                onReset={() => handleResetCounter(counter._id)}
                onIncrement={() => handleIncrementCounter(counter._id)}
              />
            ))}
          </div>
        )}
      </main>
    </ConvexProvider>
  );
}