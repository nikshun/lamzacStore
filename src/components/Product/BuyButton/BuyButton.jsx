import React from "react";
import "./BuyButton.css";
import logo from "../../photos/black_logo.png";

class BuyButton extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <div className="modal-contents">
            <div className="logo">
              <img src={logo} />
            </div>
            <form action="">
              <input type="text" placeholder="Телефон" />
              <input type="email" placeholder="Ваши данные" />
              <a href="#" className="bg-button">
                Submit
              </a>
            </form>
          </div>
        </Modal>

        <div class="button_cont" align="center" onClick={this.showModal} >
          <a
            class="main_b"
          >
            Заказать
          </a>
        </div>
      </main>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} >
      <section className="modal-main">
        {children}
        <div className="close" onClick={handleClose}>
          +
        </div>
      </section>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
export default BuyButton;
