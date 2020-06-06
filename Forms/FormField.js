import React from "react";
import styled from "styled-components";
//utils
import { device } from "../../utils/screenSizes";
import px2vw from "../../utils/px2vw";

export default function FormField({
  labelName,
  form,
  setForm,
  type,
  isTextArea,
  placeHolder,
  id,
}) {
  function createObj(objKey, objValue) {
    var key = objKey;
    var object = {};
    object[key] = objValue;
    return object;
  }
  return (
    <FormFieldContainer>
      <LabelForm htmlFor={id}>{labelName}:</LabelForm>
      {isTextArea ? (
        <TextArea
          onChange={(e) =>
            setForm({
              ...form,
              ...createObj(id, e.target.value),
            })
          }
          type={type}
          id={id}
          // value={form.formValue.customerAbout}
          // placeholder={placeHolder}
        />
      ) : (
        <InputForm
          // value={form.formValue.customerFirstName}
          onChange={(e) =>
            setForm({
              ...form,
              ...createObj(id, e.target.value),
            })
          }
          type={type}
          id={id}
          // placeholder={placeHolder}
        />
      )}
    </FormFieldContainer>
  );
}
const FormFieldContainer = styled.div`
  margin: auto;
  width: 100%;
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
const InputForm = styled.input`
  font-size: 20px;
  margin-bottom: 10px;
  border-style: none;
  border-radius: 20px;
  text-indent: 20px;
  padding: 10px 0;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  width: 100%;
`;
const TextArea = styled.textarea`
  font-size: 20px;
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  border-style: none;
  border-radius: 20px;
  text-indent: 20px;
  padding: 10px 0;
  resize: none;
  box-sizing: border-box;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
`;
