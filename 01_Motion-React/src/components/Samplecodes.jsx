import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Samplecodes = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="p-10 space-y-6 bg-zinc-900 min-h-screen">
      <div className="flex justify-evenly items-center">
        <h1 className="text-white text-5xl text-center p-6 font-bold mb-4">
          Framer Motion Demo
        </h1>
        {/* Toggle Visibility */}
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        >
          Toggle Visibility
        </button>
      </div>

      {/* Basic Animation */}
      {isVisible && (
        <motion.div
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-300 w-4/6 mx-auto p-6 mb-6 rounded-lg shadow-lg"
        >
          Basic Animation
        </motion.div>
      )}

      {/* Hover Animation */}

      {isVisible && (
        <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          className="bg-green-300 p-6 rounded-lg shadow-lg w-4/6 mx-auto"
        >
          Hover Animation
        </motion.div>
      )}

      {/* Tap Animation */}
      {isVisible && (
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="bg-purple-300 p-6 rounded-lg shadow-lg w-4/6 mx-auto"
        >
          Tap Animation
        </motion.div>
      )}

      {/* Drag Animation */}
      {isVisible && (
        <motion.div
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          className="bg-red-300 p-6 rounded-lg shadow-lg w-4/6 mx-auto"
        >
          Drag me!
        </motion.div>
      )}

      {/* AnimatePresence Example */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0.2 }}
            whileTap={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-teal-300 p-6 rounded-lg shadow-lg w-4/6 mx-auto"
          >
            Tap Me Example
          </motion.div>
        )}
      </AnimatePresence>

      {/* Combined Animation */}
      {isVisible && (
        <motion.div
          whileTap={{ opacity: 1, x: 100, rotate: 360 }}
          transition={{ duration: 2 }}
          className="bg-pink-300 p-6 rounded-lg shadow-lg w-4/6 mx-auto"
        >
          Click Me Animation
        </motion.div>
      )}

      {/* Keyframes Animation */}
      {isVisible && (
        <motion.div
          whileHover={{
            scale: [1, 1.5, 1, 1.5, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="bg-blue-300 p-6 rounded-lg shadow-lg w-4/6 mx-auto"
        >
          Keyframes Animation
        </motion.div>
      )}

      {/* Stagger Children */}
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileHover="visible"
          className="bg-yellow-300 p-6 rounded-lg shadow-lg w-4/6 mx-auto"
        >
          <motion.div variants={childVariants} className="mb-2">
            Child 1
          </motion.div>
          <motion.div variants={childVariants} className="mb-2">
            Child 2
          </motion.div>
          <motion.div variants={childVariants}>Child 3</motion.div>
        </motion.div>
      )}

      {/* Variants Example */}
      {isVisible && (
        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.5 }}
          className="bg-green-300 p-6 rounded-lg shadow-lg w-4/6 mx-auto"
        >
          Variants Example
        </motion.div>
      )}

      {/* Spring Animation */}
      {isVisible && (
        <motion.div
          whileTap={{ x: 100 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-red-300 p-6 rounded-lg shadow-lg w-4/6 mx-auto"
        >
          Spring Animation
        </motion.div>
      )}

      {/* Exit Animation */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0.2 }}
            whileHover={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-teal-300 p-6 rounded-lg shadow-lg w-4/6 mx-auto"
          >
            Exit Animation
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Easing */}
      {isVisible && (
        <motion.div
          whileHover={{ x: 100, opacity: 1 }}
          initial={{ opacity: 0.2 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="bg-purple-300 p-6 rounded-lg shadow-lg w-4/6 mx-auto"
        >
          Custom Easing Animation
        </motion.div>
      )}
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const boxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.2 },
};

export default Samplecodes;
