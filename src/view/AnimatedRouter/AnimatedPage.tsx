import React from 'react';
import { animate, motion } from 'framer-motion';

const animations = {
  initial: { width: 0 },
  animate: { width: '100%' },
  exit: { opacity: 1, transition: { duration: 0.01 } },
};
type childrenprops = {
  children: React.ReactNode;
};
const AnimatedPage = ({ children }: childrenprops) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ height: '100vh' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
