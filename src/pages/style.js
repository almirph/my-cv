import { makeStyles } from "@material-ui/core";
import { colors } from "../utils/Colors";

export const useStyles = makeStyles({
  wrapperHomeContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: (theme) => theme.background
  },
  contentHome: {
    maxWidth: "780px",
  },
  introductionTitle: {
    textAlign: "center",
  },
  cardInfo: {
    backgroundColor: (theme) => theme.background,
    color: (theme) => theme.foreground,
    maxWidth: "1080px",
    margin: "40px",
    boxShadow: "none",
    borderLeft: `3px solid ${colors.color1}`,
    transition: "0.5s",
    "&:hover": {
      borderLeft: `3px solid ${colors.color3}`,
    }
  },
  cardText: {
    color: (theme) => theme.text,
    margin: 0
  },
  dividerApp: {
    width: "50%",
    margin: "0",
    backgroundColor: colors.color4,
  },
  experiencesContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "1080px",
    margin: "40px",
  },
  jobsTitle: {
    color: (theme) => theme.foreground,
    margin: "40px 40px 20px 40px",
  },
});
