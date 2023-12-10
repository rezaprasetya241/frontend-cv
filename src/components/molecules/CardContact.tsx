import React from "react";
import Card from "../atoms/Card";
import { MdEmail } from "react-icons/md";

interface Props {
  icon?: React.ReactNode;
  desc?: string;
}

const CardContact = ({ icon, desc }: Props) => {
  return (
    <Card>
      <div className="flex items-center justify-start text-white lg:text-lg">
        {icon}
        <div className="ml-5 text-start">
          <p className="text-sm line-clamp-1">{desc}</p>
        </div>
      </div>
    </Card>
  );
};

export default CardContact;
