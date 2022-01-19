import { makeStyles } from "@material-ui/core";
import { colors } from "../../utils/Colors";

export const useStyles = makeStyles(() => ({
  timelineSeparator: {
    width: "80px",
  },
  appTimeLineDot: {
    backgroundColor: colors.color3,
  },
  experienceName: {
    color: (theme) => theme.foreground
  }
}));
