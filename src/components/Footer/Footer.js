import React, { useContext } from "react";
import { useStyles } from "./style";
import { ThemeContext } from "../../Context/ThemeContext";

export const Footer = () => {

  const context = useContext(ThemeContext)
  const classes = useStyles(context.theme);

  return (
    <div>
      <div className={classes.footerDivider}></div>
      <div className={classes.footerContainer}>
        <span> Entre em conato comigo via </span>&nbsp;
        <a
          className={classes.anchor}
          href="https://www.linkedin.com/in/almir-arruda-070408156/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};
