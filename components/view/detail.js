import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
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
      balance
    } = this.props;
    const items = [
      {
        header: minimumContribution,
        meta: "Minimum donation",
        description: "The minimum amount to donate to the contract"
      },
      {
        header: organizer,
        meta: "Address of manager",
        description: " The organiser that created this campaign",
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
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse non lacus a magna consequat sollicitudin sit amet
                luctus sapien. Nulla facilisi. Donec ut dapibus purus, eget
                pharetra tellus. Nam venenatis ligula quam, quis eleifend ipsum
                suscipit quis. Vestibulum sit amet lectus vestibulum, gravida
                ligula et, placerat ante. Aenean ultricies elit ut egestas
                semper. Cras quis risus id lacus gravida faucibus. In in dolor
                nec mauris maximus aliquam. Donec lorem nunc, blandit quis
                tempus a, lacinia eget justo. Quisque sodales, nisi id congue
                rutrum, magna mi scelerisque augue, nec luctus felis turpis
                porta purus. Aenean pharetra lectus sed ligula dignissim
                volutpat. Sed efficitur erat mauris, vitae rhoncus arcu congue
                sed. Quisque vestibulum varius odio, et pretium elit. Proin
                pharetra faucibus ex non maximus. Integer aliquam vulputate
                efficitur. Cras tempus ipsum ut diam lacinia tincidunt. Vivamus
                ut ante a nisi dapibus facilisis. Nunc id justo consectetur,
                suscipit metus rutrum, vehicula arcu. Praesent fermentum nibh
                libero, vitae efficitur nibh aliquet vel. Vestibulum malesuada,
                dui vitae cursus egestas, neque dui mattis libero, sed molestie
                ex justo quis odio. Vivamus ultricies enim sit amet feugiat
                posuere. Cras gravida faucibus lobortis. Nulla aliquam sit amet
                ante sit amet vehicula. Donec ac tellus nec ex laoreet cursus.
                Curabitur magna mauris, pulvinar et nisi nec, ornare luctus
                augue. Aliquam erat volutpat. Donec aliquam, diam a fringilla
                tempor, tortor magna molestie tortor, sit amet ornare leo nibh a
                felis. Quisque id odio congue, laoreet libero nec, porta neque.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                sollicitudin, turpis ut volutpat egestas, massa leo lacinia
                purus, et rutrum felis felis ut lacus. Sed euismod mi euismod,
                cursus ex at, laoreet mauris. Mauris vitae velit non augue
                feugiat consectetur. Suspendisse tincidunt metus ut scelerisque
                euismod. Phasellus dignissim lacus mi, ut iaculis urna dapibus
                sed. Duis nec efficitur massa, vestibulum accumsan felis.{" "}
              </p>
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
