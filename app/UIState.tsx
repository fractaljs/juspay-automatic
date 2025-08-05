"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BarChart from "./bar-chart";

// Chart data store - ensures consistent data for blocks with same ID
const blockChartData: Record<
  string,
  { data: number[]; heroPercentage: string }
> = {
  "block-a": {
    data: [8, 7, 6, 5, 4, 3, 2, 2, 1, 3, 2, 1, 1, 1, 1, 3, 2, 1, 1, 1],
    heroPercentage: "6%",
  },
  "block-b": {
    data: [5, 6, 7, 8, 7, 6, 5, 4, 3, 4, 5, 6, 5, 4, 3, 2, 3, 4, 3, 2],
    heroPercentage: "12%",
  },
  "block-c": {
    data: [3, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 6, 5, 4, 3, 4, 5, 4, 3, 2],
    heroPercentage: "8%",
  },
  "block-d": {
    data: [7, 6, 5, 4, 3, 4, 5, 6, 5, 4, 3, 2, 3, 4, 5, 4, 3, 2, 1, 2],
    heroPercentage: "15%",
  },
  "block-e": {
    data: [4, 5, 6, 5, 4, 3, 4, 5, 6, 5, 4, 3, 2, 3, 4, 5, 4, 3, 2, 1],
    heroPercentage: "9%",
  },
  "block-f": {
    data: [6, 5, 4, 3, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3],
    heroPercentage: "11%",
  },
  "block-g": {
    data: [2, 3, 4, 5, 6, 5, 4, 3, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 3],
    heroPercentage: "7%",
  },
  "block-h": {
    data: [5, 4, 3, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2],
    heroPercentage: "13%",
  },
  "block-i": {
    data: [3, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 3, 2],
    heroPercentage: "10%",
  },
};

// Define different states with their block configurations
const states = [
  {
    id: "state1",
    name: "State 1",
    blocks: [
      { id: "block-a", label: "Block A" },
      { id: "block-b", label: "Block B" },
    ],
  },
  {
    id: "state2",
    name: "State 2",
    blocks: [
      { id: "block-a", label: "Block A" },
      { id: "block-c", label: "Block C" },
      { id: "block-d", label: "Block D" },
      { id: "block-e", label: "Block E" },
    ],
  },
  {
    id: "state3",
    name: "State 3",
    blocks: [
      { id: "block-b", label: "Block B" },
      { id: "block-d", label: "Block D" },
      { id: "block-f", label: "Block F" },
    ],
  },
  {
    id: "state4",
    name: "State 4",
    blocks: [{ id: "block-g", label: "Block G" }],
  },
  {
    id: "state5",
    name: "State 5",
    blocks: [
      { id: "block-a", label: "Block A" },
      { id: "block-f", label: "Block F" },
      { id: "block-h", label: "Block H" },
      { id: "block-i", label: "Block I" },
    ],
  },
  {
    id: "state6",
    name: "State 6",
    blocks: [
      { id: "block-g", label: "Block G" },
      { id: "block-h", label: "Block H" },
    ],
  },
  {
    id: "state7",
    name: "State 7",
    blocks: [
      { id: "block-c", label: "Block C" },
      { id: "block-e", label: "Block E" },
      { id: "block-i", label: "Block I" },
    ],
  },
  {
    id: "state8",
    name: "State 8",
    blocks: [
      { id: "block-a", label: "Block A" },
      { id: "block-b", label: "Block B" },
      { id: "block-c", label: "Block C" },
      { id: "block-d", label: "Block D" },
    ],
  },
];

export default function UIState({ state }: { state: number }) {
  const currentState = states[state];

  // Safety check: if currentState is undefined, use the first state
  if (!currentState) {
    return (
      <div className="flex flex-col items-center justify-center w-full debug p-8">
        <div className="text-red-500">Invalid state: {state}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-full max-w-4xl">
        {/* Blocks Container */}
        <div className="relative">
          <motion.div
            className={`grid gap-4 min-h-[400px] mb-8 ${
              currentState.blocks.length === 1
                ? "grid-cols-1 place-items-center"
                : currentState.blocks.length === 2
                ? "grid-cols-2"
                : currentState.blocks.length === 3
                ? "grid-cols-3"
                : "grid-cols-2"
            } max-w-6xl mx-auto`}
            layout
            // transition={{
            //   type: "spring",
            //   damping: 20,
            //   stiffness: 300,
            // }}
          >
            <AnimatePresence mode={"popLayout"}>
              {currentState.blocks.map((block, index) => {
                const chartData = blockChartData[block.id];
                return (
                  <motion.div
                    key={block.id}
                    layoutId={block.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      layout: {
                        damping: 20,
                        stiffness: 300,
                      },
                      opacity: {
                        duration: 0.4,
                        ease: "easeOut",
                      },
                      scale: {
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    }}
                    className="relative border border-gray-700"
                  >
                    {/* Block ID at the top */}
                    <div className="text-xs text-gray-400 mb-2 font-mono">
                      {block.id}
                    </div>

                    {/* BarChart component */}
                    <BarChart
                      title={block.label}
                      heroNumber={chartData?.heroPercentage || "0%"}
                      heroPercentage={chartData?.heroPercentage || "0%"}
                      data={chartData?.data || [1, 1, 1, 1, 1]}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
