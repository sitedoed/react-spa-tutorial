import React from 'react';
import './Contact.css';
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <section id="contact">
        <Form className="contact">
            <div className="container">
            <div className="row">
                <div className="col">
                <div class="form-group row">
                    <Form.Label
                    className="col-sm-2 col-form-label"
                    for="inputEmail1"
                    >
                    Name
                    </Form.Label>
                    <div class="col-sm-8">
                    <Form.Control
                        type="text"
                        className="form-control"
                        id="inputEmail1"
                        placeholder="Name"
                    />
                    </div>
                </div>
                <div class="form-group row">
                    <Form.Label
                    className="col-sm-2 col-form-label"
                    for="inputEmail2"
                    >
                    Email
                    </Form.Label>
                    <div class="col-sm-8">
                    <Form.Control
                        type="email"
                        className="form-control"
                        id="inputEmail2"
                        placeholder="Enter"
                    />
                    </div>
                </div>
                <div class="form-group row">
                    <Form.Label
                    className="col-sm-2 col-form-label"
                    for="inputEmail3"
                    >
                    Subject
                    </Form.Label>
                    <div class="col-sm-8">
                    <Form.Control
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="Subject"
                    />
                    </div>
                </div>
                <div class="form-group row">
                    <Form.Label
                    className="col-sm-2 col-form-label"
                    for="inputEmail4"
                    >
                    Message
                    </Form.Label>
                    <div class="col-sm-8">
                    <Form.Control
                        as="textarea"
                        rows={5}
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Message"
                    />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2">
                    <Button as="input" size="lg" type="submit" value="Submit" />{" "}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </Form>
      </section>
    </div>
  )
}
