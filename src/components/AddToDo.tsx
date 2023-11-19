import { ChangeEvent, FormEvent } from "react";


export type AddToDoProps = {
    task: string;
    handleSubmitToDo: (e: FormEvent) => void;
    handleChange: (e: ChangeEvent) => void;
    category: string; 
    setCategory: React.Dispatch<React.SetStateAction<string>>; 
  };

  export const AddToDo = ({
    task,
    handleSubmitToDo,
    handleChange,
    category,
    setCategory,
  }: AddToDoProps) =>{
    return(

      <div className='container mx-auto'>
   
        <form className=" justify-center items-center w-full mb-2"
        onSubmit={handleSubmitToDo}>
            <select
        className='p-2 m-1 border rounded w-1/2'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=''>Select Category</option>
        <option value='Personal'>Personal</option>
        <option value='Work'>Work</option>
        
      </select>
            <input className = "flex-1 pl-5 rounded py-2 outline-none drop-shadow text-gray-900 mr-2" 
            type="text"
            name="task"
            value={task}
            onChange={handleChange} />

            <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
             type="submit" aria-label="Add todo">
                +
            </button>

        </form>
      </div>
        
    )
}

