import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { FaStar } from 'react-icons/fa'
import { favoriteRecipesFiltered } from '../../helpers/recipes'
import Button from '../../components/Button'
import { recipesObj, recipesState, mealTimeObj } from '../../objects/recipes'

interface DashRecipesProps {
  recipes: recipesState
}

interface DashRecipesState {
  recipeIndex: number
  recipesListLayout: boolean
}

class DashRecipes extends Component<DashRecipesProps, DashRecipesState> {
  constructor(props: DashRecipesProps) {
    super(props)
    this.state = { recipeIndex: 0, recipesListLayout: true }
  }

  handleChangeIndex = (recipeIndex: number) => {
    this.setState({
      recipeIndex
    })
  }

  toggleLayout = () => {
    const { recipesListLayout } = this.state
    this.setState({
      recipesListLayout: !recipesListLayout
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
    const paginationClassName = 'das-recipes__pagination-item'
    return favoriteRecipesFiltered(recipes).map((recipe, index) => {
      const selectedIndex = recipeIndex === index
      return (
        <div
          className={
            selectedIndex
              ? `${paginationClassName} ${paginationClassName}--active`
              : paginationClassName
          }
          key={recipe}
          onClick={() => this.handleChangeIndex(index)}
        />
      )
    })
  }

  mobileTileLayout = () => {
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

  mobileListLayout = () => {
    return this.mapRecipes()
  }

  mobileView = () => {
    const { recipesListLayout } = this.state
    return recipesListLayout ? this.mobileTileLayout() : this.mobileListLayout()
  }

  render() {
    const { recipes } = this.props
    const { recipesListLayout } = this.state
    return (
      <div className='das-recipes__w'>
        <h1 className='das-recipes__heading-w'>
          <h1 className='das-recipes__heading-text'>Recipes</h1>
          <Button
            type='toggle'
            text='Toggle Layout'
            activeState={recipesListLayout}
            clickHandler={this.toggleLayout}
          />
        </h1>
        <div className='das-recipes__list-w'>
          {Object.keys(recipes).length ? this.mobileView() : null}
        </div>
      </div>
    )
  }
}

export default DashRecipes
