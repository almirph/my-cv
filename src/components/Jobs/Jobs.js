import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";

export const Jobs = () => {
  const classes = useStyles();

  return (
    <div className={classes.jobsContainer}>
      <Typography className={classes.jobsTitle} variant="h5" component="h2">
        Experiências
      </Typography>
      <Card className={classes.cardInfo}>
        <CardContent>
          <Typography variant="h5" component="h2">
            GFT Technologies
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Em 2021 comencei a trabalhar como desenvolvedor Frontend na GFT
            utilizando o Framework Angular 2 para desenvolvimento de aplicações
            responsivas, não tinha experiência com o Framework e inicialmente
            foi uma experiência desafiadora, hoje me sinto muito confortável
            desenvolvendo em Angular 2.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardInfo}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Nova Tendência Informática
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Em março de 2019 entrei na empresa como estagiário e posteriormente
            ganhei promoções para Analista de Sistemas Júnior e em 2020 para
            Pleno. Minhas atividades foram desenvolvimento de backends em Java
            utilizando arquitetura Spring Boot e frontend utilizando tecnologia
            React. Também tive experiência com bancos de dados sqlserver em
            projetos legado e novos, também bancos noSql DynamoDB e Redis.
            Trabalhei com serviços da AWS para ambiente de microsserviços, banco
            de dados e scripts.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardInfo}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Code Jr
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Capacitação com tecnologias que eram necessárias para criação de
            projetos de software da empresa como css, html, sql, php e
            javascript. Além de fazer gerência de atividades relacionadas a
            marketing externo e interno da Code Jr, desde atividades
            relacionadas a prospecção de clientes em redes sociais à propaganda
            da empresa em processo seletivo.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
