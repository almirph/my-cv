import { makeStyles } from "@material-ui/core";
import { colors } from "../../utils/Colors";

export const useStyles = makeStyles({
  footerContainer: {
    width: "100%",
    height: "50vh",
    backgroundColor: (theme) => theme.footer,
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
