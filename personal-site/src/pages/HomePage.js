import React from "react";
import { DownloadCard } from "../components/DownloadCard/DownloadCard";
import { useStyles } from "../components/DownloadCard/style";

const HomePage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <DownloadCard></DownloadCard>
      <div className={classes.wrapperHomeContent}></div>
    </React.Fragment>
  );
};

export default HomePage;
