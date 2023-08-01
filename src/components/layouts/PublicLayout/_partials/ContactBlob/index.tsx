import { MotionBox } from "@/components/Motion";

const ContactBlob = () => {
  return (
    <MotionBox
      key={location.pathname + "-blob-1"}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        zIndex: 0,
      }}
      initial={{ zIndex: 20 }}
      animate={{ zIndex: 0 }}
    >
      <MotionBox
        key={location.pathname}
        component={"img"}
        sx={{
          position: "absolute",
          bottom: "50%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        initial={{ transform: "translateX(-50%) scale(20)" }}
        animate={{
          transform: "translateX(-50%) translateY(50%) scale(2)",
        }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        exit={{ transform: "scale(20)", border: "4px solid red" }}
        src="/home-blob.svg"
        alt="blob"
      />
    </MotionBox>
  );
};
export default ContactBlob;
