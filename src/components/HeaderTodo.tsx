import { Button, Input } from "@chakra-ui/react";
import { ListTodoType,TodoType } from "../types";
import React from 'react';

interface Props{
  onHandleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const HeaderTodo: React.FC<Props> = ({onHandleInputChange,onHandleKeyDown}) => {
  return (
    <div className="w-2/3 justify-around flex">
      <Input placeholder="Write Todo..." autoFocus={true} onKeyDown={(e)=>{onHandleKeyDown(e)}} onChange={(e)=>{onHandleInputChange(e)}}/>
      <Button colorScheme='blue' onClick={()=>{}}>Add Todo</Button>
    </div>
  );
};

export default HeaderTodo;
