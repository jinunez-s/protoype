import React, {useState, useEffect} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos= [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

    const showDescription = (todoId) => {
        let updateTodos = todos.map((todo) =>{
            if(todo.id === todoId){
                todo.showDescription = !todo.showDescription;
            }
            return todo;
        });
        setTodos(updateTodos);
    };

    const updateTodo= (todoId, newValue) => {
        if(!newValue.text ||  /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos((prev) =>
            prev.map((item) => (item.id === todoId ? newValue : item))
        );
    };

    const removeTodo = (id) => {
        const removedArr = [...todos].filter((todo) => todo.id !== id);

        setTodos(removedArr);
    };

    const completeTodo = (id) => {
        let updateTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodos);
    };

    return (
        <>
            <h1>What's the plan for today???????</h1>
            <TodoForm onSumbit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                showDescription={showDescription}
            />
        </>
    );
}

export default TodoList;