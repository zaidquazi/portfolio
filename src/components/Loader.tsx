import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          setTimeout(() => setShow(false), 400);
          return 100;
        }
        return p + 4;
      });
    }, 30);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mx-auto h-16 w-16 rounded-full border-2 border-transparent border-t-[var(--neon-purple)] border-r-[var(--neon-blue)]"
              style={{ filter: "drop-shadow(0 0 12px rgba(168,85,247,0.6))" }}
            />
            <div className="mt-6 font-display text-2xl font-bold text-gradient">Zaid.dev</div>
            <div className="mt-3 font-mono text-xs text-muted-foreground">{progress}%</div>
            <div className="mx-auto mt-2 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
