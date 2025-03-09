import React from "react";
import { motion } from "framer-motion";

function Gestures() {
  return (
    <div className="w-full h-screen bg-cyan-950 p-1 flex justify-center items-center">
      <motion.div
        className="w-60 h-40 m-10 bg-orange-400 rounded-lg"
        whileDrag={{ scale: 0.7 }}
        drag
        dragConstraints={{ left: 0, top: 0 }}
        dragElastic={0.5}
        transition={{ ease: "easeIn", duration: 0.5 }}
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
