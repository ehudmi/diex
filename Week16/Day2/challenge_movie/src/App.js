import "./App.css";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Redux Movies</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "50%", marginLeft: "100px" }}>
          <MovieList />
        </div>
        <div style={{ width: "50%" }}>
          <MovieDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
