import { Card, CardContent, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { useStyles } from "./style";

export const Jobs = () => {
  const context = useContext(ThemeContext);
  const classes = useStyles(context.theme);

  return (
    <div className={classes.jobsContainer}>
      <Card className={classes.cardInfo}>
        <CardContent>
          <Typography variant="h5" component="h2">
            GFT Technologies
          </Typography>
          <Typography
            className={classes.subTitle}
            variant="subtitle1"
            component="div"
          >
            Maio 2021 - Atualmente
          </Typography>
          <Typography variant="body1" color="textSecondary" component="div">
            <div className={classes.cardText}>
              Em 2021 comecei a trabalhar como Analista de Sistemas na GFT
              utilizando o Framework Angular 2+ para desenvolvimento de uma
              aplicação que iria servir como IFrame para o Open Banking de 5
              segmentos do Banco Safra. Após esse projeto atuei na equipe de
              qualidade do Safra PJ, tive a oportunidade de trabalhar com
              AngularJS, Angular 13, Node, MongoDb e Kibana.
            </div>
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardInfo}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Nova Tendência Informática
          </Typography>
          <Typography
            className={classes.subTitle}
            variant="subtitle1"
            component="div"
          >
            Março 2019 - Maio 2021
          </Typography>
          <Typography variant="body1" color="textSecondary" component="div">
            <div className={classes.cardText}>
              No início de 2019 entrei na empresa como estagiário e
              posteriormente ganhei promoções para Analista de Sistemas Júnior,
              em 2020 para Pleno e no início de 2021 para Analista Sênior.
              Minhas atividades eram desenvolvimento de backends em Java
              utilizando arquitetura Spring Boot e frontend utilizando
              tecnologia React. Também tive experiência com bancos de dados SQL
              server em projetos legado e novos, também bancos noSql DynamoDB e
              Redis. Trabalhei com serviços da AWS para ambiente de
              microsserviços, banco de dados e scripts.
            </div>
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardInfo}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Code Jr
          </Typography>
          <Typography
            className={classes.subTitle}
            variant="subtitle1"
            component="div"
          >
            Agosto 2017 - Dezembro 2018
          </Typography>
          <Typography variant="body1" color="textSecondary" component="div">
            <div className={classes.cardText}>
              A Empresa Júnior é uma associação civil sem fins lucrativos,
              formada e gerida por alunos de um curso superior. No início da
              carreira tive capacitação com tecnologias que eram necessárias
              para criação de projetos de software da empresa como css, html,
              sql, php e javascript. Também fiz a gerência de atividades
              relacionadas a marketing externo e interno da Code Jr, desde
              atividades relacionadas a prospecção de clientes em redes sociais
              à propaganda da empresa em processo seletivo.
            </div>
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.cardInfo}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Ciência da Computação, Universidade Federal de Juiz de Fora
          </Typography>
          <Typography
            className={classes.subTitle}
            variant="subtitle1"
            component="div"
          >
            Desde 07 de Julho de 2016
          </Typography>
          <Typography variant="body1" color="textSecondary" component="div">
            <div className={classes.cardText}>
              O Bacharelado em Ciência da Computação tem como objetivo principal
              formar profissionais com graduação plena, habilitados a
              especificar, projetar, implantar e avaliar sistemas computacionais
              voltados para a solução de problemas de natureza diversificada. A
              formação desse profissional envolve a aquisição de conhecimento em
              modelos computacionais teóricos e em metodologias e ferramentas
              atualizadas, bem como o desenvolvimento de habilidades cognitivas
              necessárias para a interação com profissionais de outras áreas,
              para o uso crítico das novas tecnologias e para avaliação do
              impacto do resultado de seu trabalho na qualidade de vida.
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
