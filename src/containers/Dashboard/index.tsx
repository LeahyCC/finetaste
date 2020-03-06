import React, { Component } from 'react'
import { connect } from 'react-redux'

import { GiPineapple } from 'react-icons/gi'
import { simpleAction } from '../../redux/actions/simpleAction'

interface AppProps {
  simpleActionX(): void
}

export class DashBoard extends Component<AppProps> {
  handleSimpleAction = () => {
    const { simpleActionX } = this.props
    simpleActionX()
  }

  render() {
    return (
      <div>
        DashBoard <GiPineapple size={20} />
        <button type='button' onClick={this.handleSimpleAction}>
          Test redux action
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  simpleActionX: () => dispatch(simpleAction())
})

const mapStateToProps = (state: any) => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
