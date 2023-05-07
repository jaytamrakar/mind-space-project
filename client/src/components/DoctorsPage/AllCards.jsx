import React from "react";
import Card from "./Card";
import data from "./Data";
const AllCards = () => {
  return (
    <>
      <div className="flex max-w-7xl flex-wrap m-auto justify-center ">
        {data.map((item) => (
          <Card
            img={item.img}
            name={item.name}
            qualification={item.qualification}
            specialization={item.specialization}
            experience={item.experience}
          />
        ))}
      </div>
    </>
  );
};

export default AllCards;
