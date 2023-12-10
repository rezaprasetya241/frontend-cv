import React from "react";

interface Props {
  children: React.ReactElement;
}

const Card = ({ children }: Props) => {
  return (
    <div className="px-4 py-3 bg-backgroundBio rounded-xl">
      <div>{children}</div>
    </div>
  );
};

export default Card;
