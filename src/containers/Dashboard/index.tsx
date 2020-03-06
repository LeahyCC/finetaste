import React, { Component } from 'react'
import { connect } from 'react-redux'

import { GiPineapple } from 'react-icons/gi'
import { simpleAction } from '../../redux/actions/simpleAction'

interface AppProps {
  simpleReducer: any
  simpleAction(): void
}
export class DashBoard extends Component<AppProps> {
  simpleAction = () => {
    simpleAction()
  }

  render() {
    return (
      <div>
        DashBoard <GiPineapple size={20} />
        <button type='button' onClick={this.simpleAction}>
          Test redux action
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = (state: any) => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
