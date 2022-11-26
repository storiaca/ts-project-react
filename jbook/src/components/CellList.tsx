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
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));
  return (
    <div>
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
