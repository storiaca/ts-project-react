import { FC } from "react";
import "./add-cell.css";
import { useActions } from "../hooks/useActions";

interface AddCellProps {
  nextCellId: string;
}

const AddCell: FC<AddCellProps> = ({ nextCellId }) => {
  const { insertCellBefore } = useActions();

  return (
    <div>
      <button onClick={() => insertCellBefore(nextCellId, "code")}>Code</button>
      <button onClick={() => insertCellBefore(nextCellId, "text")}>Text</button>
    </div>
  );
};

export default AddCell;
