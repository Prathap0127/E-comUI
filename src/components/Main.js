import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// main page to append the child in the body sections
const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <section className="body">{children}</section>
      <Footer />
    </div>
  );
};

export default Main;
