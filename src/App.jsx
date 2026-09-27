// import { useState } from 'react'
// import heroImg from './assets/hero.png'

// import viteLogo from './assets/vite.svg'
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";

// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

// root.render(
//     <Page />
// )

export default App;
