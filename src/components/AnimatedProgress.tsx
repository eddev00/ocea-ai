'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CircularProgressProps {
  value: number;
  label: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ value, label }) => {
  const radius = 48; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Full circumference of the circle

  return (
    <motion.div
      className="flex flex-col gap-2 items-center justify-center cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 10,
      }}
    >
      <svg
        width="96"
        height="96"
        viewBox="0 0 120 120"
        preserveAspectRatio="xMidYMid meet"
        className="drop-shadow-md rotate-90"
      >
        {/* Background track */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="12"
        />

        {/* Progress circle */}
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#49FD65"
          strokeWidth="12"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (value / 100) * circumference }}
          transition={{
            duration: 1.5,
            ease: 'easeOut',
          }}
        />

        {/* Percentage text */}
        <motion.text
          x="60"
          y="60"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="1.5em"
          fontWeight="bold"
          fill="black"
          fontFamily="'Arial', sans-serif"
          transform="rotate(90 60 60)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            type: 'spring',
            stiffness: 300,
            damping: 10,
          }}
          style={{ pointerEvents: 'none', rotate : '-90deg'}}
        >
          {value}%
        </motion.text>
      </svg>

      {/* Label */}
      <motion.span
        className="text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, type: 'spring' }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

export default function AnimatedProgressBars() {
  const [delay, setDelay] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(true);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup the timeout
  }, []);

  return (
    <div className="flex min-h-[162px] justify-center items-center flex-wrap sm:justify-between gap-16 sm:gap-6 lg:gap-20 py-10 sm:py-4 px-8 lg:px-16 border border-[#BFBFBF]/25 rounded-[14px] relative bg-[#E7E7E7]/25 overflow-hidden">
      {/* Background blurs */}
      <div className="h-[211px] w-[300px] absolute sm:-top-[80%] sm:-left-[10%] -top-[20%] -left-[10%] bg-[#FF585B]/15 blur-[66px]" />
      <div className="h-[211px] w-[300px] absolute sm:-bottom-[50%] sm:left-[20%] -bottom-[0%] left-[0%] bg-[#EAACFF]/35 blur-[66px]" />
      <div className="h-[211px] w-[300px] absolute sm:-top-[50%] sm:left-[50%] -top-[10%] -right-[10%] bg-[#FF585B]/15 blur-[66px]" />

      {delay && (
        <>
          <CircularProgress value={99} label="Symmetry Ratio" />
          <CircularProgress value={47} label="Relief Index" />
          <motion.div
            className="flex flex-col items-center justify-center cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: 'spring' }}
          >
            <span className="text-[24px] font-bold">12,985</span>
            <span className="text-base">Iterations</span>
          </motion.div>
        </>
      )}
    </div>
  );
}
