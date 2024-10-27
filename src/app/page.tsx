'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";

const roles = ["a Data Engineer", "a Data Science Learner", "a Machine Learning Enthusiast"];

const roleVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0, y: -10 },
};

export default function HomePage() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const role = roles[currentRole];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < role.length) {
        setDisplayedRole((prev) => prev + role[index]);
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);

        // Start erasing after a short delay to let the full role display
        setTimeout(() => {
          const eraseInterval = setInterval(() => {
            setDisplayedRole((prev) => {
              const newRole = prev.slice(0, -1);
              if (newRole.length === 0) {
                clearInterval(eraseInterval);
                setCurrentRole((prev) => (prev + 1) % roles.length);
                setIsTyping(true);
              }
              return newRole;
            });
          }, 150);
        }, 1000); // Delay before starting to erase (adjust as needed)
      }
    }, 150);

    return () => {
      clearInterval(typeInterval);
    };
  }, [currentRole]);

  return (
    <Layout>
      <main className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="text-center">
          <motion.h1
            className="text-4xl sm:text-3xl lg:text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello World!
          </motion.h1>

          <motion.h1
            className="text-5xl sm:text-4xl lg:text-6xl font-bold mt-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            My name is{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #2AD640, #56E06F)"
              }}
            >
              Bharath Velamala
            </span>
          </motion.h1>

          <div className="text-2xl sm:text-3xl lg:text-4xl mt-4 flex items-center justify-center">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <span>and, I am&nbsp;</span>
              <div className="inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    variants={roleVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    style={{
                      display: 'inline-block',
                      borderBottom: '2px solid var(--accent-color)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      borderRight: isTyping ? '2px solid var(--accent-color)' : 'none',
                      animation: isTyping ? 'blink-caret 0.75s step-end infinite' : 'none'
                    }}
                    className="text-[var(--accent-color)]"
                  >
                    {displayedRole}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          <div className="mt-8">
            <a
              href="/files/Bharath_Velamala_Resume_DE.pdf"
              download="Bharath_Velamala_Resume_DE.pdf"
              className="relative inline-block text-lg font-semibold text-[var(--foreground)] px-8 py-4 rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105 hover:shadow-2xl focus:outline-none"
              style={{
                background: "#1B2631",
                border: "2px solid",
                borderColor: "#2AD640",
              }}
            >
              <span className="absolute inset-0 opacity-40 bg-gradient-to-br from-transparent via-black to-transparent blur-lg rounded-lg -z-10"></span>
              Download Resume
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
