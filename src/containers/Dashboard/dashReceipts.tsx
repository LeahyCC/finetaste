import React from 'react'
import { recipesObj, recipesState } from '../../objects/recipes'

interface dashReceiptsProps {
  recipes: recipesState
}

export default function dashReceipts({ recipes }: dashReceiptsProps) {
  return (
    <div>
      {Object.keys(recipes).map((keys) => {
        const recipe: recipesObj = recipes[keys]
        return <div key={recipe.name}>{recipe.name}</div>
      })}
    </div>
  )
}
