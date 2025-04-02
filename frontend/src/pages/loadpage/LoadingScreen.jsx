import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <motion.div
        className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.p
        className="mt-4 text-lg font-semibold text-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Find your perfect match...
      </motion.p>
    </div>
  );
}

export default LoadingScreen;
