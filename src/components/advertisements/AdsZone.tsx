import React from "react";
import Add from "./Ad";
import { AddSZoneProps } from "../../@Types";

const AddsZone = (props: AddSZoneProps) => {
  return (
    <>
      <div className="flex flex-col justify-between w-1/3 pl-24 pt-2 pr-24 ">
        <div className="h-1/3 aspect">
          <div className="h-4/6 min-w-fit">
            <div className="h-full relative">
              <img className="h-full z-20 blur-sm aspect-video" src={props.img1} />
              <div className="absolute bottom-10 left-0 w-full  flex items-center justify-center">
                <h1 className="text-white text-lg font-bold">
                  {props.header1}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="h-1/3">
          <div className="h-4/6 min-w-fit">
            <div className="h-full relative">
              <img className="h-full z-20 blur-sm aspect-video" src={props.img2} />
              <div className="absolute bottom-10 left-0 w-full  flex items-center justify-center">
                <h1 className="text-white text-lg font-bold">
                  {props.header2}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="h-1/3">
          <div className="h-4/6 min-w-fit">
            <div className="h-full relative">
              <img className="h-full z-20 blur-sm aspect-video" src={props.img3} />
              <div className="absolute bottom-10 left-0 w-full  flex items-center justify-center">
                <h1 className="text-white text-lg font-bold">
                  {props.header3}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddsZone;
