import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import { experiences } from "./experiencesConst";
import { useStyles } from "./style";

export default function Experiences() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      {experiences.map((experience, index) => (
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body1">{experience.name}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary"></TimelineDot>
            {index !== experiences.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <div className={classes.timelineSeparator}></div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
