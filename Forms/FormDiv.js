import React, { useRef } from "react";
export default function FormDiv({ form, setForm, handleSubmit }) {
  const fileInput = useRef();
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label className="form-label" htmlFor="name">
          Name:
        </label>
        <input
          // value={form.formValue.customerFirstName}
          onChange={(e) =>
            setForm({
              ...form,
              customerFirstName: e.target.value,
            })
          }
          className="form-input"
          type="text"
          id="name"
        />
      </div>{" "}
      <div className="form-field">
        <label className="form-label" htmlFor="lastname">
          Last Name:
        </label>
        <input
          // value={form.formValue.customerFirstName}
          onChange={(e) =>
            setForm({
              ...form,
              customerLastName: e.target.value,
            })
          }
          className="form-input"
          type="text"
          id="lastname"
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="email">
          Email:
        </label>
        <input
          onChange={(e) =>
            setForm({
              ...form,
              customerEmail: e.target.value,
            })
          }
          // value={form.formValue.customerLastName}
          className="form-input"
          type="text"
          id="email"
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="phone">
          Phone:
        </label>
        <input
          onChange={(e) =>
            setForm({
              ...form,
              customerPhone: e.target.value,
            })
          }
          // value={form.formValue.customerPhone}
          className="form-input"
          type="text"
          id="phone"
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="company">
          Company:
        </label>
        <input
          onChange={(e) =>
            setForm({
              ...form,
              customerCompany: e.target.value,
            })
          }
          // value={form.formValue.customerCompany}
          className="form-input"
          type="text"
          id="company"
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="budget">
          Estimated Budget:
        </label>
        <input
          onChange={(e) =>
            setForm({
              ...form,
              customerBudget: e.target.value,
            })
          }
          // value={form.formValue.customerBudget}
          placeholder="$"
          className="form-input"
          type="number"
          id="budget"
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="tellus">
          Tell us about your project:
        </label>
        <textarea
          id="tellus"
          name="tellus"
          onChange={(e) =>
            setForm({
              ...form,
              customerAbout: e.target.value,
            })
          }
          // value={form.formValue.customerAbout}
          // placeholder="..."
          type="text"
          className="form-textArea form-input"
        />
      </div>{" "}
      <div className="form-field ">
        {" "}
        <label htmlFor="file">Attach an RFP</label>
        <input
          // value={form.formValue.customerAttachment}
          ref={fileInput}
          onChange={(e) =>
            setForm({
              ...form,
              customerAttachment: fileInput.current.files[0],
            })
          }
          className="input-file"
          type="file"
          name="file"
          id="file"
          accept=".doc, .docx,.ppt, .pptx,.txt,.pdf"
        />
      </div>
      <div className="form-field">
        <input
          className="services-childrens-button"
          id="form-send-btn"
          type="submit"
          value={"    SEND    "}
        />
      </div>
    </form>
  );
}
