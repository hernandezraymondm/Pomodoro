import { FC, useState, useEffect, FormEvent, useRef } from 'react';
import styles from '../Todo/todo.module.css';
import { TodoTypes } from '../../types';

interface TodoFormProps {
  addTodo: (name: string) => void;
  editTodo: TodoTypes | null;
  handleUpdate: (id: string, name: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodo, editTodo, handleUpdate }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editTodo && inputRef.current) {
      setValue(editTodo.task); // Set the current value to the task being edited
      inputRef.current.focus(); // Focus the input when in edit mode
    }
  }, [editTodo]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page refresh
    // if input is not empty or whitespace
    if (value.trim()) {
      if (editTodo) {
        handleUpdate(editTodo.id, value);
      } else {
        addTodo(value);
      }
      setValue(''); // Reset the input field after submission
    }
  };

  return (
    <div>
      <form className={styles['todo-form']} onSubmit={handleSubmit}>
        <div className={styles['form-control']}>
          <input
            ref={inputRef}
            type="text"
            className={`${styles['todo-input']} ${styles['todo-input-alt']}`}
            value={value}
            placeholder="What are you working on today?"
            onChange={(e) => setValue((e.target as HTMLInputElement).value)}
          />
          <span
            className={`${styles['input-border']} ${styles['input-border-alt']}`}
          />
        </div>
        <button
          type="submit"
          className={styles['todo-btn']}
          data-text={editTodo ? 'Update' : 'Add Task'}
          // dynamic button text
        >
          {editTodo ? 'Update' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
