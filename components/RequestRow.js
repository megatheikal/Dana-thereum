import React, { Component } from "react";
import { Table, Button, Message } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

class RequestRow extends Component {
  state = {
    loading: false,
    errorMessage: "",
    show: true
  };
  onApprove = async () => {
    try {
      this.setState({ errorMessage: "", show: true });
      const campaign = Campaign(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .approvalRequest(this.props.id)
        .send({ from: accounts[0] });

      this.setState({ loading: true });
    } catch (e) {
      this.setState({ errorMessage: e.message, show: false });
    }
    this.setState({ loading: false });
  };

  onFinalize = async () => {
    try {
      this.setState({ errorMessage: "", show: true });
      const campaign = Campaign(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .finaliseRequest(this.props.id)
        .send({ from: accounts[0] });
      this.setState({ loading: true });
    } catch (e) {
      this.setState({ errorMessage: e.message, show: false });
    }
    this.setState({ loading: false });
  };
  render() {
    const { request, id, approversCount } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;
    return (
      <Table.Row
        disabled={request.complete}
        positive={!!readyToFinalize && !request.complete}
      >
        <Table.Cell>{id}</Table.Cell>
        <Table.Cell>{request.description}</Table.Cell>
        <Table.Cell>{web3.utils.fromWei(request.value, "ether")}</Table.Cell>
        <Table.Cell>{request.recipient}</Table.Cell>
        <Table.Cell>
          {request.approvalCount}/{approversCount}
        </Table.Cell>
        <Table.Cell>
          {request.complete ? null : (
            <Button color="green" basic onClick={this.onApprove}>
              Approve
            </Button>
          )}
        </Table.Cell>
        <Table.Cell>
          {request.complete ? null : (
            <Button
              color="teal"
              basic
              onClick={this.onFinalize}
              loading={this.state.loading}
            >
              Finalize
            </Button>
          )}
          <Message
            error
            hidden={this.state.show}
            header="Sorry"
            content={this.state.errorMessage}
          />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default RequestRow;
