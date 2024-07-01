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
    try {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [type]: prevCounters[type] + 1,
      }));
    } catch (error) {
      console.error(`Failed to increment counter for ${type}:`, error);
    }
  };

  const resetCounter = (type: string) => {
    try {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [type]: 0,
      }));
    } catch (error) {
      console.error(`Failed to reset counter for ${type}:`, error);
    }
  };

  const resetAllCounters = () => {
    try {
      setCounters(
        containerTypes.reduce((acc, type) => {
          acc[type] = 0;
          return acc;
        }, {} as Record<string, number>)
      );
    } catch (error) {
      console.error("Failed to reset all counters:", error);
    }
  };

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