import React, { FC, useState } from "react";
import { useActions } from "../hooks/useActions";

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();

  const termSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={termSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
