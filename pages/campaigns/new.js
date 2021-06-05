import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Grid, Menu, Tab } from "semantic-ui-react";
import { form, box, change, pane } from "../../styles/form.module.css";
import ReferenceForm from "../../components/form/Reference";
import CampaignDetailForm from "../../components/form/Campaign";
import OrganizerForm from "../../components/form/Organizer";
import SubmitForm from "../../components/form/Submit";
import factory from "../../ethereum/factory";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class CampaignNew extends Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
  }
  state = {
    errorMessage: "",
    minimum: "",
    loading: false,
    nameOrganizer: "",
    agencyOrganizer: "",
    phoneOrganizer: "",
    addressOrganizer: "",
    emailOrganizer: "",
    linkOrganizer: "",
    nameReference: "",
    phoneReference: "",
    addressReference: "",
    emailReference: "",
    linkReference: "",
    campaignName: "",
    campaignMinimum: "",
    campaignSummary: ""
  };

  handleChangeValue = e => this.setState({ campaignMinimum: e.target.value });
  handleForm(formInput) {
    this.setState(formInput);
  }

  renderForm() {
    const panes = [
      {
        menuItem: "Organizer Info",
        render: () => (
          <Tab.Pane>
            <OrganizerForm
              nameOrganizer={this.state.nameOrganizer}
              agencyOrganizer={this.state.agencyOrganizer}
              phoneOrganizer={this.state.phoneOrganizer}
              addressOrganizer={this.state.addressOrganizer}
              emailOrganizer={this.state.emailOrganizer}
              linkOrganizer={this.state.linkOrganizer}
              onChangeValue={this.handleForm}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Reference Info",
        render: () => (
          <Tab.Pane>
            <ReferenceForm
              nameReference={this.state.nameReference}
              phoneReference={this.state.phoneReference}
              addressReference={this.state.addressReference}
              emailReference={this.state.emailReference}
              linkReference={this.state.linkReference}
              onChangeValue={this.handleForm}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Campaign Detail",
        render: () => (
          <Tab.Pane>
            <CampaignDetailForm
              campaignName={this.state.campaignName}
              campaignSummary={this.state.campaignSummary}
              campaignMinimum={this.state.campaignMinimum}
              onChangeValue={this.handleForm}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Submit",
        render: () => (
          <Tab.Pane>
            <SubmitForm
              message={this.state.errorMessage}
              loading={this.state.loading}
            />
          </Tab.Pane>
        )
      }
    ];

    return panes;
  }

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      const nameOrganizer = this.state.nameOrganizer;
      const agencyOrganizer = this.state.agencyOrganizer;
      const phoneOrganizer = this.state.phoneOrganizer;
      const addressOrganizer = this.state.addressOrganizer;
      const emailOrganizer = this.state.emailOrganizer;
      const linkOrganizer = this.state.linkOrganizer;
      const nameReference = this.state.nameReference;
      const phoneReference = this.state.phoneReference;
      const addressReference = this.state.addressReference;
      const emailReference = this.state.emailReference;
      const linkReference = this.state.linkReference;
      const campaignName = this.state.campaignName;

      const campaignSummary = this.state.campaignSummary;
      const campaignMinimum = this.state.campaignMinimum;
      await factory.methods
        .createCampaign(campaignMinimum)
        .send({ from: accounts[0] });

      const lastDeployedCampaign = await factory.methods
        .getLastDeployedCampaign()
        .call();

      const campaign = Campaign(lastDeployedCampaign);

      await campaign.methods
        .setOrganiser(
          nameOrganizer,
          agencyOrganizer,
          phoneOrganizer,
          addressOrganizer,
          emailOrganizer,
          linkOrganizer
        )
        .send({ from: accounts[0] });

      await campaign.methods
        .setReference(
          nameReference,
          phoneReference,
          addressReference,
          emailReference,
          linkOrganizer
        )
        .send({ from: accounts[0] });

      await campaign.methods
        .setDetail(campaignName, campaignSummary)
        .send({ from: accounts[0] });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({
      nameOrganizer: "",
      agencyOrganizer: "",
      phoneOrganizer: "",
      addressOrganizer: "",
      emailOrganizer: "",
      linkOrganizer: "",
      nameReference: "",
      phoneReference: "",
      addressReference: "",
      emailReference: "",
      linkOrganizer: "",
      campaignName: "",
      campaignSummary: "",
      campaignMinimum: "",
      loading: false
    });
    Router.pushRoute("/");
  };

  render() {
    return (
      <Layout>
        <div className={form}>
          <div className={box}>
            <Form
              size="huge"
              onSubmit={this.onSubmit}
              error={!!this.state.errorMessage}
            >
              <Tab
                menu={{
                  fluid: true,
                  vertical: true,
                  tabular: true,
                  attached: true
                }}
                panes={this.renderForm()}
              />
            </Form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default CampaignNew;
