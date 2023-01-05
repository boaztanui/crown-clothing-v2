import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./routes/home.component";
import Navigation from "./routes/navigation/navigation.component";

class Shop extends Component {
  render() {
    return <h2>This is the shop page</h2>;
  }
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}
export default App;
