export default function TodoList({tasks}) {
    console.log(tasks)
    return (<div>
        {tasks.map(task => (
        <ul>
            <li>user: {task.userId}</li>
            <li>task: {task.id}</li>
            <li>description: {task.title}</li>
            <li>completed: {task.completed}</li>
        </ul>))}
    </div>)
}