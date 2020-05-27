import React, { useState } from "react";
import { Card, Form, TextArea, Modal, Button, Header } from "semantic-ui-react";
import "./Contact.css"

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState("false");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ name: "", email: "", subject: "", message: "" });
  };

  const submitBtn =
    values.name !== "" &&
    values.email !== "" &&
    values.subject !== "" &&
    values.message !== "" ? (
      <Form.Button content="Submit" />
    ) : (
      <Form.Button content="Submit" disabled />
    );

  return (
    <div>
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
            <Modal trigger={submitBtn} closeIcon>
              <Header icon="check circle outline" content="Thank you for contacting us!"/>
              <Modal.Content >
                <p>We appreciate that you've taken the time to write us. We'll get back to you very soon!</p>
              </Modal.Content>
            </Modal>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
