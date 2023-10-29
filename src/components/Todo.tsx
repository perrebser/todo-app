import { Button, Checkbox, Input } from "@chakra-ui/react";
import { TodoType } from "../types";
import { CloseIcon } from "@chakra-ui/icons";
import { KeyboardEvent, useState } from "react";

interface Props extends TodoType {
    onRemoveTodo: (id:number) => void
    onToggleCompleted:({id,completed}:Pick<TodoType,'id' | 'completed'>)=> void
    onEditTodo:(id:number,title:string)=>void
} 

const Todo: React.FC<Props> = ({ id, title, completed,onRemoveTodo,onToggleCompleted,onEditTodo }) => {
  const [editText,setEditText]=useState<boolean>(false)
  const [todoText,setTodoText]=useState(title)

  const handleOnChange= (e: React.ChangeEvent<HTMLInputElement>):void=>{
    setTodoText(e.target.value)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>,id:number,title:string):void => {
    if (e.keyCode === 13) {
      if (todoText === "") return;
      onEditTodo(id,title)
      setEditText(false)
    }
  };
  return (
    <div className='flex justify-between items-center '>
      <Checkbox colorScheme="green"  checked={completed}  onChange={() => {onToggleCompleted({id,completed})}}>
      </Checkbox>
      {editText ? (
       
        <Input type="text" size={"xs"} value={todoText} onChange={(e)=>{handleOnChange(e)}} onKeyDown={(e: KeyboardEvent<HTMLInputElement>)=>{handleKeyDown(e,id,todoText)}} />

      ) : (
        <p className="text-md font-medium" onDoubleClick={()=>{setEditText(true)}}>{todoText}</p>
      )}
            <Button
        rightIcon={<CloseIcon />}
        size="xs"
        colorScheme="teal"
        variant="link"
        onClick={() => {onRemoveTodo(id)}}
      ></Button>
    </div>
  );
};

export default Todo;
