import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <>
      <section class="todoapp">
        <Header />
        <Content />
       
      </section>

       <Footer />
    </>
  );
}

export default App;
