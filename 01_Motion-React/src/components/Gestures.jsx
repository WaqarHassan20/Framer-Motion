import React from "react";
import { motion } from "framer-motion";

function Gestures() {
  return (
    <div className="w-screen h-screen bg-zinc-900 p-1 flex justify-center items-center">
      <motion.div
        className="w-60 h-40 m-10 bg-slate-500 rounded-lg"
        transition={{ ease: "easeIn", duration: 0.7 }}
        whileHover={{
          borderRadius: "100%",
          backgroundColor: "yellowgreen",
          rotate: 180,
          bounce: 5,
          width: "30%",
          height: "30%",
        }}
        whileTap={{ bounce: 5, backgourncolor: "red" }}
      ></motion.div>
    </div>
  );
}

export default Gestures;
