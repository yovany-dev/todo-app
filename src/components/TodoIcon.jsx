import React from 'react'
import { ReactComponent as CheckSVG } from '../svg/check.svg';
import { ReactComponent as DeleteSVG } from '../svg/delete.svg';

const iconTypes = {
  'check': color => <CheckSVG className="icon-svg" fill={color} />,
  'delete': color => <DeleteSVG className="icon-svg" fill={color} />
}

const TodoIcon = ({ type, color, onClick }) => {
  return (
    <span 
      className={`icon icon-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon };