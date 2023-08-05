import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box) as any;
const MotionText = motion(Typography);
const MotionStack = motion(Stack);

export { MotionBox, MotionText, MotionStack };
