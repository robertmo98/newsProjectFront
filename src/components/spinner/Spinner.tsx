import { CirclesWithBar } from "react-loader-spinner";

interface SpinnerProps {
 title?: string;
 className?: string;
}

const Spinner = ({ title, className }: SpinnerProps) => {
 return (
   <div
     className={className ?? "my-10 flex flex-col justify-center items-center"}
   >
     <p>{title ?? ""}</p>
     <CirclesWithBar
       wrapperClass=""
       height={100}
       color="rgb(0,191,255)"
       barColor="rgb(0,191,255)"
     />
   </div>
 );
};

export default Spinner;
