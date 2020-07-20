import React from "react";
import "./BuyButton.css";

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
              <img src="https://www.freelogodesign.org/file/app/client/thumb/60fb90db-7abe-4440-9f74-7217d14c5fe3_200x200.png?1593445042380" />
            </div>
            <div className="name">
              <h1>
                LAMZAC<strong>.store</strong>
              </h1>
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
        <button className="button" onClick={this.showModal}>
          Заказать
        </button>
      </main>
    );
  }
}

const Modal = ({ handleClose, show, children, }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
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
