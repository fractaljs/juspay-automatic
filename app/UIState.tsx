"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define different states with their block configurations
const states = [
  {
    id: "state1",
    name: "State 1",
    blocks: [
      { id: "block-a", color: "bg-blue-500", label: "Block A" },
      { id: "block-b", color: "bg-green-500", label: "Block B" },
    ],
  },
  {
    id: "state2",
    name: "State 2",
    blocks: [
      { id: "block-a", color: "bg-blue-500", label: "Block A" },
      { id: "block-c", color: "bg-purple-500", label: "Block C" },
      { id: "block-d", color: "bg-orange-500", label: "Block D" },
      { id: "block-e", color: "bg-pink-500", label: "Block E" },
    ],
  },
  {
    id: "state3",
    name: "State 3",
    blocks: [
      { id: "block-b", color: "bg-green-500", label: "Block B" },
      { id: "block-d", color: "bg-orange-500", label: "Block D" },
      { id: "block-f", color: "bg-red-500", label: "Block F" },
    ],
  },
  {
    id: "state4",
    name: "State 4",
    blocks: [{ id: "block-g", color: "bg-indigo-500", label: "Block G" }],
  },
  {
    id: "state5",
    name: "State 5",
    blocks: [
      { id: "block-a", color: "bg-blue-500", label: "Block A" },
      { id: "block-f", color: "bg-red-500", label: "Block F" },
      { id: "block-h", color: "bg-yellow-500", label: "Block H" },
      { id: "block-i", color: "bg-teal-500", label: "Block I" },
    ],
  },
  {
    id: "state6",
    name: "State 6",
    blocks: [
      { id: "block-g", color: "bg-indigo-500", label: "Block G" },
      { id: "block-h", color: "bg-yellow-500", label: "Block H" },
    ],
  },
  {
    id: "state7",
    name: "State 7",
    blocks: [
      { id: "block-c", color: "bg-purple-500", label: "Block C" },
      { id: "block-e", color: "bg-pink-500", label: "Block E" },
      { id: "block-i", color: "bg-teal-500", label: "Block I" },
    ],
  },
  {
    id: "state8",
    name: "State 8",
    blocks: [
      { id: "block-a", color: "bg-blue-500", label: "Block A" },
      { id: "block-b", color: "bg-green-500", label: "Block B" },
      { id: "block-c", color: "bg-purple-500", label: "Block C" },
      { id: "block-d", color: "bg-orange-500", label: "Block D" },
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
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
          >
            <AnimatePresence mode={"popLayout"}>
              {currentState.blocks.map((block, index) => (
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
                  className={`${block.color} rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-xl h-[200px] w-full relative overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{block.label}</div>
                    <div className="text-sm opacity-75">ID: {block.id}</div>
                  </div>

                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px), radial-gradient(circle at 80% 50%, white 2px, transparent 2px)`,
                        backgroundSize: "30px 30px",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
