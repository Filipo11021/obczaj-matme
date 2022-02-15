import { motion } from "framer-motion";

function FadeInWhenVisible({ children }: {children: JSX.Element}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1,  x: 0 },
        hidden: { opacity: 0,  x: '200px' },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;
