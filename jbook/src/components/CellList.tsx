import { FC } from "react";
import { usedTypedSelector } from "../hooks/usedTypedSelector";
import CellListItem from "./CellListItem";

const CellList: FC = () => {
  const cells = usedTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <CellListItem key={cell.id} cell={cell} />
  ));
  return <div>{renderedCells}</div>;
};

export default CellList;
