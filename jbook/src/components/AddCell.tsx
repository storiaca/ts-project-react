import { FC } from "react";
import "./add-cell.css";
import { useActions } from "../hooks/useActions";

interface AddCellProps {
  nextCellId: string | null;
}

const AddCell: FC<AddCellProps> = ({ nextCellId }) => {
  const { insertCellBefore } = useActions();

  return (
    <div className="add-cell">
      <button onClick={() => insertCellBefore(nextCellId, "code")}>Code</button>
      <button onClick={() => insertCellBefore(nextCellId, "text")}>Text</button>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
