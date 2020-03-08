import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GiPineapple } from 'react-icons/gi'
import getRecipes from '../../redux/actions/recipes'
import { recipesState } from '../../objects/recipes'
import DashReceipts from './dashReceipts'

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
        <DashReceipts recipes={recipes} />
        DashBoard <GiPineapple size={20} />
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
