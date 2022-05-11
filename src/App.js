import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Users } from "./user/pages/Users";
import { NewPlaces } from "./places/pages/NewPlaces";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Users />}></Route>
        <Route path="/places/new" exact element={<NewPlaces />}></Route>
        <Route path="*" exact element={<Users />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
