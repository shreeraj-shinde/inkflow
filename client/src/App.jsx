import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import UserHome from "./Pages/UserHome";
import Board from "./Pages/Board";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/user/profile"
            element={
              <ProtectedRoutes role={"user"}>
                <UserHome />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/admin/profile"
            element={
              <ProtectedRoutes role={"admin"}>
                <h1>Admin</h1>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/user/board/:id"
            element={
              <ProtectedRoutes role={"admin"}>
                <Board />
              </ProtectedRoutes>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
