"use client";

import React from "react";

export const ContainerCounter = ({ counter, onReset, onIncrement }) => {
  return (
    <div className="p-4 border rounded shadow-sm flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">{counter.name}</h2>
      <p className="text-2xl mb-4">{counter.count}</p>
      <button
        onClick={onIncrement}
        className="mb-2 px-4 py-2 bg-green-500 text-white rounded"
      >
        Increment
      </button>
      <button
        onClick={onReset}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Reset
      </button>
    </div>
  );
};