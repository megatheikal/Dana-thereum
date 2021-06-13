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
        <Form.Input
          required
          label="Name of Campaign"
          name="campaignName"
          placeholder="Derma Kilat Kedai Burger Saman 50k...."
          value={this.props.campaignName}
          onChange={this.handleChange}
          error={this.props.errorCampaign}
        />

        <Form.Field required error={this.props.errorMin}>
          <label>Minimum Donation</label>
          <Input
            name="campaignMinimum"
            label="wei"
            labelPosition="right"
            value={this.props.campaignMinimum}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.TextArea
          required
          label="Summary of Campaign"
          name="campaignSummary"
          style={{ height: "300px" }}
          value={this.props.campaignSummary}
          onChange={this.handleChange}
          error={this.props.errorSummary}
        />
      </div>
    );
  }
}

export default CampaignDetailForm;
