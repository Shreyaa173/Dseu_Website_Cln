import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import About from "./components/About";
import AboutGrid from "./components/AboutGrid";
import NewsSection from "./components/NewsSection";
import TabSection from "./components/TabSection";
import Facilities from "./components/Facilities";

function App() {
  return (
    <>
      {/* <Card />
      <About />
      <div className="app">
        <NewsSection />
        <TabSection />
      </div> */}
      <Facilities />

    </>
  );
}

export default App;
