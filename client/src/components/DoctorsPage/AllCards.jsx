import React from "react";
import Card from "./Card";
import data from "./Data";
const AllCards = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
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
