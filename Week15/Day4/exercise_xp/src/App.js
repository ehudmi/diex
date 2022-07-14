import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorBoundary from "./Components/ErrorBoundary";
import PostList from "./Components/PostList";
import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import Example3 from "./Components/Example3";

// setting up data and function for exercise 3 and button
const data = {
  key1: "myusername",
  email: "mymail@gmail.com",
  name: "Isaac",
  lastname: "Doe",
  age: 27,
};
const getWebhook = async () => {
  const response = await fetch(
    "https://webhook.site/567b735c-d409-467a-aaa9-075da32ddce6",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  console.log(response);
};
const Button = () => {
  return <button onClick={getWebhook}>Click Me</button>;
};
// setting up the functional components for exercise 1 and all its parts
const HomeScreen = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
const ProfileScreen = () => {
  return (
    <div>
      <h1>Profile Screen</h1>
    </div>
  );
};
// The functional component for shop will throw an error
const ShopScreen = () => {
  throw new Error("This is foobar");
};
// Navbar for the routes for exercise 1
function NavList() {
  let activeClassName = "underline";
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="shop"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Shop
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
// This is the start of the actual App function
function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <NavList />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ErrorBoundary key={1}>
                  <HomeScreen />
                </ErrorBoundary>
              }
            />
            <Route
              path="/profile"
              element={
                <ErrorBoundary key={2}>
                  <ProfileScreen />
                </ErrorBoundary>
              }
            />
            <Route
              path="/shop"
              element={
                <ErrorBoundary key={3}>
                  <ShopScreen />
                </ErrorBoundary>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>Hi This is a title</h2>
        <PostList />
      </div>
      <div>
        <Example1 />
        <Example2 />
        <Example3 />
        <Button />
      </div>
    </div>
  );
}

export default App;
