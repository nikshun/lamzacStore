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

  sendTelegramRequest = () => {
    let xhr = new XMLHttpRequest();
    let url = "https://api.telegram.org/bot1368153163:AAEq5F2xFnbVYYekVqqF6oibH5jeLlDLjds/sendMessage?chat_id=-1001279398311&text="
    let phone = document.getElementById("phone-tg").value
    let info = document.getElementById("info-tg").value
    url += "Телефон: " + phone + "%0a"
    url+= "Данные: " + info + "%0a"
    url+= new Date().toJSON().slice(0,10).replace(/-/g,'/')
    xhr.open('GET', url);
    xhr.send();
  }

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="modal-contents">
            <div className="logo">
              <img src={logo} />
            </div>
            <form action="">
              <input id="phone-tg" type="text" placeholder="Телефон" />
              <input id="info-tg" type="email" placeholder="Ваши данные" />

              <a onClick={this.sendTelegramRequest} href="#" className="bg-button">
                Submit
              </a>

            </form>
          </div>
        </Modal>

        <div class="button_cont" align="center" onClick={this.showModal}>
          <a class="main_b">Заказать</a>
        </div>
      </main>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
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
