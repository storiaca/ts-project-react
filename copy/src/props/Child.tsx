import React from "react";

interface ChildProps {
  color: string;
  onClickHandler: () => void;
  children?: React.ReactNode;
}

// export const Child = ({ color, onClickHandler }: ChildProps) => {
//   return (
//     <div>
//       {color}
//       <button onClick={onClickHandler}>Click Me</button>
//     </div>
//   );
// };

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClickHandler,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClickHandler}>Click Me</button>
    </div>
  );
};
