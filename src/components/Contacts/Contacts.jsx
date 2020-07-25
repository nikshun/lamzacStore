import React from "react";
import css from "./Contacts.module.css";
import Footer from "./Footer/Footer";
import Basement from "./Basement/Basement";

const Contacts = () => {
  return (
    <div className={css.contacts} id="contacts">
      <Footer />
      <Basement />
    </div>
  );
};

export default Contacts;
