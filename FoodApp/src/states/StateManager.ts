import { create } from "zustand";
import { Recipe, Ingredient, Ratings } from "../types";
import axios from "axios";
import { getURL } from "../resources/Variables";

interface RecipeState {
  recipes: Recipe[];
  addNewRecipe: (newRecipe: Recipe) => void;
  deleteRecipe: (id: string) => void;
  updateRecipe: (id: string) => void;
  setRecipeState: (newRecipe: Recipe[]) => void;
  getRecipesFromAPI: () => void;
}
const recipeURL = getURL();
const useRecipeState = create<RecipeState>()((set) => ({
  recipes: [],

  addNewRecipe: (newRecipe: Recipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  deleteRecipe: (id: string) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe._id !== id),
    })),

  updateRecipe: (id: string) =>
    set((state) => ({
      recipes: state.recipes.map((recipeToUpdate) => {
        if (recipeToUpdate._id === id) return recipeToUpdate;

        return {
          ...recipeToUpdate,
        };
      }),
    })),

  setRecipeState: (newRecipes: Recipe[]) =>
    set(() => ({
      recipes: newRecipes,
    })),

  getRecipesFromAPI: async () => {
    try {
      const response = await axios.get<Recipe[]>(`${recipeURL}/recipes`);
      if (response.status === 200) {
        console.log(response.data)
        set((state) => ({
          recipes: response.data,
        }));
      }
    } catch (error) {
      console.error("Error fetching recipes: ", error);
    }
  },
  //const getRecipesFromAPI = useRecipeState((state) => state.getRecipesFromAPI);
  //<button onClick={useRecipeState.getState().getRecipesFromAPI}>Fetch recipes</button> to call for this function
}));

export default useRecipeState;
