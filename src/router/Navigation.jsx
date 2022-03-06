import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageList from "../pages/PageList";

export default function Navigation() {
  return (
    <BrowserRouter>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">TodoList</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="list" element={<PageList />} />
      </Routes>
    </BrowserRouter>
  );
}
