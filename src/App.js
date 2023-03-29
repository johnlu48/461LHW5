import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';

function Project(props) {
  const [hardwareSet1, setHardwareSet1] = useState(props.hardwareSet1);
  const [hardwareSet2, setHardwareSet2] = useState(props.hardwareSet2);
  const [checkinValue, setCheckinValue] = useState('');
  const [checkoutValue, setCheckoutValue] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const handleCheckin = (setHardwareSet) => {
    setHardwareSet(prevValue => prevValue + Number(checkinValue));
    setCheckinValue('');
  };

  const handleCheckout = (setHardwareSet) => {
    setHardwareSet(prevValue => prevValue - Number(checkoutValue));
    setCheckoutValue('');
  };

  const handleJoin = () => {
    setIsJoined(true);
    props.joinProject(props.title);
  };

  const handleLeave = () => {
    setIsJoined(false);
    props.leaveProject(props.title);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader title={props.title} />
        <CardContent>
          <Typography variant="body1">Hardware Set 1: {hardwareSet1}</Typography>
          <TextField
            label="Checkin"
            variant="outlined"
            size="small"
            type="number"
            value={checkinValue}
            onChange={(event) => setCheckinValue(event.target.value)}
          />
          <Button variant="contained" color="primary" onClick={() => handleCheckin(setHardwareSet1)}>Checkin</Button>
          <TextField
            label="Checkout"
            variant="outlined"
            size="small"
            type="number"
            value={checkoutValue}
            onChange={(event) => setCheckoutValue(event.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={() => handleCheckout(setHardwareSet1)}>Checkout</Button>
          <br />
          <br />
          <Typography variant="body1">Hardware Set 2: {hardwareSet2}</Typography>
          <TextField
            label="Checkin"
            variant="outlined"
            size="small"
            type="number"
            value={checkinValue}
            onChange={(event) => setCheckinValue(event.target.value)}
          />
          <Button variant="contained" color="primary" onClick={() => handleCheckin(setHardwareSet2)}>Checkin</Button>
          <TextField
            label="Checkout"
            variant="outlined"
            size="small"
            type="number"
            value={checkoutValue}
            onChange={(event) => setCheckoutValue(event.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={() => handleCheckout(setHardwareSet2)}>Checkout</Button>
        </CardContent>
        <CardActions>
          {isJoined ? (
            <Button variant="contained" color="secondary" onClick={handleLeave}>Leave Project</Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleJoin}>Join Project</Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      hardwareSet1: 50,
      hardwareSet2: 50
    },
    {
      title: 'Project 2',
      hardwareSet1: 50,
      hardwareSet2: 50
    },
    {
      title: 'Project 3',
      hardwareSet1: 50,
      hardwareSet2: 50
    }
  ];

  const joinProject = (title) => {
    console.log(`Joining project ${title}`);
  };

  return (
    <Grid container spacing={2}>
      {projects.map((project, index) => (
        <Project key={index} title={project.title} hardwareSet1={project.hardwareSet1} hardwareSet2={project.hardwareSet2} joinProject={joinProject} />
      ))}
    </Grid>
  );
}
