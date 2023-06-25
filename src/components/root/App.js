import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/product" element={<Dashboard />}></Route>
          <Route exact path="/cart" element={<CartDetail />}></Route>
          <Route path="/saveproduct/" element={<AddOrUpdateProduct />}></Route>
          <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct />}></Route>
        </Routes>
        
      </Container>
    </div>
  );
}

export default App;
