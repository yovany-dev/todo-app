import React from "react";
import { TodoContext } from "./TodoContext/TodoContext";

const TodoCounter = () => {
    const {completedTodos: completed, totalTodos: total} = React.useContext(TodoContext);

    return (
        completed === total && total !== 0
        ?
            <h1>Has completado todo tus TODOs 👽✌️🔥</h1>
        :
            <h1>Has completado <br />
                <span>{completed}</span> de <span>{total}</span> TODOs
            </h1>
    )
}

export { TodoCounter };