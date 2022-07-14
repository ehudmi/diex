import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorBoundary from "./Components/ErrorBoundary";
import PostList from "./Components/PostList";
import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import Example3 from "./Components/Example3";

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
  const json = response.json();
  console.log(json);
};

const Button = () => {
  return <button onClick={getWebhook}>Click Me</button>;
};

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

const ShopScreen = () => {
  throw new Error("This is foobar");
};
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
            {/* <Route path="/webhook" element={<Button />} /> */}
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
