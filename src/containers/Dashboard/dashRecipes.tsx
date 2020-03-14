import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { FaStar } from 'react-icons/fa'
import { favoriteRecipesFiltered } from '../../helpers/recipes'
import { recipesObj, recipesState, mealTimeObj } from '../../objects/recipes'

interface DashRecipesProps {
  recipes: recipesState
}

interface DashRecipesState {
  recipeIndex: number
}

class DashRecipes extends Component<DashRecipesProps, DashRecipesState> {
  constructor(props: DashRecipesProps) {
    super(props)
    this.state = { recipeIndex: 0 }
  }

  handleChangeIndex = (recipeIndex: number) => {
    this.setState({
      recipeIndex
    })
  }

  mealPropTime = (mealTimes: mealTimeObj) => {
    return Object.keys(mealTimes).map((key) => {
      const mealTime: mealTimeObj = mealTimes[key]
      return (
        <div className='das-recipes__prep-item' key={key}>
          <div className='das-recipes__prep-item-key'>{key}:</div>
          <div className='das-recipes__prep-item-time'>{mealTime}</div>
        </div>
      )
    })
  }

  mapRecipes = () => {
    const { recipes } = this.props

    return favoriteRecipesFiltered(recipes).map((keys, index) => {
      const recipe: recipesObj = recipes[keys]
      return (
        <div className='das-recipes__item-w' key={recipe.id}>
          {recipe.favorite ? (
            <FaStar className='das-recipes__item-favorite' />
          ) : null}
          <div className='das-recipes__item-name'>
            {recipe.name} {index}
          </div>
          <div className='das-recipes__item-details-w'>
            <div className='das-recipes__item-cuisine'>
              Cuisine: {recipe.cuisine}
            </div>
            <div className='das-recipes__item-ingredient'>
              Ingredient Count: {recipe.ingredients?.length}
            </div>
            <div className='das-recipes__item-prep-w'>
              Meal Prep
              {recipe.mealTime ? this.mealPropTime(recipe.mealTime) : null}
            </div>
          </div>
        </div>
      )
    })
  }

  mobilePagination = () => {
    const { recipes } = this.props
    const { recipeIndex } = this.state
    return favoriteRecipesFiltered(recipes).map((recipe, index) => {
      const selectedIndex = recipeIndex === index
      return (
        <div
          className={
            selectedIndex
              ? 'das-recipes__pagination-item das-recipes__pagination-item--active'
              : 'das-recipes__pagination-item'
          }
          key={recipe}
          onClick={() => this.handleChangeIndex(index)}
        />
      )
    })
  }

  mobileView = () => {
    const { recipeIndex } = this.state
    return (
      <>
        <SwipeableViews
          index={recipeIndex}
          onChangeIndex={this.handleChangeIndex}
          enableMouseEvents
        >
          {this.mapRecipes()}
        </SwipeableViews>
        <div className='das-recipes__pagination-w'>
          {this.mobilePagination()}
        </div>
      </>
    )
  }

  render() {
    const { recipes } = this.props
    return (
      <div className='das-recipes__w'>
        <h1 className='das-recipes__heading'>Recipes</h1>
        <div className='das-recipes__list-w'>
          {Object.keys(recipes).length ? this.mobileView() : null}
        </div>
      </div>
    )
  }
}

export default DashRecipes
