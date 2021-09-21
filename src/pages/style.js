import { makeStyles } from "@material-ui/core";

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
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.025)",
    },
  },
  dividerApp: {
    width: "50%",
    margin: "0",
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
