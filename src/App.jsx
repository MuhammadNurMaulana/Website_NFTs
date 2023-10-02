import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MarketPlace } from "./components/MarketPlace";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Error404Page } from "./pages/Error404Page";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}

export default App;
