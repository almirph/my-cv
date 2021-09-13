import { Card, CardContent, Divider, Typography } from "@material-ui/core";
import React from "react";
import { DownloadCard } from "../components/DownloadCard/DownloadCard";
import Experiences from "../components/Experiences/Experiences";
import { Jobs } from "../components/Jobs/Jobs";
import { useStyles } from "./style";

const HomePage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <DownloadCard></DownloadCard>
      <div className={classes.wrapperHomeContent}>
        <Card className={classes.cardInfo}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Sobre mim
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Olá sou Almir, atualmente sou Frontend Developer utilizando
              Angular 2, tenho também 2 anos de experiência com ReactJS e
              desenvolvimento Backend utilizando Springboot. Estou familiarizado
              com os ritos do Scrum e com os estágios de desenvolvimento de
              software. Mesmo que atualmente seja um desenvolvedor Frontend não
              tenho problemas em trabalhar com Backend e banco de dados, tenho
              experiência de 2 anos com SQLServer, bancos noSQL DynamoDB e
              Redis.
            </Typography>
          </CardContent>
        </Card>
        <Divider
          className={classes.dividerApp}
          component="hr"
          variant="inset"
        />
        <Jobs></Jobs> <Experiences></Experiences>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
