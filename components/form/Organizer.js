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
        <Form.Field required>
          <label>Name</label>
          <Input
            name="nameOrganizer"
            placeholder="Luqman Nadzri"
            value={this.props.nameOrganizer}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field required>
          <label>Phone Numbers</label>
          <Input
            name="phoneOrganizer"
            placeholder="+60173421122"
            value={this.props.phoneOrganizer}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Address</label>
          <Input
            name="addressOrganizer"
            placeholder="No3 Jalan Gombak, Gombak"
            value={this.props.addressOrganizer}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Email</label>
          <Input
            name="emailOrganizer"
            placeholder="ali812@gmail.com"
            value={this.props.emailOrganizer}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Link of Social media</label>
          <Input
            name="linkOrganizer"
            placeholder="twitter, instagram, facebook"
            value={this.props.linkOrganizer}
            onChange={this.handleChange}
          />
        </Form.Field>
      </div>
    );
  }
}

export default OrganizerForm;
