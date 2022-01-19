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
  buttonStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  buttonDownload: {
    color: "#ffffff",
    borderColor: "#ffffff",
  },
  imagemLogo: {
    width: "30px",
    margin: "0 20px",
  },
  linkLogos: {
    position: "absolute",
    bottom: 0,
    margin: "20px",
    display: "flex",
    justifyContent: "center",
  },
});
