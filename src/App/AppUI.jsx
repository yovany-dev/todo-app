import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { TodoContext } from '../components/TodoContext/TodoContext';

const AppUI = () => {
    const {
        loading,
        error,
        searchedTodo,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext);

    return (
        <>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedTodo.length === 0) && <EmptyTodos />}

            {searchedTodo.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>
        <CreateTodoButton />
        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}
        </>
    )
}

export { AppUI };