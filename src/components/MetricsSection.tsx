'use client'
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const MetricsSection = () => {
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();

  useEffect(() => {
    const animate = async () => {
      await controls1.start({ pathLength: 0.99, transition: { duration: 1.5 } });
      await controls2.start({ pathLength: 0.47, transition: { duration: 1.5 } });
    };
    animate();
  }, [controls1, controls2]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <motion.svg
          className="w-32 h-32 mr-8"
          viewBox="0 0 100 100"
          initial={{ pathLength: 0 }}
          animate={controls1}
        >
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#4CAF50"
            strokeWidth="8"
            strokeDasharray="251.2"
          />
        </motion.svg>
        <motion.svg
          className="w-32 h-32"
          viewBox="0 0 100 100"
          initial={{ pathLength: 0 }}
          animate={controls2}
        >
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#4CAF50"
            strokeWidth="8"
            strokeDasharray="251.2"
          />
        </motion.svg>
      </div>
      <div className="mt-8 text-2xl font-bold">12,985 Iterations</div>
    </div>
  );
};

export default MetricsSection;