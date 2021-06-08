import React, { Component } from "react";
import web3 from "../../ethereum/web3";
import Campaign from "../../ethereum/campaign";
import Layout from "../../components/Layout";
import { Tab, Container, Card } from "semantic-ui-react";
import Detail from "../../components/view/detail";
import Request from "../../components/view/request";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      donaterCount: summary[2],
      organizer: summary[3]
    };
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
          />
        )
      },
      {
        menuItem: "Requests",
        render: () => <Request />
      }
    ];

    return panes;
  }
  render() {
    console.log(this.props.donatorCount);
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
