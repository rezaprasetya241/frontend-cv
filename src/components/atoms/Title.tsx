import React from "react";

interface Props {
  title?: string;
}

const Title = ({ title }: Props) => {
  return (
    <div className="flex items-center text-white">
      <div className="bg-brown rounded-xl text-center w-full max-w-[200px] py-2 font-semibold text-xs md:text-base">
        {title?.toUpperCase()}
      </div>
      <div className="h-[2px] w-full max-w-[300px] top-[50%]  bg-brown" />
    </div>
  );
};

export default Title;
