import React from "react";
import { useStyles } from "./style";

export const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.footerDivider}></div>
      <div className={classes.footerContainer}>
        <span> Entre em conato comigo via </span>&nbsp;
        <a
          class={classes.anchor}
          href="https://www.linkedin.com/in/almir-arruda-070408156/"
          target="_blank"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};
