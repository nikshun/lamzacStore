import React from "react";
import Modal from "react-modal";
import "./BuyButton.css";
import logo from "../../photos/black_logo.png";


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

var color = ''

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


  chooseColor = () => {
    // var element = document.getElementsByClassName("chosne")
  }
  
  sendTelegramRequest = () => {
    let xhr = new XMLHttpRequest();
    let url =
      "https://api.telegram.org/bot1368153163:AAEq5F2xFnbVYYekVqqF6oibH5jeLlDLjds/sendMessage?chat_id=-1001279398311&text=";
    let phone = document.getElementById("phone-tg").value;
    let info = document.getElementById("info-tg").value;
    url += "Телефон: " + phone + "%0a";
    url += "Данные: " + info + "%0a";
    url += new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    xhr.open("GET", url);
    xhr.send();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} className="order">

          Заказать
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={customStyles}
        >
          <img src={logo} alt="" className="logo" />
          <a href="#" className="close" onClick={this.handleCloseModal} />
          <div className="content">
            <div className="left">
              <h3>Ваша корзина</h3>
              <div className="main">
                <div className="color">
                  <h4>Цвет</h4>
                  <div className="color-picker"></div>
                </div>
                <div className="quantity">
                  <h4>Количество</h4>
                  <div className="quantity-picker"></div>
                </div>
              </div>
            </div>
            <div className="right">
              <h3>Ваши данные</h3>
              <input
                id="phone-tg"
                type="text"
                className="phone"
                placeholder="Телефон"
              />
              <input
                id="info-tg"
                type="text"
                className="name"
                placeholder="Ваши данные, город, новая почта"
              />
              <button
                onClick={(e) => {
                  this.sendTelegramRequest(e);
                  this.handleCloseModal(e);
                }}
                className="send"
              >
                Отправить
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
