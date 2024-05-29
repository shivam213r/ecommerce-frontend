import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface WithFadeInOnScrollProps {
  threshold?: number;
}

const withFadeIn = <P extends object>(Component: React.ComponentType<P>, options: WithFadeInOnScrollProps = {}) => {
  return (props: P) => {
    const { threshold = 0.1 } = options;
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: threshold,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Component {...props} />
      </motion.div>
    );
  };
};

export default withFadeIn;
