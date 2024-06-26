import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedBlockProps = {
  children: ReactNode;
  animated?: boolean;
  delay?: number;
  className?: string;
};

const Block: FC<AnimatedBlockProps> = ({
  children,
  delay = 0,
  className,
  animated = false
}) => {
  if (!animated) {
    return (
      <div className={className}>
        {children}
      </div>
    )
  }
  
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 1, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Block;
