import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50vh",
    position: "relative",
  },
  animation: { height: "50vh", width: "100%" },
  linkCv: {
    position: "absolute",
    zIndex: 1,
    textDecoration: "none",
  },
  buttonDownload: {
    color: "#ffffff",
    borderColor: "#ffffff",
  },
  imagemLinkedin: {
    width: "30px",
  },
  linkLinkedin: {
    width: "30px",
    position: "absolute",
    bottom: 0,
    margin: "20px",
  },
});
