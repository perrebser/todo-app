import { Button, Input } from "@chakra-ui/react";
import { ListTodoType,TodoType } from "../types";


  const handleAddTodo= () =>{
    
  }
const HeaderTodo: React.FC = () => {
  return (
    <div className="w-2/3 justify-around flex">
      <Input placeholder="Basic usage" autoFocus={true} onChange={()=>{}}/>
      <Button colorScheme='blue' onClick={handleAddTodo}>Add Todo</Button>
    </div>
  );
};

export default HeaderTodo;
