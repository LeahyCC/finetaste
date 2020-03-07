interface ingredientsObj {
  itemCount: number
  itemName: string
}
type ingredientsType = ingredientsObj[]

interface mealTimeObj {
  prep: string
  cook: string
  ready: string
}

interface directionsObj {
  step: number
  direction: string
}
type directionType = directionsObj[]

export type cuisineTypes = 'breakfast' | 'lunch' | 'dinner'

export default interface recipesObj {
  id: string
  name: string
  cuisine: cuisineTypes
  ingredients: ingredientsType
  mealTime: mealTimeObj
  directions: directionType
  notes: string
}
