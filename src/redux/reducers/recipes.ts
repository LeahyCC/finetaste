import { FETCH_RECIPES } from '../actions/recipes'
import { recipesState } from '../../objects/recipes'

const intiState: recipesState = {}

const recipes = (state = intiState, action: any) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default recipes
