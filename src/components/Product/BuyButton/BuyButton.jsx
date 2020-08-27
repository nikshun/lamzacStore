import React from "react";
import Modal from "react-modal";
import "./BuyButton.css";
import logo from "../../photos/black_logo.png";
import Validation from "./Validation/Validation";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default class BuyButton extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} className="order">
         <h3>Заказать</h3> 
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={customStyles}
        >
          <img src={logo} className="logo" />
          <a className="close" onClick={this.handleCloseModal} />
            <Validation />
        </Modal>
      </div>
    );
  }
}
