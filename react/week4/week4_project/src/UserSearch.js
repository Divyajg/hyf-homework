import { useContext } from "react";
import UserContext from "./UserContext";

export default function UserSearch() {
  const {query, setQuery} = useContext(UserContext);

  return (
    <div className="App">
      <input
      className="inputText"
        type="text"
        placeholder="search for user"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
