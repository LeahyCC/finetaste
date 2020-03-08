export const FETCH_RECIPES: string = 'FETCH_RECIPES'

// MOCK DATA
// eslint-disable-next-line import/first
import recipeMockData from './MOCKDATA'

const getRecipes = () => (dispatch: any) => {
  dispatch({
    type: FETCH_RECIPES,
    payload: recipeMockData
  })
}

export default getRecipes
