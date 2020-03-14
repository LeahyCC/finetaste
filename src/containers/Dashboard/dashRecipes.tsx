import React from 'react'
import { recipesObj, recipesState } from '../../objects/recipes'

interface dashRecipesProps {
  recipes: recipesState
}

export default function dashRecipess({ recipes }: dashRecipesProps) {
  const mapRecipes = () => {
    return Object.keys(recipes).map((keys) => {
      const recipe: recipesObj = recipes[keys]
      return (
        <div className='x' key={recipe.id}>
          {recipe.name}
        </div>
      )
    })
  }

  return <div className='das-recipes__w'>{mapRecipes()}</div>
}
