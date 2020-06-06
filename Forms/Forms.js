import React, { useState } from "react";
import "./styles.css";
import SvgWave from "./SvgWave";
import axios from "axios";
import FormDiv from "./FormDiv";
const URLD = "https://api.c-fajardo.com/api/rocketdevs/form-to-email";
// const URLD = "http://127.0.0.1:5000/api/rocketdevs/form-to-email";

export default function Forms() {
  // var formData = new FormData();
  // formData.append(`file${index}`, file);
  const [formStatus, setformStatus] = useState(0);
  /***
   * Form status
   * 0 no action
   * 1 sending
   * 2 sent
   * 3 error
   */
  const [form, setForm] = useState({
    customerFirstName: "",
    customerLastName: "",
    customerEmail: "",
    customerPhone: "",
    customerCompany: "",
    customerBudget: "",
    customerAbout: "",
    customerAttachment: "",
  });

  // console.log(
  //   "form status : " + formStatus + "\nform data : " + JSON.stringify(form)
  // );

  function handleSubmit(e) {
    e.preventDefault();
    setformStatus(1);

    console.log(
      "FN => form status : " +
        formStatus +
        "\nform data : " +
        JSON.stringify(form)
    );
    //console.log(form);
    axios
      .post(URLD, form, { headers: { "Access-Control-Allow-Origin": "*" } })
      .then((res) => {
        setformStatus(2);
        console.log("form status " + formStatus);
        console.log(res);
        // this.setState({ sent: true }, this.resetForm());
      })
      .catch((err) => {
        console.log(err);
        setformStatus(3);
        console.log("Message not sent");
      });
  }
  const tryAgain = (
    <div>
      <div style={{ width: "200px", margin: "auto" }}>
        {" "}
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="check-circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="svg-inline--fa fa-check-circle fa-w-16 fa-7x"
        >
          <path
            fill="currentColor"
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
            class=""
          ></path>
        </svg>
      </div>
      <h3 style={{ paddingBottom: "30px", margin: "auto" }}>SENT !</h3>

      <button
        className="services-childrens-button"
        onClick={() => {
          setformStatus(0);
        }}
      >
        Send another Quote
      </button>
    </div>
  );
  const isLoading = <h1 style={{ color: "white" }}>LOADING ...</h1>;

  return (
    <SvgWave>
      <div id="get-a-quote-form" className="form-container">
        <h1 className="form-title">Get a Quote</h1>
        {formStatus === 2 ? (
          tryAgain
        ) : formStatus === 1 ? (
          isLoading
        ) : (
          <FormDiv form={form} setForm={setForm} handleSubmit={handleSubmit} />
        )}
      </div>
    </SvgWave>
  );
}
