import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Error404Page } from "./pages/Error404Page";
import { ForgotPassword } from "./components/Form/ForgotPassword";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Market } from "./pages/Market";
import { Rankings } from "./pages/Rankings";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/marketplace" element={<Market />} />
      <Route path="/rankings" element={<Rankings />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Error404Page />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
