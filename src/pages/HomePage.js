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
                Olá sou Almir, sou apaixonado por tecnologia desde a primeira
                vez que tive contato com um computador, gosto de criar coisas
                novas e inovadoras e a computação é a minha vocação. A faculdade
                de Ciência da Computação tornou possível seguir meu sonho de
                trabalhar com o que amo que é desenvolvimento de software.
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
