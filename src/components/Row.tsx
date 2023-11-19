type ToDo = {
    id : string ;
    task: string ;
    isCompleted: boolean;
    category: string
};

type ToDoProps = {
  todo: ToDo;
  handleDeleteToDo: (id: string) => void;
  handleCheckToDo: (id: string) => void;
};

export const Row = ({
  todo: { task, isCompleted, id, category }, 
  handleDeleteToDo,
  handleCheckToDo,
}: ToDoProps) => {
    return (
      <div
      className={`flex transition duration-200 mb-2 w-full rounded p-4 justify-between items-center ${
        isCompleted ? 'bg-green-200' : 'bg-red-300/50'
      }`}
    >
      <p
        className={`ml-2  text-xl font-sans font-normal first-letter:capitalize
         ${isCompleted ? 'text-green-600/50 line-through' : 'text-red-900/50'}
        `}
      >
        {task} - {category} 
      </p>
      <div className='w-1/6 flex justify-between items-center mr-2'>
        <button
          className='h-7 w-7 bg-red-400/50 flex item-center text-white font-semibold transition duration-75 rounded hover:bg-red-500/50 justify-center'
          aria-label='Delete a todo'
          onClick={() => handleDeleteToDo(id)}
        >
          x
        </button>
        <input
          className='h-7 w-7'
          type='checkbox'
          checked={isCompleted}
          onChange={() => handleCheckToDo(id)}
        />
      </div>
        </div>
    )
}