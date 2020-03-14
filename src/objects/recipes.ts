export interface ingredientsObj {
  [key: string]: any
  itemCount: number
  itemName: string
}
type ingredientsType = ingredientsObj[]

export interface mealTimeObj {
  [key: string]: any
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

export interface recipesState {
  [key: string]: recipesObj
}

export interface recipesObj {
  [key: string]: any
  id: string
  name: string
  favorite: boolean
  cuisine: cuisineTypes
  ingredients: ingredientsType
  mealTime: mealTimeObj
  directions: directionType
  notes: string
}
