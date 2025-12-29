import { AnimatePresence, motion } from "framer-motion";

export default function ImagePreview({ image }: { image: string | null }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="imagePreview"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <img src={image} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
