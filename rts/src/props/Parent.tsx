import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClickHandler={() => console.log("click")}>
      lorem
    </ChildAsFC>
  );
};

export default Parent;
