import React, { FC } from "react";

const EventComponent: FC = () => {
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={handlerChange} />
    </div>
  );
};

export default EventComponent;
