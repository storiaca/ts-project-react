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
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellBefore(nextCellId, "code")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Code</span>
        </button>
        <button onClick={() => insertCellBefore(nextCellId, "text")}>
          Text
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
