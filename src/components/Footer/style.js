import { makeStyles, withTheme } from "@material-ui/core";
import { colors } from "../../utils/Colors";

export const useStyles = makeStyles({
  footerContainer: {
    width: "100%",
    height: "50vh",
    backgroundColor: "#191919",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  anchor: {
    color: "#ffffff",
  },
  footerDivider: {
    width: "100%",
    height: "10px",
    backgroundColor: colors.color4,
  },
});
