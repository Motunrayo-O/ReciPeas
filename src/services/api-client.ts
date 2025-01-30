import axios from "axios";

    const key = import.meta.env.VITE_SPOONACULAR_API_KEY;

export default axios.create({
  baseURL: "https://api.spoonacular.com/recipes",
  params: {
    apiKey: key,
  },
});
