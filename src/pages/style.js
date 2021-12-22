import { makeStyles } from "@material-ui/core";
import { colors } from "../utils/Colors";

export const useStyles = makeStyles({
  wrapperHomeContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  contentHome: {
    maxWidth: "780px",
  },
  introductionTitle: {
    textAlign: "center",
  },
  cardInfo: {
    maxWidth: "1080px",
    margin: "40px",
    boxShadow: "none",
    borderLeft: `3px solid ${colors.color1}`,
    transition: "0.5s",
    "&:hover": {
      borderLeft: `3px solid ${colors.color3}`,
    },
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
    margin: "40px 40px 20px 40px",
  },
});
