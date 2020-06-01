import React, { useState } from "react";
import {
  Card,
  Form,
  TextArea,
  Modal,
  Header,
  Message,
  Button,
} from "semantic-ui-react";
import "../App.css";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailValidationMessage, setEmailValidationMessage] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let checkEmail = validateEmail(values.email);
    if (checkEmail === false) {
      setEmailValidationMessage(true);
      return false;
    } else {
      setEmailValidationMessage(false);
      setOpen(true);
    }
    setValues({ name: "", email: "", subject: "", message: "" });
  };

  const validateEmail = (email) => {
    let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return reg.test(String(email).toLowerCase());
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <div className="app-container">
      <Card className="card-container" centered>
        <Card.Content>
          <Card.Header className="title">Contact Form</Card.Header>
        </Card.Content>
        <Card.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
            <Form.Input
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
            {emailValidationMessage ? (
              <Message negative>Invalid email address entered!</Message>
            ) : null}
            <Form.Input
              placeholder="Subject"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              required
            />
            <Form.Input
              control={TextArea}
              placeholder="Message"
              name="message"
              value={values.message}
              onChange={handleChange}
              required
            />
            <Modal
              open={open}
              trigger={<Form.Button content="Submit" color="blue" />}
            >
              <Header
                icon="check circle outline"
                content="Thank you for contacting us!"
              />
              <Modal.Content>
                <p>
                  We appreciate that you've taken the time to write us. We'll
                  get back to you very soon!
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button icon="close" color="blue" onClick={close} />
              </Modal.Actions>
            </Modal>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
