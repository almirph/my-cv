import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import animatedBackground from "../../utils/AnimatedBackground";
import { useStyles } from "./style";

export const DownloadCard = () => {
  useEffect(() => {
    animatedBackground();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <canvas id="animation" className={classes.animation}></canvas>

      <a className={classes.linkCv} href="./Almir Philipe.pdf" download>
        <Button
          variant="outlined"
          size="large"
          className={classes.buttonDownload}
        >
          DOWNLOAD CV
        </Button>
      </a>
    </div>
  );
};
