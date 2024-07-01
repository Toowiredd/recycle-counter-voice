"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

const containerTypes = ["HDPE 2", "PET 1", "Glass", "Aluminum", "Steel"];

export default function Home() {
  const [counters, setCounters] = useState(
    containerTypes.reduce((acc, type) => {
      acc[type] = 0;
      return acc;
    }, {} as Record<string, number>)
  );

  const incrementCounter = (type: string) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [type]: prevCounters[type] + 1,
    }));
  };

  const resetCounter = (type: string) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [type]: 0,
    }));
  };

  const resetAllCounters = () => {
    setCounters(
      containerTypes.reduce((acc, type) => {
        acc[type] = 0;
        return acc;
      }, {} as Record<string, number>)
    );
  };

  useEffect(() => {
    // Placeholder for integration with Convex BaaS or local caching
  }, [counters]);

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1 className={styles.title}>Recycling Container Counter</h1>
      <div className={styles.counters}>
        {containerTypes.map((type) => (
          <div key={type} className={styles.counter}>
            <h2>{type}</h2>
            <p>{counters[type]}</p>
            <button onClick={() => incrementCounter(type)}>Increment</button>
            <button onClick={() => resetCounter(type)}>Reset</button>
          </div>
        ))}
      </div>
      <button onClick={resetAllCounters} className={styles.resetAll}>
        Reset All
      </button>
    </main>
  );
}