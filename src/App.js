import React from "react";
import Contador from "./components/Contador";
import { Container, Grid, Paper } from "@material-ui/core";

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
        <Grid item xs>
          <Paper>
            <Contador boss="veneno" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper>
            <Contador boss="nightblade" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
