import "./styles/index.css";
import React from "react";
import Layout from "./components/common/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
