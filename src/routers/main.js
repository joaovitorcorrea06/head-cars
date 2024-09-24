import React, { useState } from "react";

import Router from "./router";
import Header from "../components/Header";
import Footer from '../components/footer/Footer';

function Main(props) {

  const [open, setOpen] = useState(false)

  return (
    <div style={{ backgroundColor: '#f8f9fb', minHeight: '100vh' }}>

      <Header
        open={open}
        setOpen={setOpen}
      />

      <div >
        <Router />
      </div>

      <Footer />

    </div >
  );
}

export default Main;
