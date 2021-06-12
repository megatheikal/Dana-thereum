import React, { Component } from "react";
import { Form, Message, Button, Container, Input } from "semantic-ui-react";
import { Link, Router } from "../../../routes";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";

import Layout from "../../../components/Layout";

class RequestNew extends Component {
  state = {
    value: "",
    description: "",
    recipient: "",
    errorMessage: "",
    loading: false,
    show: false
  };
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }
  onSubmit = async event => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;

    this.setState({ loading: true, errorMessage: "", show: false });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({
          from: accounts[0]
        });
      Router.pushRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message, show: true });
    }

    this.setState({
      loading: false,
      description: "",
      value: "",
      recipient: ""
    });
  };
  render() {
    return (
      <Layout>
        <Container>
          <Form
            style={{ fontSize: "17px", marginTop: "150px" }}
            onSubmit={this.onSubmit}
          >
            <h1>Create a request</h1>
            <Form.Field>
              <label>Description</label>
              <Input
                value={this.state.description}
                style={{ borderRadius: "17px" }}
                onChange={event =>
                  this.setState({ description: event.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Value in Ether</label>
              <Input
                value={this.state.value}
                style={{ borderRadius: "17px" }}
                onChange={event => this.setState({ value: event.target.value })}
              />
            </Form.Field>
            <Form.Field>
              <label>Recipient</label>
              <Input
                value={this.state.recipient}
                style={{ borderRadius: "17px" }}
                onChange={event =>
                  this.setState({ recipient: event.target.value })
                }
              />
            </Form.Field>
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button
              content="Create!"
              primary
              style={{
                borderRadius: "61px",
                marginTop: "20px"
              }}
              loading={this.state.loading}
              size="big"
            />

            <Link route={`/campaigns/${this.props.address}`}> Back </Link>
            <Message
              visible={this.state.show}
              error
              header="Sorry..."
              content={this.state.errorMessage}
            />
          </Form>
        </Container>
      </Layout>
    );
  }
}

export default RequestNew;
