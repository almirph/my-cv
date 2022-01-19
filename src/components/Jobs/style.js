import { makeStyles } from "@material-ui/core";
import { colors } from "../../utils/Colors";

export const useStyles = makeStyles({
  jobsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  subTitle: {
    fontSize: "14px",
    marginBottom: "20px",
  },
  cardInfo: {
    color: (theme) => theme.foreground,
    backgroundColor: (theme) => theme.background,
    maxWidth: "1080px",
    margin: "0 40px 40px 40px",
    boxShadow: "none",
    borderLeft: `3px solid ${colors.color4}`,
    transition: "0.5s",
    "&:hover": {
      borderLeft: `3px solid ${colors.color3}`,
    },
  },
  cardText: {
    color: (theme) => theme.text,
    margin: 0
  }
});
