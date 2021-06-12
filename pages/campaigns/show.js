import React, { Component } from "react";
import web3 from "../../ethereum/web3";
import Campaign from "../../ethereum/campaign";
import Layout from "../../components/Layout";
import { Link } from "../../routes";
import {
  Tab,
  Container,
  Card,
  Table,
  Button,
  Message
} from "semantic-ui-react";
import Detail from "../../components/view/detail";
import RequestRow from "../../components/RequestRow";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    const manager = await campaign.methods.organiser().call();

    const donaterCount = await campaign.methods.donaterCount().call();
    const requestCount = await campaign.methods.requestCount().call();
    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );

    const campDetail = await campaign.methods.getDetail(manager).call();
    const orgDetail = await campaign.methods.getOrganiser(manager).call();

    return {
      donaterCount,
      requestCount,
      requests,
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      donaterCount: summary[2],
      organizer: summary[3],
      summary,
      Cname: campDetail[0],
      Csummary: campDetail[1],
      Orgname: orgDetail[0],
      Orgphone: orgDetail[1],
      Orgaddress: orgDetail[2],
      Orgemail: orgDetail[3],
      Orglink: orgDetail[4]
    };
  }
  renderRow() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          onRequestsUpdate={this.onRequestsUpdate}
          request={request}
          key={index}
          id={index}
          address={this.props.address}
          approversCount={this.props.donaterCount}
        />
      );
    });
  }

  renderShow() {
    const panes = [
      {
        menuItem: "Details",
        render: () => (
          <Detail
            address={this.props.address}
            minimumContribution={this.props.minimumContribution}
            balance={this.props.balance}
            donaterCount={this.props.donaterCount}
            organizer={this.props.organizer}
            Orgname={this.props.Orgname}
            Orgphone={this.props.Orgphone}
            Orgaddress={this.props.Orgaddress}
            Orgemail={this.props.Orgemail}
            Orglink={this.props.Orglink}
            Cname={this.props.Cname}
            Csummary={this.props.Csummary}
          />
        )
      },
      {
        menuItem: "Requests",
        render: () => (
          <div>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>ID</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>Amount</Table.HeaderCell>
                  <Table.HeaderCell>Recipient</Table.HeaderCell>
                  <Table.HeaderCell>Approval Count</Table.HeaderCell>
                  <Table.HeaderCell>Approve</Table.HeaderCell>
                  <Table.HeaderCell>Finalize</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>{this.renderRow()}</Table.Body>
            </Table>
            <Link route={`/campaigns/${this.props.address}/requests/new`}>
              <a>
                <Button
                  content="Add Request"
                  primary
                  floated="right"
                  style={{
                    borderRadius: "61px",
                    width: "200px"
                  }}
                  size="big"
                />
              </a>
            </Link>
          </div>
        )
      }
    ];

    return panes;
  }
  render() {
    console.log(this.props.Cname);
    return (
      <Layout>
        <h3>Show the Campaign</h3>

        <Container>
          <Tab
            menu={{ secondary: true, pointing: true }}
            panes={this.renderShow()}
          />
        </Container>
      </Layout>
    );
  }
}

export default CampaignShow;
