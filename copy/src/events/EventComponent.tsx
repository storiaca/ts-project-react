import React, { FC } from "react";

const EventComponent: FC = () => {
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={handlerChange} />
      <div draggable onDragStart={handleDragStart}>
        Drag Me
      </div>
    </div>
  );
};

export default EventComponent;
