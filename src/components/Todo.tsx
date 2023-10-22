import { Button, Checkbox } from "@chakra-ui/react";
import { TodoType } from "../types";
import { CloseIcon } from "@chakra-ui/icons";

interface Props extends TodoType {
    onRemoveTodo: (id:number) => void
} 

const Todo: React.FC<Props> = ({ id, title, completed,onRemoveTodo }) => {
  return (
    <div className='flex justify-between gap-11'>
      <Checkbox colorScheme="green" checked={completed} onChange={() => {}}>
        {title}
      </Checkbox>
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
