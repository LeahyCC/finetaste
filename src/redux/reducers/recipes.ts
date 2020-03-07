// import * as actions from '../actions/recipes'
import recipesObj from '../../objects/recipes'

export interface RecipesState {
  recipes: recipesObj
}

// MOCK DATA
const recipeMockData: recipesObj = {
  id: '123',
  name: 'potato whip it good',
  cuisine: 'breakfast',
  ingredients: [
    {
      itemCount: 1,
      itemName: 'potato'
    },
    {
      itemCount: 2,
      itemName: 'garlic cloves'
    }
  ],
  mealTime: {
    prep: '10m',
    cook: '15m',
    ready: '20m'
  },
  directions: [
    {
      step: 1,
      direction: 'whip it good, real good'
    },
    {
      step: 2,
      direction: 'whip it even gooder'
    }
  ],
  notes: 'Note'
}

const intiState = recipeMockData

const recipes = (state = intiState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default recipes
