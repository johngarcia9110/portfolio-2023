import { Box, Typography } from "@mui/material";

const SKILLS = [
  { title: "Javascript", src: "/logos/javascript.svg" },
  { title: "Typescript", src: "/logos/typescript.svg" },
  { title: "GraphQL", src: "/logos/graphql.svg" },
  { title: "React.js", src: "/logos/react.svg" },
  { title: "Next.js", src: "/logos/nextjs.svg" },
  { title: "HTML", src: "/logos/html5.svg" },
  { title: "CSS", src: "/logos/css3.svg" },
  { title: "Storybook", src: "/logos/storybook.svg" },
  { title: "Git", src: "/logos/github.svg" },
  { title: "Figma", src: "/logos/figma.svg" },
];

export const SkillBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: "720px",
        width: "100%",
        justifyContent: "flex-start",
      }}
    >
      {SKILLS.map((skill) => {
        return (
          <Box
            sx={{
              backgroundColor: "#FBFBFB",
              borderRadius: "16px",
              padding: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
              flex: { xs: "0 1 22.9%", sm: "1 1 100px" },
              alignItems: "center",
              mb: 1,
            }}
          >
            <Box
              component={"img"}
              src={skill.src}
              sx={{ maxWidth: "64px", height: "64px" }}
            />
            <Typography color={"#7E7E7E"}>{skill.title}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};
