import { recipesObj } from '../../objects/recipes'

const recipeMockData: recipesObj[] = [
  {
    id: '1',
    name: 'pizza',
    cuisine: 'dinner',
    ingredients: [
      {
        itemCount: 1,
        itemName: 'tomato'
      },
      {
        itemCount: 2,
        itemName: 'pineapple'
      },
      {
        itemCount: 3,
        itemName: 'beans'
      }
    ],
    mealTime: {
      prep: '2m',
      cook: '1h',
      ready: '20m'
    },
    directions: [
      {
        step: 1,
        direction: 'do the thing'
      },
      {
        step: 2,
        direction: 'mix the stuff'
      }
    ],
    notes: 'Note'
  },
  {
    id: '2',
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
]

export default recipeMockData
