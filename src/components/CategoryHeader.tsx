import { CategoryHeaderProps } from "../@Types";

const CategoryHeader = ({ subject }: CategoryHeaderProps) => {
  return (
    <div>
      <h2 className="text-sky-900 font-mono pl-4 dark:text-white">{subject}</h2>
      <hr />
    </div>
  );
};

export default CategoryHeader;
