import React, { Component } from "react";
import { Form, Input, TextArea } from "semantic-ui-react";

class CampaignDetailForm extends Component {
  render() {
    return (
      <Form size="huge" style={{ width: "1000px" }}>
        <Form.Field>
          <label>Name of Campaign</label>
          <Input placeholder="Derma Kilat Kedai Burger Saman 50k...." />
        </Form.Field>
        <Form.Field>
          <label>Minimum Donation</label>
          <Input label="wei" labelPosition="right" />
        </Form.Field>
        <Form.Field>
          <label>Target donation of the campaign</label>
          <Input label="wei" labelPosition="right" />
        </Form.Field>
        <Form.Field>
          <label>Summary of Campaign</label>
          <TextArea style={{ height: "300px" }} />
        </Form.Field>
      </Form>
    );
  }
}

export default CampaignDetailForm;
