import React, { Component } from 'react'
import { connect } from 'react-redux'
import getRecipes from '../../redux/actions/recipes'
import { recipesState } from '../../objects/recipes'
import DashRecipes from './dashRecipes'

interface DashBoardProps {
  recipes: recipesState
  fetchRecipes(): void
}

export class DashBoard extends Component<DashBoardProps> {
  componentDidMount() {
    const { fetchRecipes } = this.props
    fetchRecipes()
  }

  render() {
    const { recipes } = this.props
    return (
      <div>
        <DashRecipes recipes={recipes} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchRecipes: () => dispatch(getRecipes())
})

const mapStateToProps = (state: any) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
