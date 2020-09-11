import React from "react";
import Contador from "./components/Contador";
import { Container, Grid, Paper, Fab } from "@material-ui/core";

function App() {
  return (
    <Container>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={4}
        style={{ height: "100vh" }}
      >
        <Grid item xs={6}>
          <Paper>
            <Contador boss="veneno" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Contador boss="nightblade" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
