import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";

class OrganizerForm extends Component {
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
          label="Name"
          name="nameOrganizer"
          placeholder="Luqman Nadzri"
          value={this.props.nameOrganizer}
          onChange={this.handleChange}
          error={this.props.errorName}
        />
        <Form.Input
          required
          label="Phone Numbers"
          name="phoneOrganizer"
          placeholder="+60173421122"
          value={this.props.phoneOrganizer}
          onChange={this.handleChange}
          error={this.props.errorPhone}
        />
        <Form.Input
          required
          label="Address"
          name="addressOrganizer"
          placeholder="No3 Jalan Gombak, Gombak"
          value={this.props.addressOrganizer}
          onChange={this.handleChange}
          error={this.props.errorAddress}
        />
        <Form.Input
          required
          label="Email"
          name="emailOrganizer"
          placeholder="ali812@gmail.com"
          value={this.props.emailOrganizer}
          onChange={this.handleChange}
          error={this.props.errorEmail}
        />
        <Form.Input
          required
          label="Link of Social media"
          name="linkOrganizer"
          placeholder="https://www.facebook.com/tabularq"
          value={this.props.linkOrganizer}
          onChange={this.handleChange}
          error={this.props.errorLink}
        />
      </div>
    );
  }
}

export default OrganizerForm;
