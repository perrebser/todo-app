import Filters from "./Filters";

interface Props {
    onFilterTodo: (filterId:number)=>void;
}
const PreFooter: React.FC<Props> = ({onFilterTodo}) => {
  return (
    <div >
      <Filters
      onFilterTodo={onFilterTodo} />
    </div>
  );
};

export default PreFooter;
