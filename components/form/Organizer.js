import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";

class OrganizerForm extends Component {
  render() {
    return (
      <Form size="huge" style={{ width: "1000px" }}>
        <Form.Field>
          <label>Name</label>
          <Input placeholder="Muhammad Ali" />
        </Form.Field>
        <Form.Field>
          <label>Agency Name</label>
          <Input placeholder="Pusat Jagaan Orang Kurang Upaya Batu Caves" />
        </Form.Field>
        <Form.Field>
          <label>Phone Numbers</label>
          <Input placeholder="+60173421122" />
        </Form.Field>
        <Form.Field>
          <label>Address</label>
          <Input placeholder="No3 Jalan Gombak, Gombak" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input placeholder="ali812@gmail.com" />
        </Form.Field>
        <Form.Field>
          <label>Link of Social media</label>
          <Input placeholder="twitter, instagram, facebook" />
        </Form.Field>
      </Form>
    );
  }
}

export default OrganizerForm;
