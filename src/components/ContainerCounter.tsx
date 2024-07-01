"use client";

import React from "react";

export const ContainerCounter = ({ type, count, onIncrement, onReset, onUndo }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{type.toUpperCase()}</h2>
      <p className="text-lg mb-2">Count: {count}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={onIncrement}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
        onClick={onReset}
      >
        Reset
      </button>
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded"
        onClick={onUndo}
      >
        Undo
      </button>
    </div>
  );
};