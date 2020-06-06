//imports
import React, { useState } from "react";
import styled from "styled-components";
//components
import FormField from "./FormField";
import { Button2 } from "../Button2";
//icons
import spanish from "../../assets/spain.svg";
import mandarin from "../../assets/china.svg";
import english from "../../assets/usa.svg";
//text data
import langs from "./langs";
//utils
import { device } from "../../utils/screenSizes";
import px2vw from "../../utils/px2vw";
export default function Form({ form, setForm, handleSubmit }) {
  // const fileInput = useRef();
  const [lang, setLang] = useState(langs.english);

  function handleClick(idiom) {
    setLang(idiom);
    setForm({
      ...form,
      customerLanguage: idiom.lang,
    });
  }

  console.log(form);
  return (
    <FormContainer onSubmit={handleSubmit}>
      <LabelForm>Select language:</LabelForm>
      <LanguageContainer>
        <LanguageDiv onClick={() => handleClick(langs.english)}>
          <LanguageIcon src={english} />
          <LanguageText
            color={form.customerLanguage === "english" ? "true" : "false"}
          >
            English
          </LanguageText>
        </LanguageDiv>
        <LanguageDiv onClick={() => handleClick(langs.spanish)}>
          <LanguageIcon src={spanish} />
          <LanguageText
            color={form.customerLanguage === "spanish" ? "true" : "false"}
          >
            Español
          </LanguageText>
        </LanguageDiv>
        <LanguageDiv onClick={() => handleClick(langs.chinese)}>
          <LanguageIcon src={mandarin} />
          <LanguageText
            color={form.customerLanguage === "chinese" ? "true" : "false"}
          >
            中文
          </LanguageText>
        </LanguageDiv>
      </LanguageContainer>
      <FormField
        form={form}
        setForm={setForm}
        labelName={lang.firstName}
        id="customerFirstName"
        type="text"
      />
      <FormField
        form={form}
        setForm={setForm}
        labelName={lang.lastName}
        id="customerLastName"
        type="text"
      />
      <FormField
        form={form}
        setForm={setForm}
        labelName={lang.email}
        id="customerEmail"
        type="text"
      />
      <FormField
        form={form}
        setForm={setForm}
        labelName={lang.phone}
        id="customerPhone"
        type="text"
      />
      <FormField
        form={form}
        setForm={setForm}
        labelName={lang.questionsRequests}
        type="text"
        id="customerMessage"
        isTextArea={true}
      />
      <SendButton type="submit">{lang.submit}</SendButton>
    </FormContainer>
  );
}
const FormContainer = styled.form`
  color: #000;
  line-height: 1.85;
  text-align: left;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
  @media ${device.larger} {
    width: 80%;
  }
  @media ${device.large} {
    width: 80%;
  }
  @media ${device.medium} {
    width: 100%;
  }
  @media ${device.small} {
    width: 100%;
  }
`;
const SendButton = styled.button`
  ${Button2}
  margin:20px auto;
`;
const LanguageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const LanguageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80px;
`;
const LanguageIcon = styled.img`
  margin: auto;
  width: 50px;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.5);
  }
`;
const LanguageText = styled.p`
  color: ${({ color }) => (color === "true" ? "rgba(219, 100, 38)" : "#000")};
  text-align: center;
  font-weight: ${({ color }) => (color ? "bold" : "lighter")};
  font-size: 18px;
`;
const LabelForm = styled.label`
  text-transform: capitalize;
  @media ${device.larger} {
    font-size: ${px2vw(20)};
  }
  @media ${device.large} {
    font-size: ${px2vw(25)};
  }
  @media ${device.medium} {
    font-size: ${px2vw(50)};
  }
  @media ${device.small} {
    font-size: ${px2vw(65)};
  }
`;
