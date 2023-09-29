import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MarketPlace } from "./components/MarketPlace";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/marketplace" element={<MarketPlace />} />
    </Routes>
  );
}

export default App;
