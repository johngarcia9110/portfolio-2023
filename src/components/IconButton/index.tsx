import { useThemeVars } from "@/hooks/useThemeVars";
import { IconButtonProps, IconButton as MuiIconButton } from "@mui/material";
interface IIconButtonProps extends IconButtonProps {
  icon: React.ReactElement;
  href?: string;
  target?: string;
}
const IconButton = ({ icon, ...restProps }: IIconButtonProps) => {
  const { colors } = useThemeVars();
  return (
    <MuiIconButton
      sx={{
        backgroundColor: "#EFEFEF",
        borderRadius: "8px",
        color: "#A7A1A1",
        p: 2,
        ":hover": {
          backgroundColor: "#FFFFFF",
          color: colors.black,
        },
      }}
      {...restProps}
    >
      {icon}
    </MuiIconButton>
  );
};
export default IconButton;
