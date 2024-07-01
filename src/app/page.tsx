"use client";

import { useState, useEffect } from "react";
import { ConvexProvider, useConvex } from "convex/react";
import convexConfig from "../../convex.json";
import { ConvexReactClient } from "convex/react";
import { useQuery, useMutation } from "../../convex/_generated/react";
import { ContainerCounter } from "../components/ContainerCounter";

const convex = new ConvexReactClient(convexConfig.origin);

export default function Home() {
  const [counters, setCounters] = useState({
    hdpe2: 0,
    pet1: 0,
    glass: 0,
    aluminum: 0,
    steel: 0,
  });

  const incrementCounter = (type) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [type]: prevCounters[type] + 1,
    }));
  };

  const resetCounter = (type) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [type]: 0,
    }));
  };

  const undoCounter = (type) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [type]: prevCounters[type] > 0 ? prevCounters[type] - 1 : 0,
    }));
  };

  return (
    <ConvexProvider client={convex}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Recycling Container Counter</h1>
        <div className="grid grid-cols-1 gap-4">
          {Object.keys(counters).map((type) => (
            <ContainerCounter
              key={type}
              type={type}
              count={counters[type]}
              onIncrement={() => incrementCounter(type)}
              onReset={() => resetCounter(type)}
              onUndo={() => undoCounter(type)}
            />
          ))}
        </div>
      </div>
    </ConvexProvider>
  );
}