import { useScroll } from "framer-motion";

export const useScrollY = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return scrollYProgress;
};