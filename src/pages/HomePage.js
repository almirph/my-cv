import { Card, CardContent, Divider, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { DownloadCard } from "../components/DownloadCard/DownloadCard";
import Experiences from "../components/Experiences/Experiences";
import { Footer } from "../components/Footer/Footer";
import { Jobs } from "../components/Jobs/Jobs";
import { ThemeContext } from "../Context/ThemeContext";
import { useStyles } from "./style";

const HomePage = () => {
  const context = useContext(ThemeContext);
  const classes = useStyles(context.theme);

  return (
    <React.Fragment>
      <DownloadCard></DownloadCard>
      <div className={classes.wrapperHomeContent}>
        <Card className={classes.cardInfo}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Sobre mim
            </Typography>
            <Typography variant="body1" color="textSecondary" component="div">
              <div className={classes.cardText}>
                Olá sou Almir, atualmente sou Frontend Developer utilizando
                Angular 2, tenho também 2 anos de experiência com ReactJS e
                desenvolvimento Backend utilizando Springboot. Estou familiarizado
                com os ritos do Scrum e com os estágios de desenvolvimento de
                software. Mesmo que atualmente seja um desenvolvedor Frontend não
                tenho problemas em trabalhar com Backend e banco de dados, tenho
                experiência de 2 anos com SQLServer, bancos noSQL DynamoDB e
                Redis.
              </div>

            </Typography>
          </CardContent>
        </Card>
        <Divider
          className={classes.dividerApp}
          component="hr"
          variant="inset"
        />
        <Typography className={classes.jobsTitle} variant="h5" component="h2">
          Experiências
        </Typography>
        <Jobs></Jobs>
        <Divider
          className={classes.dividerApp}
          component="hr"
          variant="inset"
        />
        <Typography className={classes.jobsTitle} variant="h5" component="h2">
          Competências
        </Typography>
        <Experiences></Experiences>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default HomePage;
