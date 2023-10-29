import { Button, Input } from "@chakra-ui/react";
import { ListTodoType,TodoType } from "../types";
import React from 'react';

interface Props{
  onHandleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
  state:string;
}

const HeaderTodo: React.FC<Props> = ({onHandleInputChange,onHandleKeyDown,onButtonClick,state}) => {
  return (
    <div className="justify-between gap-3 flex">
      <Input placeholder="Write Todo..." autoFocus={true} onKeyDown={(e)=>{onHandleKeyDown(e)}} value={state.toString()} onChange={(e)=>{onHandleInputChange(e)}}/>
      <Button colorScheme='blue' onClick={()=>{onButtonClick()}}>Add Todo</Button>
    </div>
  );
};

export default HeaderTodo;
