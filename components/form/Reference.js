import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";

class ReferenceForm extends Component {
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
            name="nameReference"
            placeholder="Ali Naquiddin"
            value={this.props.nameReference}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Phone Numbers</label>
          <Input
            name="phoneReference"
            placeholder="Ipoh Perak"
            value={this.props.phoneReference}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Address</label>
          <Input
            name="addressReference"
            placeholder="+601298712311"
            value={this.props.addressReference}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field required>
          <label>Email</label>
          <Input
            name="emailReference"
            placeholder="ali-nqi19@yahoo.com"
            value={this.props.emailReference}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Link of Social Media</label>
          <Input
            name="linkReference"
            placeholder="twitter, instagram, facebook"
            value={this.props.linkReference}
            onChange={this.handleChange}
          />
        </Form.Field>
      </div>
    );
  }
}

export default ReferenceForm;
