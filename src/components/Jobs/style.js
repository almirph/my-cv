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
    maxWidth: "1080px",
    margin: "0 40px 40px 40px",
    boxShadow: "none",
    borderLeft: `3px solid ${colors.color4}`,
    transition: "0.5s",
    "&:hover": {
      borderLeft: `3px solid ${colors.color3}`,
    },
  },
});
