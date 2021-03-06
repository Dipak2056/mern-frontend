import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Users } from "./user/pages/Users";
import { NewPlaces } from "./places/pages/NewPlaces";
import { MainNavigation } from "./shared/Navigation/MainNavigation";
import { UserPlaces } from "./places/pages/UserPlaces";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact element={<Users />}></Route>
          <Route path="/:uid/places" exact element={<UserPlaces />}></Route>
          <Route path="/places/new" exact element={<NewPlaces />}></Route>
          <Route path="*" exact element={<Users />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
