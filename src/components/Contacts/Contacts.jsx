import React from "react";
import css from "./Contacts.module.css";
import Contacts_waves from "./Contacts_waves/Contacts_waves";
import Footer from "./Footer/Footer";

const Contacts = () => {
  return (
    <div className={css.contacts} id="contacts">
      <Contacts_waves />
      <Footer />
    </div>
  );
};

export default Contacts;
