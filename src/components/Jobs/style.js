import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  jobsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  jobsTitle: {
    margin: "40px 40px 20px 40px",
  },
  cardInfo: {
    maxWidth: "1080px",
    margin: "0 40px 40px 40px",
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.025)",
    },
  },
});
