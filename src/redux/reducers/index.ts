import { combineReducers } from 'redux'

import recipes, { RecipesState } from './recipes'

import recipesObj from '../../objects/recipes'

export interface GlobalState {
  recipes: recipesObj
}

export default combineReducers<GlobalState>({
  recipes
})
