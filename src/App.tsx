import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import RecipesGrid from "./components/RecipesGrid";
import SidePanel from "./components/SidePanel";
import IngredientsList from "./components/IngredientsList";
import { useState } from "react";

function App() {
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(
    null
  );
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
        <GridItem area="aside" marginTop={5}>
          <SidePanel>
            <IngredientsList
              onIngredientSelected={(ingredient) =>
                setSelectedIngredient(ingredient)
              }
            />
          </SidePanel>
        </GridItem>
      </Show>
      <GridItem area="main" marginTop={5}>
        <RecipesGrid selectedIngredient={selectedIngredient} />
      </GridItem>
    </Grid>
  );
}

export default App;
