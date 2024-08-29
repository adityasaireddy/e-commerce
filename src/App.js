import Home from "./routes/home.component";
import { Route, Routes } from "react-router-dom";

const Shop = () => {
  return <h1>Shop is now open</h1>;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
