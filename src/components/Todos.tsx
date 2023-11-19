import { useState, ChangeEvent, FormEvent } from 'react';

import { Row } from './Row';
import { data } from '../todos';
import { AddToDo } from './AddToDo';

const generateUniqueId = () => {
  const timestamp = new Date().getTime();
  const random = Math.random().toString(36).substring(2, 10);
  return `${timestamp}-${random}`;
};



type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
  category: string;
};

export const Todos = () => {
  
  const [todos, setTodos] = useState<Todo[]>(data);
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');

  const todoLength = todos.length;
  const hasTodos = todos.length > 0;
  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length;

  
  const handleAddTodo = (todo: Todo) => {
    const updateTodos = [...todos, todo]; 
    setTodos(updateTodos); 
    setTask(''); 
    setCategory('');
  };

  
  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: generateUniqueId(),
      task,
      isCompleted: false,
      category, 
    };

    
    task && handleAddTodo(todo);
  };

  
  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value); 
  };

  
  const handleDeleteTodo = (id: string) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos); 
  };

  
  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos); 
  };

  
  return (
    <section className='w-10/11 lg:w-1/2 xl:w-10/12 max-w-2xl flex flex-col items-center'>
      
      <AddToDo
        task={task}
        handleSubmitToDo={handleSubmitTodo}
        handleChange={handleChange}
        category={category} 
        setCategory={setCategory}
      />

     
      {todos
        .filter((todo) => !category || todo.category === category)
        .map((todo) => (
          <Row
            key={todo.id}
            todo={todo}
            handleDeleteToDo={handleDeleteTodo}
            handleCheckToDo={handleCheckTodo}
          />
        ))}

      
      {!hasTodos && (
        <p className='mb-5 text-xl text-red-500'>Please add a todo!</p>
      )}

      {hasTodos && (
        <p>{`[${remainingTodos} of ${todoLength}] todos remaining`}</p>
      )}
    </section>
  );
};
