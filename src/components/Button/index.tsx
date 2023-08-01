import { LoadingButton, LoadingButtonProps } from "@mui/lab";
type IButtonProps = LoadingButtonProps;
const Button = (props: React.PropsWithChildren<IButtonProps>): JSX.Element => {
  const { children, ...restProps } = props;
  return <LoadingButton {...restProps}>{children}</LoadingButton>;
};

export default Button;
