import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px width
      }}
    >
      <GridItem area="nav" bg="coral">
        Navbar
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="brown">
          SIDE
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
