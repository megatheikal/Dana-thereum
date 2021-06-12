import React, { Component } from "react";
import { Card, Grid, Button, Header, List } from "semantic-ui-react";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import DonateForm from "../DonateForm";
class Detail extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign("0x950C7fE61dEaEbb8A82a0511dfd5A8CaDEd436B5");

    return {};
  }
  renderCards() {
    const {
      minimumContribution,
      organizer,
      donaterCount,
      balance,
      Orgname,
      Orgphone,
      Orgaddress,
      Orgemail,
      Orglink
    } = this.props;
    const items = [
      {
        header: minimumContribution,
        meta: "Minimum donation (wei)",
        description: "The minimum amount to donate to the contract"
      },
      {
        header: organizer,
        meta: "Address of manager",
        description: (
          <List>
            <List.Item icon="user" content={Orgname} />
            <List.Item icon="phone" content={Orgphone} />
            <List.Item
              icon="mail"
              content={<a href="mailto:{{Orgemail}}">{Orgemail}</a>}
            />
            <List.Item
              icon="linkify"
              content={<a href={Orglink}>{Orglink}</a>}
            />
          </List>
        ),
        style: { overflowWrap: "break-word" }
      },

      {
        header: donaterCount,
        meta: "Number of donaters",
        description:
          "Number of people who have already donated to this campaign."
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ethers)",
        description: "The balance remains in the campaign."
      }
    ];

    return <Card.Group items={items} style={{ width: "600px" }} />;
  }
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={10} style={{ fontSize: "20px" }}>
              <h1>{this.props.Cname}</h1>
              <p>{this.props.Csummary}</p>
            </Grid.Column>
            <Grid.Column floated="right" width={5} style={{ fontSize: "15px" }}>
              {this.renderCards()}
              <DonateForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Detail;
