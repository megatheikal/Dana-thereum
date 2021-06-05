import React, { Component } from "react";
import { Form, Input, TextArea } from "semantic-ui-react";

class CampaignDetailForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;

    this.props.onChangeValue({
      [e.target.name]: value
    });
  }
  render() {
    return (
      <div>
        <Form.Field required>
          <label>Name of Campaign</label>
          <Input
            name="campaignName"
            placeholder="Derma Kilat Kedai Burger Saman 50k...."
            value={this.props.campaignName}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Minimum Donation</label>
          <Input
            name="campaignMinimum"
            label="wei"
            labelPosition="right"
            value={this.props.campaignMinimum}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Summary of Campaign</label>
          <TextArea
            name="campaignSummary"
            style={{ height: "300px" }}
            value={this.props.campaignSummary}
            onChange={this.handleChange}
          />
        </Form.Field>
      </div>
    );
  }
}

export default CampaignDetailForm;
