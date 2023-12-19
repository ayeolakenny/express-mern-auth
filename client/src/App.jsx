import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Layout } from "./components/shared/Layout";
import { ACCESS_TOKEN_KEY } from "./constant";

function App() {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {token && <Route path="/" element={<Home />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Route>
    </Routes>
  );
}

export default App;
