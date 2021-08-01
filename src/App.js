import { Route } from "react-router-dom";
import "./App.css";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

function App() {
  return (
    <div className="App">
      <Route path="/todo" component={TodoFeature} />
      <Route path="/album" component={AlbumFeature} />
    </div>
  );
}

export default App;
