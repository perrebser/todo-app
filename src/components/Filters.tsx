import { Button, ButtonGroup } from "@chakra-ui/react";

interface Props{
    onFilterTodo: (filterId:number)=>void;
}
const Filters: React.FC<Props> = ({onFilterTodo}) => {
  return (
    <ButtonGroup variant="ghost" spacing="1">
      <Button colorScheme="cyan" size={"sm"}onClick={()=>onFilterTodo(0)} >All</Button>
      <Button colorScheme="cyan" size={"sm"} onClick={()=>onFilterTodo(1)}>Completed</Button>
      <Button colorScheme="cyan" size={"sm"}onClick={()=>onFilterTodo(2)}>Active</Button>
    </ButtonGroup>
  );
};

export default Filters;
