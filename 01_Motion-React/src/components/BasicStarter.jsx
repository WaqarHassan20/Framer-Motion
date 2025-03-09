import { motion } from "framer-motion";
import React from "react";

function BasicStarter() {
  return (
    <div className="h-screen w-screen bg-zinc-900 flex flex-col gap-20">
      <motion.div
        className="box w-40 h-40 m-10 bg-blue-500 border-2 border-white rounded-2xl"
        animate={{ x: 1000, rotate: 180 }}
        transition={{
          duration: 2,
          delay: 1,
          ease: "easeInOut",
          repeat: Infinity,
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
