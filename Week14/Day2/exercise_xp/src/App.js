import "./App.css";
import UserFavoriteColors from "./colors";
import Exercise from "./exercise4";

const user = {
  first_name: "Bob",
  last_name: "Dylan",
  fav_animals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

function App() {
  return (
    <div className="App">
      <Exercise />
      <h3>{user.first_name} </h3>
      <h3>{user.last_name} </h3>
      <UserFavoriteColors animal={user.fav_animals} />
    </div>
  );
}

export default App;
