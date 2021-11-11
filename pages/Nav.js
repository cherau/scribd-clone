import { React } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({}));
export default function Banner() {
  const classes = useStyles();
  return (
    <div className="back">
      <MenuIcon />
      <button className="signin">Sign In</button>
    </div>
  );
}
