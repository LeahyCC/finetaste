import { recipesState } from '../objects/recipes'

// eslint-disable-next-line import/prefer-default-export
export const favoriteRecipesFiltered = (recipes: recipesState) =>
  Object.keys(recipes).filter((keys) => recipes[keys].favorite)
