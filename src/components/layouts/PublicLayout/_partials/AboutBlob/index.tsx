import { MotionBox } from "@/components/Motion";

const AboutBlob = () => {
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
          bottom: "-20%",
          left: "-30%",
          display: { xs: "none", sm: "block" },
        }}
        initial={{ transform: "scale(20)" }}
        animate={{ transform: "scale(2)" }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        exit={{ transform: "scale(20)", border: "4px solid red" }}
        src="/home-blob.svg"
        alt="blob"
      />
      <MotionBox
        key={location.pathname}
        component={"img"}
        sx={{
          position: "absolute",
          bottom: "-30%",
          right: "20%",
          display: { xs: "block", sm: "none" },
        }}
        initial={{ transform: "scale(20) rotate(0deg)" }}
        animate={{ transform: "scale(1) rotate(90deg)" }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        exit={{ transform: "scale(20)", border: "4px solid red" }}
        src="/home-blob.svg"
        alt="blob"
      />
    </MotionBox>
  );
};
export default AboutBlob;
