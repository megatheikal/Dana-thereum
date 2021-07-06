import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button, Container, Icon, Grid, Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import Image from "next/image";
import { image, cover, view, list } from "../styles/landing.module.css";
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
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),

        style: {
          overflowWrap: "break-word",
          width: "500px",
          marginLeft: "90px"
        }
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div className={cover}>
          <h1>
            A new way to <span style={{ color: "#f5cb64" }}>help</span> people
          </h1>
          <div className={image}>
            <Image
              src="/cover-photo.jpg"
              layout="fill"
              objectFit="cover"
              quality={10}
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
                  color: "white",
                  position: "absolute",
                  width: "443px",
                  height: "106px",
                  left: "273px",
                  top: "617px",
                  borderRadius: "61px"
                }}
              />
            </a>
          </Link>
          <a href=".list">
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

        <div className={list}>
          <Header size="huge" style={{ paddingTop: "20px" }}>
            List of campaign addresses on Dana-thereum
          </Header>
          <div>
            <Grid columns={1}>
              <Grid.Row>
                <Grid.Column>{this.renderCampaigns()}</Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
