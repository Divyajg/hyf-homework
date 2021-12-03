import "./App.css";
import Header from "./Header";
import RenderSearchResult from "./RenderSearchResult";
import {ContextProvider} from "./UserContext";
import UserSearch from "./UserSearch";

function App() {
  return (
    <div className="searchResult">
      <Header />
      <ContextProvider>
        <UserSearch />
        <RenderSearchResult />
      </ContextProvider>
    </div>
  );
}

export default App;
