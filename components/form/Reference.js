import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";

class ReferenceForm extends Component {
  render() {
    return (
      <Form size="huge" style={{ width: "1000px" }}>
        <Form.Field>
          <label>Name</label>
          <Input placeholder="Ali Naquiddin" />
        </Form.Field>
        <Form.Field>
          <label>Phone Numbers</label>
          <Input placeholder="+601298712311" />
        </Form.Field>
        <Form.Field>
          <label>Address</label>
          <Input placeholder="No 12, Lot Ampang, Ampang" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input placeholder="ali-nqi19@yahoo.com" />
        </Form.Field>
        <Form.Field>
          <label>Link of Social Media</label>
          <Input placeholder="twitter, instagram, facebook" />
        </Form.Field>
      </Form>
    );
  }
}

export default ReferenceForm;
