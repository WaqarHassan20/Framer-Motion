import { motion } from "framer-motion";
import React from "react";

function BasicStarter() {
  return (
    <div className="h-screen w-screen bg-zinc-900 flex flex-col gap-20">
      <motion.div
        className="box w-40 h-40 m-10 bg-blue-500 border-2 border-white rounded-2xl"
        animate={{
          // x: [0, 1100, 1100, 0, 0]:
          // The element starts at x = 0 (its initial position).
          // It moves to x = 1100 (1100 pixels to the right).
          // It stays at x = 1100 (no horizontal movement).
          // It moves back to x = 0 (returns to the initial position).
          // It stays at x = 0 (no horizontal movement).
          x: [0, 1100, 1100, 0, 0],

          // y: [0, 0, 400, 400, 0]:
          // The element starts at y = 0 (its initial position).
          // It stays at y = 0 (no vertical movement).
          // It moves to y = 400 (400 pixels down).
          // It stays at y = 400 (no vertical movement).
          // It moves back to y = 0 (returns to the initial position).
          y: [0, 0, 400, 400, 0],
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{
          duration: 3,
          delay: 1,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="box w-40 h-40 m-10 bg-green-500 border-2 border-white rounded-full"
        animate={{ x: 800, y: 50, scale: 1.5 }}
        transition={{
          duration: 2,
          delay: 1,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      ></motion.div>
    </div>
  );
}

export default BasicStarter;
