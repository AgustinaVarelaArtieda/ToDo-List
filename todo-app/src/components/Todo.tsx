import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleted }) => {
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleted({ id, completed: e.target.checked })
  }
  return (
        <div className='view'>
            <input
                className='toggle'
                checked={completed}
                type='checkbox'
                onChange={handleChangeCheckbox}
            />
            <label>{title}</label>
            <button className='destroy'
                onClick={() => {
                  onRemoveTodo({ id })
                }}
            />
        </div>
  )
}
