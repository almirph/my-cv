import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../DownloadCard/style";

export const Jobs = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          GFT Tecnologies
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Eu trabalho aqui
        </Typography>
      </CardContent>
    </Card>
  );
};
