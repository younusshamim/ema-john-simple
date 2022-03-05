import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import { Route, Routes, Navigate } from "react-router-dom";
import Inventory from "./Components/Inventory/Inventory";
import Review from "./Components/Review/Review";
import NotFound from "./NotFound/NotFound";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Navigate to="/shop" />} />

        <Route path="/inventory" element={<Inventory />} />
        <Route path="/review" element={<Review />} />
        <Route path="/product/:productKey" element={<ProductDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
