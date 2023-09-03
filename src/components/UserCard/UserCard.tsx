import './UserCard.css'
import {useEffect, useState} from "react";
import TodoList from "../TodoList/TodoList";
interface User {
    id: number;
    name: string;
    email: string;
}
interface Task {
    userId: number
    id: number;
    title: string;
    completed: boolean;
}

export default function UserCard(user: User) : JSX.Element{
    const [tasks, setTasks] = useState<Task[]>([]);
    const [show, setShow] = useState<boolean>(false);
    const showTodoList = async () => {
        try {
            const tasksData = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${user.id}`);
            const tasks: Task[] = await tasksData.json();
            const tasksToShow = tasks.slice(0, 5);
            setTasks(tasksToShow);
            flag();
        } catch (error) {
            if (error instanceof Error)
                console.log(error);
        }
    }
    const flag = () => {
      setShow(show => !show)
    }
    return(
        <div key={user.id}>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <button onClick={showTodoList}>Show Todo List</button>
            {tasks.length > 0 && show? <TodoList tasks={tasks} /> : null}
        </div>
    )
}