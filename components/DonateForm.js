import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

class DonateForm extends Component {
  state = {
    donation: "",
    loading: false,
    errorMessage: "",
    show: false
  };

  onSubmit = async event => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);

    this.setState({ loading: true, errorMessage: "", show: false });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.donate().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.donation, "ether")
      });
    } catch (error) {
      this.setState({ errorMessage: error.message, show: true });
    }

    this.setState({ loading: false, donation: "" });
  };
  render() {
    return (
      <div>
        <Form
          style={{ fontSize: "17px", marginTop: "30px" }}
          onSubmit={this.onSubmit}
        >
          <Form.Field>
            <label>Amount to donate</label>
            <Input
              value={this.state.donation}
              label="ether"
              labelPosition="right"
              style={{ borderRadius: "17px" }}
              onChange={event =>
                this.setState({ donation: event.target.value })
              }
            />
          </Form.Field>

          <Button
            content="Donate"
            style={{
              backgroundColor: "#c6a551",
              borderRadius: "61px",
              width: "300px"
            }}
            loading={this.state.loading}
            size="huge"
          />
          <Message
            hidden={this.state.show}
            error
            header="Sorry..."
            content={this.state.errorMessage}
          />
        </Form>
      </div>
    );
  }
}

export default DonateForm;
