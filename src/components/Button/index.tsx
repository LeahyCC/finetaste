import React from 'react'

interface ButtonProps {
  type: 'toggle'
  text: string
  activeState?: boolean
  clickHandler(): void
}
function Button(props: ButtonProps) {
  const { type, text, clickHandler, activeState } = props

  const typeStyle = () => {
    switch (type) {
      case 'toggle':
        return activeState
          ? 'button__toggle button__toggle--active'
          : 'button__toggle'
      default:
        return 'button__default'
    }
  }

  return (
    <button
      onClick={() => clickHandler()}
      className={typeStyle()}
      type='button'
    >
      {text}
    </button>
  )
}

export default Button
