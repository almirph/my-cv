import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import animatedBackground from "../../utils/AnimatedBackground";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { useStyles } from "./style";

export const DownloadCard = () => {
  useEffect(() => {
    animatedBackground();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <canvas id="animation" className={classes.animation}></canvas>
      <div className={classes.buttonStyle}>
        <ThemeSwitcher></ThemeSwitcher>
      </div>
      <a className={classes.linkCv} href="./Almir Philipe.pdf" download>
        <Button
          variant="outlined"
          size="large"
          className={classes.buttonDownload}
        >
          DOWNLOAD CV
        </Button>
      </a>
      <div className={classes.linkLogos}>
        <a
          href="https://www.linkedin.com/in/almir-arruda-070408156/"
          target="_blank"
        >
          <img
            className={classes.imagemLogo}
            src="/imagens/logo-linkedin.png"
            alt="linkedin"
          />
        </a>
        <a href="https://github.com/almirph" target="_blank">
          <img
            className={classes.imagemLogo}
            src="/imagens/logo-github.png"
            alt="github"
          />
        </a>
      </div>
    </div>
  );
};
