import React, { Component } from 'react'
// ‾\_(ツ)_/‾ RouteComponentProps
// eslint-disable-next-line no-unused-vars
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

import { FaHome } from 'react-icons/fa'
import { GiCupcake } from 'react-icons/gi'
import { GoChecklist } from 'react-icons/go'

interface navItemInt {
  to: string
  icon: JSX.Element
  title: string
}
type navItem = navItemInt[]

export class Navigation extends Component<RouteComponentProps> {
  navItems = () => {
    const { location } = this.props
    const iconSize = '100%'
    const itemList: navItem = [
      {
        to: '/',
        icon: <FaHome size={iconSize} />,
        title: 'Dashboard'
      },
      {
        to: '/receipts',
        icon: <GiCupcake size={iconSize} />,
        title: 'Receipts'
      },
      {
        to: '/shopinglist',
        icon: <GoChecklist size={iconSize} />,
        title: 'Shopping List'
      }
    ]

    return Object.keys(itemList).map((key: any) => {
      const item: navItemInt = itemList[key]
      const activeLink = location.pathname === item.to
      return (
        <Link
          to={item.to}
          className={activeLink ? 'nav__item nav__item--active' : 'nav__item'}
          key={item.title}
        >
          <div className='nav__item-icon'>{item.icon}</div>
          <div className='nav__item-title'>{item.title}</div>
        </Link>
      )
    })
  }

  render() {
    return (
      <nav className='nav__w'>
        <ul className='nav__item-w'>{this.navItems()}</ul>
      </nav>
    )
  }
}

export default withRouter(Navigation)
