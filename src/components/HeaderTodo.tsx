import { Button, Input } from "@chakra-ui/react";
import { ListTodoType,TodoType } from "../types";
import React from 'react';

interface Props{
  onHandleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}

const HeaderTodo: React.FC<Props> = ({onHandleInputChange,onHandleKeyDown,onButtonClick}) => {
  return (
    <div className="w-1/3 justify-between gap-3 flex">
      <Input placeholder="Write Todo..." autoFocus={true} onKeyDown={(e)=>{onHandleKeyDown(e)}} onChange={(e)=>{onHandleInputChange(e)}}/>
      <Button colorScheme='blue' onClick={()=>{onButtonClick()}}>Add Todo</Button>
    </div>
  );
};

export default HeaderTodo;
