import { combineReducers } from 'redux'

import recipes from './recipes'

import recipesObj from '../../objects/recipes'

export interface GlobalState {
  recipes: recipesObj
}

export default combineReducers<GlobalState>({
  recipes
})
