import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import useInput from "../Hooks/use-input";

const SimpleForm = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  const {
    value: enteredName,
    hasError: nameIsInvalid,
    enteredValueIsValid: nameIsValid,
    addInputHandler: addNameHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameIsReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailIsInvalid,
    enteredValueIsValid: emailIsValid,
    addInputHandler: addEmailHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailIsReset,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredNumber,
    hasError: numberIsInvalid,
    enteredValueIsValid: numberIsValid,
    addInputHandler: addNumberHandler,
    inputBlurHandler: numberBlurHandler,
    reset: numberIsReset,
  } = useInput(
    (value) =>
      (value.match("[0-9]{10}") && value.length === 10) || value.trim() === ""
  );

  const {
    value: enteredCountry,
    hasError: countryIsInvalid,
    enteredValueIsValid: countryIsValid,
    addInputHandler: addCountryHandler,
    reset: countryIsReset,
  } = useInput((value) => value);

  const {
    value: enteredState,
    hasError: stateIsInvalid,
    enteredValueIsValid: stateIsValid,
    addInputHandler: addStateHandler,
    reset: stateIsReset,
  } = useInput((value) => value);

  const {
    value: enteredCity,
    hasError: cityIsInvalid,
    enteredValueIsValid: cityIsValid,
    addInputHandler: addCityHandler,
    reset: cityIsReset,
  } = useInput((value) => value);

  const {
    value: enteredMessage,
    hasError: messageIsInvalid,
    enteredValueIsValid: messageIsValid,
    addInputHandler: addMessageHandler,
    reset: messageIsReset,
  } = useInput((value) => value);

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    handleClose();
    setTimeout(() => {
      alert("Your data has been submitted successfully");
    }, 1000);
    nameIsReset();
    emailIsReset();
    numberIsReset();
    countryIsReset();
    stateIsReset();
    cityIsReset();
    messageIsReset();
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (
      !nameIsValid &&
      !emailIsValid &&
      !numberIsValid &&
      !countryIsValid &&
      !stateIsValid &&
      !cityIsValid &&
      !messageIsValid
    ) {
      return;
    }
    setData({
      enteredName,
      enteredEmail,
      enteredNumber,
      enteredCity,
      enteredCountry,
      enteredMessage,
    });
    handleShow();
  };

  const inputClass = nameIsInvalid
    ? "form-control-form invalid"
    : "form-control-form ";

  const inputClassEmail = emailIsInvalid
    ? "form-control-form invalid"
    : "form-control-form ";

  const inputClassNumber = numberIsInvalid
    ? "form-control-form invalid"
    : "form-control-form ";

  const inputClassCountry = countryIsInvalid
    ? "form-control-form invalid"
    : "form-control-form ";

  const inputClassState = stateIsInvalid
    ? "form-control-form invalid"
    : "form-control-form ";

  const inputClassCity = cityIsInvalid
    ? "form-control-form invalid"
    : "form-control-form ";

  const inputClassMessage = messageIsInvalid
    ? "form-control-form invalid"
    : "form-control-form ";

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <div className={inputClass}>
          <label htmlFor="name">
            Your Name <span style={{ color: "red" }}> *</span>
          </label>
          <input
            required
            type="text"
            id="name"
            onChange={addNameHandler}
            value={enteredName}
            onBlur={nameBlurHandler}
          />
          {nameIsInvalid && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={inputClassEmail}>
          <label htmlFor="email">
            Your Email <span style={{ color: "red" }}> *</span>
          </label>
          <input
            required
            type="text"
            id="email"
            onChange={addEmailHandler}
            value={enteredEmail}
            onBlur={emailBlurHandler}
          />
          {emailIsInvalid && (
            <p className="error-text">Please Enter Valid Email</p>
          )}
        </div>
        <div className={inputClassNumber}>
          <label htmlFor="number">Your Number</label>
          <input
            type="number"
            id="number"
            onChange={addNumberHandler}
            value={enteredNumber}
            onBlur={numberBlurHandler}
          />
          {numberIsInvalid && (
            <p className="error-text">Please Enter Valid Phone Number</p>
          )}
        </div>

        <div className={inputClassCountry}>
          <label htmlFor="country">Your Country</label>
          <input
            type="text"
            id="country"
            onChange={addCountryHandler}
            value={enteredCountry}
          />
        </div>

        <div className={inputClassState}>
          <label htmlFor="state">Your State</label>
          <input
            type="text"
            id="state"
            onChange={addStateHandler}
            value={enteredState}
          />
        </div>
        <div className={inputClassCity}>
          <label htmlFor="city">Your City</label>
          <input
            type="text"
            id="city"
            onChange={addCityHandler}
            value={enteredCity}
          />
        </div>
        <div className={inputClassMessage}>
          <label htmlFor="message">Any Message</label>
          <textarea
            rows="6"
            cols="38"
            type="text"
            id="message"
            onChange={addMessageHandler}
            value={enteredMessage}
          />
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Form Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Name <span style={{ color: "red" }}> *</span> :{" "}
            {data.enteredName ? data.enteredName : "Not enter"}
          </p>
          <p>
            Email <span style={{ color: "red" }}> *</span> :{" "}
            {data.enteredEmail ? data.enteredEmail : "Not enter"}
          </p>
          <p>
            Number : {data.enteredNumber ? data.enteredNumber : "Not enter"}
          </p>
          <p>
            Country : {data.enteredCountry ? data.enteredCountry : "Not enter"}
          </p>
          <p>State : {data.enteredState ? data.enteredState : "Not enter"}</p>
          <p>City : {data.enteredCity ? data.enteredCity : "Not enter"}</p>
          <p>
            Message : {data.enteredMessage ? data.enteredMessage : "Not enter"}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SimpleForm;
