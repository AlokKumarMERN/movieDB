import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFount from "./NotFount";
import NavigationBar from "./components/NavigationBar";
import SingleMovie from "./SingleMovie";
import AppProvider from "./context";
// import { Navbar } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <AppProvider>
        <header>
          <NavigationBar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFount />} />
        </Routes>

        <footer></footer>
      </AppProvider>
    </>
  );
};

export default App;
