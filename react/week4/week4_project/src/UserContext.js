import React, { useState, useEffect } from "react";
//create context object
const UserContext = React.createContext();

//create context provider
function ContextProvider({ children }) {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const url = `https://api.github.com/search/users?q=${query}`;
   if (query) {
    setLoading(true);
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((result)=> setUsers(result.items))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));}
  }, [query]);



  return (
    <UserContext.Provider value={{ users, loading, error, query, setQuery }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
export { ContextProvider };
