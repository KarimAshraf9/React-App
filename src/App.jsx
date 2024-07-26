import { useState } from "react";

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Detail from "./components/Detail/Detail";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Portfolio from "./components/Portfolio/Portfolio";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const [dialogData, setDialogData] = useState({});

  return (
    <>
      <NavBar />

      <Detail
        showDetailsDialog={showDetailsDialog}
        dialogData={dialogData}
        setShowDetailsDialog={setShowDetailsDialog}
        setDialogData={setDialogData}
      />

      <Home />

      <Portfolio
        setShowDetailsDialog={setShowDetailsDialog}
        setDialogData={setDialogData}
      />

      <About />

      <Contact />

      <Info />

      <Footer />
    </>
  );
}

export default App;
