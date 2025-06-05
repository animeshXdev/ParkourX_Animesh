import React from "react";
import { motion } from "framer-motion";
import {
  FaRunning,
  FaRoad,
  FaFastForward,
  FaDumbbell,
  FaHeartbeat,
  
} from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";


const skills = [
  {
    name: "Precision Jumps",
    level: 90,
    icon: <FaRunning size={30} className="text-emerald-400" />,
  },
  {
    name: "Wall Runs",
    level: 85,
    icon: <FaRoad size={30} className="text-emerald-400" />,
  },
  {
    name: "Vaults",
    level: 80,
    icon: <FaFastForward size={30} className="text-emerald-400" />,
  },
  {
    name: "Speed & Agility",
    level: 95,
    icon: <FaDumbbell size={30} className="text-emerald-400" />,
  },
  {
    name: "Endurance",
    level: 75,
    icon: <GiMuscleUp size={30} className="text-emerald-400" />,
  },
  {
    name: "Stamina",
    level: 70,
    icon: <FaHeartbeat size={30} className="text-emerald-400" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="sm:mb-[-60px] w-full min-h-screen bg-zinc-950 text-white px-6 md:px-20 sm:py-22 py-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-emerald-400 mb-14 text-center"
      >
        My Skills
      </motion.h2>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {skills.map(({ name, level, icon }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 25px rgba(16,185,129,0.7)",
            }}
            className="bg-zinc-800 rounded-xl p-6 flex flex-col gap-5 cursor-pointer border border-emerald-600"
          >
            <div className="flex items-center gap-4">
              {icon}
              <h3 className="text-xl font-semibold text-emerald-400">{name}</h3>
            </div>

            <div
              className="w-full h-4 bg-zinc-700 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={level}
              aria-label={`${name} skill level`}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="h-full bg-emerald-400 rounded-full"
              />
            </div>

            <span className="text-right text-sm text-gray-300">{level}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
