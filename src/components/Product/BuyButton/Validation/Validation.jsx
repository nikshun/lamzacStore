import React, { Component } from "react";
import css from "./Validation.module.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default class SimpleFormExample extends React.Component {
  state = {
    formData: {
      quantity: "",
      phone: "",
      color: "",
      data: "",
    },
    submitted: false,
  };

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);

      let xhr = new XMLHttpRequest();
      let url =
        "https://api.telegram.org/bot1368153163:AAEq5F2xFnbVYYekVqqF6oibH5jeLlDLjds/sendMessage?chat_id=-1001279398311&text=";
      let phone = document.getElementById("phone-tg").value;
      let data = document.getElementById("data-tg").value;
      let color = document.getElementById("color-tg").value;
      let quantity = document.getElementById("quantity-tg").value;
      url += "Телефон: " + phone + "%0a";
      url += "Данные: " + data + "%0a";
      url += "Цвет: " + color + "%0a";
      url += "Количество: " + quantity + "%0a";
      url += new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      xhr.open("GET", url);
      xhr.send();
    });
  };

  render() {
    const { formData, submitted } = this.state;
    return (
      <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
        <h2 className={css.about}>Ваши данные</h2>
        <div className={css.content}>
          <TextValidator
            className={css.quantity}
            id="quantity-tg"
            label="Количество"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange}
            name="quantity"
            value={formData.quantity}
            validators={["required"]}
            errorMessages={["Введите количество ламзаков"]}
          />
          <TextValidator
            className={css.phone}
            id="phone-tg"
            label="Телефон"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange}
            name="phone"
            value={formData.phone}
            validators={["required"]}
            errorMessages={["Введите свой номер телефона"]}
          />
          <TextValidator
            className={css.color}
            id="color-tg"
            label="Цвет"
            onChange={this.handleChange}
            name="color"
            value={formData.color}
            validators={["required"]}
            errorMessages={["Введите цвет ламзака"]}
          />
          <TextValidator
            className={css.data}
            id="data-tg"
            label="ФИО"
            onChange={this.handleChange}
            name="data"
            value={formData.data}
            validators={["required"]}
            errorMessages={["Введите ваше ФИО"]}
          />
        </div>
        <div className={css.buy}>
          <button
            color="primary"
            variant="contained"
            type="submit"
            disabled={submitted}
            className={css.send}
          >
            <h5>Отправить</h5>
          </button>
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                При отправке формы наш менеджер позвонит вам в течении часа
              </Tooltip>
            }
          >
            <span className="d-inline-block">
              <h4 className={css.question}>?</h4>
            </span>
          </OverlayTrigger>
        </div>
      </ValidatorForm>
    );
  }
}
