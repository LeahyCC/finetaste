import { combineReducers } from 'redux'
import { recipesState } from '../../objects/recipes'
import recipes from './recipes'

export interface GlobalState {
  recipes: recipesState
}

export default combineReducers<GlobalState>({
  recipes
})
