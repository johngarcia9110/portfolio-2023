import { MotionBox } from "@/components/Motion";

const HomeBlob = () => {
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
          right: "-20%",
          display: { xs: "none", md: "block" },
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
          bottom: "-29%",
          left: "20%",
          display: { xs: "block", md: "none" },
        }}
        initial={{ transform: "scale(20)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        exit={{ transform: "scale(20)", border: "4px solid red" }}
        src="/home-blob.svg"
        alt="blob"
      />
    </MotionBox>
  );
};
export default HomeBlob;
