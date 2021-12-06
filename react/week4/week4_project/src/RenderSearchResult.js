import React, { useContext} from "react";
import UserContext from "./UserContext";

export default function RenderSearchResult() {
  const { users, loading, error } = useContext(UserContext);

  if (loading) return <h3 className="centerText">Loading...</h3>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {!users || users.length === 0 ? (
        <li className="listStyle">No items</li>
      ) : (
        users.map((user) => {
          return (
            <li key={user.id} className="listStyle">
              User : {user.login} <br />
              Link : <a href={user.html_url}> {user.html_url}</a> <br />
              Repos : <a href={user.repos_url}> {user.repos_url}</a>
            </li>
            );
        })
      )}
    </ul>
  );
}