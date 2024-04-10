import { type Todo as TodoType, type TodoId, type ListOfTodos } from '../types'
import { Todo } from './Todo'

// Los todoProps son los parametros que puede recibir la funcion de react Todos
interface TodosProps {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

// las props que se pasan entre <> son los parametros de la forma de las props, es generico
export const Todos: React.FC<TodosProps> = ({ todos, onRemoveTodo, onToggleCompleted }) => {
  return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onToggleCompleted={onToggleCompleted}
                        onRemoveTodo={onRemoveTodo}
                        />
                </li>
            ))}
        </ul>
  )
}
