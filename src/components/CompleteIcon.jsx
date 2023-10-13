import React from 'react';
import { TodoIcon } from './TodoIcon';

const CompleteIcon = ({ completed, onComplete }) => {
  return (
    <TodoIcon 
        type={'check'}
        color={completed ? '#0f0' : 'gray'}
        onClick={onComplete}
    />
  )
}

export { CompleteIcon };