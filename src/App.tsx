import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateAreas={`"nav nav" "aside main"`}>
      <GridItem area="nav" bg="coral">
        Navbar
      </GridItem>
      <GridItem area="aside" bg="brown">
        SIDE
      </GridItem>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
