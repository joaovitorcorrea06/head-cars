import React, { useState } from "react";

import Router from "./router";
import Header from "../components/Header";
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';

function Main(props) {

  const [open, setOpen] = useState(false)

  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);

  const tipo_rota = 'privada'

  if (tipo_rota === 'privada') {
    return (
      <div className="relative min-h-screen md:flex">
        {/* sidemenu */}
        <Sidebar setExpand={setSideMenuIsExpand} />
        {/* content */}
        <div
          className={`flex-1 min-h-screen mx-0 bg-slate-100 transition-all duration-300 ease-in-out ${sideMenuIsExpand ? "md:ml-72" : "md:ml-20"
            }`}
        >
          <Router />
        </div>
      </div>
    );
  } else {

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
}

export default Main;
