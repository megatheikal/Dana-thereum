import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button, Container, Icon, Grid } from "semantic-ui-react";
import Layout from "../components/Layout";
import Image from "next/image";
import { image, cover, view } from "../styles/landing.module.css";
import { Link } from "../routes";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description:
          "ahjsdklashdaldjaskl;daskl;djaskdklasxmkjklasxmasklxmaskldxhjasjdashdklashnxjkasxnjkasxhbnasjklxnlaskjxnasijlcnlsajkcnjilaskcnasjklcnasjklcnjn",

        style: { overflowWrap: "break-word" }
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div className={cover}>
          <h1>
            A new way to <span style={{ color: "#c6a551" }}>donate</span> people
          </h1>
          <div className={image}>
            <Image
              src="/cover-photo.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <Link route="/campaigns/new">
            <a>
              <Button
                content="Start a Campaign"
                style={{
                  fontSize: "40px",
                  padding: "0px",
                  backgroundColor: "#c6a551",
                  position: "absolute",
                  width: "443px",
                  height: "106px",
                  left: "273px",
                  top: "617px",
                  borderRadius: "61px"
                }}
                icon="add circle"
              />
            </a>
          </Link>
          <a href="#list">
            <Icon
              name="angle down"
              size="massive"
              style={{
                position: "absolute",
                width: "88.62px",
                height: "52.5px",
                left: "860px",
                top: "846px"
              }}
            />
          </a>
        </div>

        <div id="list">
          <Container textAlign="center">
            <h1 style={{ fontSize: "55px", marginTop: "20px" }}>
              List of campaigns on Danathereum{" "}
            </h1>
            <Grid style={{ marginLeft: "90px" }}>
              {" "}
              <Grid.Row column={3}>
                {" "}
                <Grid.Column>{this.renderCampaigns()}</Grid.Column>{" "}
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
