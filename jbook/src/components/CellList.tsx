import { FC, Fragment } from "react";
import { usedTypedSelector } from "../hooks/usedTypedSelector";
import CellListItem from "./CellListItem";
import AddCell from "./AddCell";

const CellList: FC = () => {
  const cells = usedTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <AddCell nextCellId={cell.id} />
      <CellListItem cell={cell} />
    </Fragment>
  ));
  return (
    <div>
      {renderedCells}
      <AddCell nextCellId={null} />
    </div>
  );
};

export default CellList;
