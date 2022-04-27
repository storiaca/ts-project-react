import { FC, useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: FC = () => {
  const [name, setName] = useState("");
  const onSearchHandler = () => {
    console.log("search");
  };
  return (
    <div>
      <h2>User Search</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button onClick={onSearchHandler}>Find User</button>
    </div>
  );
};

export default UserSearch;
