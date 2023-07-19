import React from 'react'
import { ReactComponent as Del } from '../assets/icon-remove.svg'

const Button = ({
  stl='default',
  children,
  clickHandler,
  clearHandler,
}) => {

  return (
    <div 
      className={`btn btn-${stl}`}
      onClick={clickHandler}
    >
      <span>{children}</span>
    {stl === 'clear' && (
      <div
        className='clear'
        onClick={clearHandler}
      >
        <Del/>
      </div>
    )}
    </div>
  )
}

export default Button