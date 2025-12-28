// MUI
import { Modal, Backdrop, Box } from "@mui/material";

// Framer Motion imports
import { motion, AnimatePresence } from "framer-motion";
export type modalType = "newChat" | "newContact" | undefined;
type CustomModalProps = {
  open: boolean;
  handleClose: () => void;
  type: modalType;
};

export default function CustomModal(data: CustomModalProps) {
  const { open, handleClose, type } = data;

  console.log("Modal type:", type);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Box sx={style}>{/* Your custom content goes here */}</Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}

// Modal styles
const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "var(--modal-bg)",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  minWidth: 300,
};
