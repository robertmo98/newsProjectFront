import { AddProps } from "../../@Types";

const Add = (props: AddProps) => {
  return (
    <div className="h-full relative">
      <img
        className="h-full z-20 blur-sm"
        src={props.img}
        alt="advertisement"
      />
      <div className="absolute bottom-10 left-0 w-full  flex items-center justify-center">
        <h1 className="text-white text-lg font-bold">This add can be yours!</h1>
      </div>
    </div>
  );
};

export default Add;
