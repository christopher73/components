import React, { useState } from "react";
import FormBackground from "./FormBackground";
import axios from "axios";
import Form from "./Form";
import FormSubmitted from "./FormSubmitted";
import styled from "styled-components";
import { device } from "../../utils/screenSizes";
import px2vw from "../../utils/px2vw";
const URLD = "https://api.c-fajardo.com/api/middwayllc/form-to-email";
// const URLD = "http://127.0.0.1:5000/api/middwayllc/form-to-email";

export default function Forms({
  isAnimationOn,
  isGreetingOn,
  isTitleOn,
  isLanguageOn,
}) {
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
    customerLanguage: "english",
    customerEmail: "",
    customerPhone: "",
    customerMessage: "",
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

  const isLoading = <h1 style={{ color: "orange" }}>SENDING ...</h1>;
  // const language = (

  // );
  const title = (
    <FormTitle>
      <span>Co</span>ntact <span>Us</span>
    </FormTitle>
  );
  const greeting = (
    <FormMessage>We look forward to speaking with you!</FormMessage>
  );
  const content = (
    <FormContainer>
      {isTitleOn ? title : null}
      {isGreetingOn ? greeting : null}
      {formStatus === 2 ? (
        <FormSubmitted setformStatus={setformStatus} />
      ) : formStatus === 1 ? (
        isLoading
      ) : (
            <Form form={form} setForm={setForm} handleSubmit={handleSubmit} />
          )}
    </FormContainer>
  );
  return isAnimationOn ? <FormBackground>{content}</FormBackground> : content;
}
const FormContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 5%;
`;
const FormTitle = styled.h1`
  user-select: none;
  text-align: left;
  span:nth-child(1) {
    border-top: 7px solid rgba(219, 100, 38);
  }
  span:nth-child(2) {
    border-bottom: 7px solid rgba(219, 100, 38);
  }
  font-weight: lighter;
  @media ${device.larger} {
    font-size: ${px2vw(60)};
  }
  @media ${device.large} {
    font-size: ${px2vw(80)};
  }
  @media ${device.medium} {
    font-size: ${px2vw(100)};
  }
  @media ${device.small} {
    font-size: ${px2vw(120)};
  }
`;
const FormMessage = styled.h2`
  margin: 30px auto;
  color: #010;
  font-weight: lighter;
  @media ${device.larger} {
    font-size: ${px2vw(35)};
  }
  @media ${device.large} {
    font-size: ${px2vw(40)};
  }
  @media ${device.medium} {
    font-size: ${px2vw(60)};
  }
  @media ${device.small} {
    font-size: ${px2vw(75)};
  }
  span {
    font-size: 30px;
    color: rgba(219, 100, 38);
  }
`;
