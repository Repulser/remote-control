import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Provider as ControllerProvider } from '../context/Controller';
import Nipple from '../components/Nipple';
import WebSocketConnection from '../components/WebSocketConnection';
import GamepadController from '../components/GamepadController';

import Fullscreen from '../components/Fullscreen';
import EnableButton from '../components/EnableButton';

const useStyles = makeStyles({
  stream: {},
  root: {
    textAlign: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#222',
    margin: '0 auto',
    backgroundSize: 'contain',
    backgroundImage: `url(http://${window.location.hostname}:1181/stream)`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
  },
  buttonsContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '70px',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  nippleContainer: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    opacity: 0.5,
  },
  linearContainer: {
    position: 'absolute',
    bottom: 20,
    left: 50,
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ControllerProvider>
        <div className={classes.buttonsContainer}>
          <div className={classes.buttons}>
            <Fullscreen />
            <WebSocketConnection />
            <GamepadController />
          </div>
          <div className={classes.buttons}>
            <EnableButton />
          </div>
        </div>
        <div className={classes.nippleContainer}>
          <Nipple />
        </div>
      </ControllerProvider>
    </div>
  );
}
