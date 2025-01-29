import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import RecipesGrid from "./components/RecipesGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px width
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="brown">
          SIDE
        </GridItem>
      </Show>
      <GridItem area="main" >
        <RecipesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
