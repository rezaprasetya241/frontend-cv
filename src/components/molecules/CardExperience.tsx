import React from "react";
import dayjs from "dayjs";

interface Props {
  title?: string;
  type?: string;
  subTitle?: string;
  notes?: string;
  desc?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  subList?: any[];
}

const CardExperience = ({
  title,
  subTitle,
  startDate,
  endDate,
  desc,
  subList,
}: Props) => {
  const validateEndDate = (date: string) => {
    if (dayjs(date).format("YYYY-MM-DD") === "1901-01-01") {
      return "now";
    } else {
      return date;
    }
  };

  return (
    <div>
      <div className="mt-5">
        <p className="font-bold text-[#343434] text-xl md:text-2xl">{title}</p>
        <p>{subTitle}</p>
        <p className="text-notes text-sm">
          {startDate} {endDate ? `- ${validateEndDate(endDate)}` : ""}
        </p>
        <p className="text-sm text-black">{desc}</p>
        <div>
          <span>Details: </span>
          <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
            {subList?.map((item, key) => {
              return <li key={key}>{item?.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardExperience;
