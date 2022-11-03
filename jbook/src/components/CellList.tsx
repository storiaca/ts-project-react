import { FC } from "react";
import { usedTypedSelector } from "../hooks/usedTypedSelector";
const CellList: FC = () => {
  usedTypedSelector((state) => state);
  return <div>CellList</div>;
};

export default CellList;
