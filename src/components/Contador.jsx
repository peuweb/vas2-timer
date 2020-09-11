import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import somFocoBossVeneno from "./veneno_foco.mp3";
import somFocoBossVeneno30 from "./veneno_30_segundos.mp3";
import somFocoBossVeneno10 from "./veneno_10_segundos.mp3";
import somFocoNightblade from "./nightblade_foco.mp3";
import somFocoNightblade1minuto from "./nightblade_1_minuto.mp3";
import somFocoNightblade30segundos from "./nightblade_30_segundos.mp3";
import somFocoNightblade10segundos from "./nightblade_10_segundos.mp3";
import { Button, Typography, Grid, Avatar } from "@material-ui/core";

const ContadorRenderer = ({ hours, minutes, seconds, completed }) => {
  return (
    <Typography variant="h2">
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </Typography>
  );
};

const Contador = ({ boss }) => {
  const initialMilliseconds = Date.now() + (60 + 60 + 60) * 1000;
  const initialTime = initialMilliseconds;
  const autoStart = false;
  const countDownRef = React.createRef();
  const [currentKey, setCurrentKey] = React.useState("chave1");
  const avatarUrl =
    boss === "veneno"
      ? "https://images.uesp.net/thumb/6/67/ON-npc-Saint_Llothis_the_Pious.jpg/200px-ON-npc-Saint_Llothis_the_Pious.jpg"
      : "https://images.uesp.net/thumb/c/ca/ON-npc-Saint_Felms_the_Bold.jpg/200px-ON-npc-Saint_Felms_the_Bold.jpg";

  // sons de efeitos
  const soundEffect = new Audio();

  const start = () => {
    soundEffect.play();
    countDownRef.current.api.start();
  };

  const reset = () => {
    const randomRef = Math.random().toString(36);
    setCurrentKey(`timer_${randomRef}`);
  };

  const onTickHandler = (delta) => {
    // console.log(countDownRef.current.isPaused());

    // veneno - foco 00:50
    if (boss === "veneno" && delta.minutes === 0 && delta.seconds === 50) {
      soundEffect.src = somFocoBossVeneno;
      soundEffect.play();
    }

    // veneno - foco 00:30
    if (boss === "veneno" && delta.minutes === 0 && delta.seconds === 30) {
      soundEffect.src = somFocoBossVeneno30;
      soundEffect.play();
    }

    // veneno - foco 00:10
    if (boss === "veneno" && delta.minutes === 0 && delta.seconds === 10) {
      soundEffect.src = somFocoBossVeneno10;
      soundEffect.play();
    }

    // nightblade - foco 1:30
    if (boss === "nightblade" && delta.minutes === 1 && delta.seconds === 30) {
      soundEffect.src = somFocoNightblade;
      soundEffect.play();
    }

    // nightblade - foco 1:00
    if (boss === "nightblade" && delta.minutes === 1 && delta.seconds === 0) {
      soundEffect.src = somFocoNightblade1minuto;
      soundEffect.play();
    }

    // nightblade - foco 00:30
    if (boss === "nightblade" && delta.minutes === 0 && delta.seconds === 30) {
      soundEffect.src = somFocoNightblade30segundos;
      soundEffect.play();
    }

    // nightblade - foco 00:10
    if (boss === "nightblade" && delta.minutes === 0 && delta.seconds === 10) {
      soundEffect.src = somFocoNightblade10segundos;
      soundEffect.play();
    }
  };

  return (
    <div>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Avatar
            src={avatarUrl}
            style={{ width: "30%", height: "auto", margin: "0 auto" }}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Countdown
            key={currentKey}
            ref={countDownRef}
            date={initialTime}
            autoStart={autoStart}
            renderer={ContadorRenderer}
            onTick={onTickHandler}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={start}
            size="large"
          >
            Start
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={reset}
            size="large"
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contador;
