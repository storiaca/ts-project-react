import { FC, useState, useRef } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | null>();
  const onSearchHandler = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };
  return (
    <div>
      <h2>User Search</h2>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button onClick={onSearchHandler}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
