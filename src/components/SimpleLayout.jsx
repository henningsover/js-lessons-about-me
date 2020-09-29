import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function SimpleLayout({ mainContent }) {
  return (
    <div>
      <Header />
      {mainContent}
      <Footer />
    </div>
  );
}
