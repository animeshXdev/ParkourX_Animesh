import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/dfdfdfff.gif";

const tags = [
    "Parkour Athlete",
    "Cliff Jumper",
    "Urban Explorer",
    "Motion Enthusiast",
    "Wall Runner",
    "Freedom Seeker",
];

const About = () => {
    return (
        <section
            id="about"
            className="sm:mb-[-70px] relative w-full min-h-screen bg-zinc-950 text-white px-6 md:px-20 flex flex-col py-8 justify-center items-center overflow-hidden "
        >
            {/* Background Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2 }}
                className="absolute w-[40rem] h-[40rem] bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-[-5rem] -left-40 z-0"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2 }}
                className="absolute w-[30rem] h-[30rem] bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bottom-[-5rem] -right-20 z-0"
            />

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative text-4xl md:text-5xl font-bold text-emerald-400 mb-10 text-center z-10"
            >
                About Me
            </motion.h2>

            {/* Content */}
            <div className="relative flex flex-col md:flex-row items-center gap-12 z-10">
                {/* Profile Image */}
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={profile}
                    alt="Profile"
                    className="w-60 h-60 object-cover rounded-full shadow-lg border-4 border-emerald-500"
                />

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-lg leading-relaxed text-gray-300 max-w-xl text-center md:text-left"
                >
                    Hey, I’m Animesh — a passionate parkour athlete who lives for movement, freedom, and the thrill of urban exploration.
                    From rooftops to rails, I express myself through flips, vaults, and leaps that defy gravity.
                    I’ve dedicated years to mastering control, flow, and fearlessness. Parkour isn’t just a sport — it’s how I connect with the world.
                    Every wall, gap, and surface is a new challenge to overcome.
                    I believe motion is a language of the body, and I use it to tell stories, break barriers, and discover what I’m truly capable of.
                </motion.p>
            </div>

            {/* Tags */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative mt-12 flex flex-wrap justify-center gap-4 z-10"
            >
                {tags.map((tag, i) => (
                    <div
                        key={i}
                        className="px-5 py-2 text-sm md:text-base font-medium rounded-full bg-zinc-800 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-colors duration-300 shadow-md cursor-pointer"
                    >
                        {tag}
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default About;
