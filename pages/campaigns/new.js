import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Grid, Menu, Tab } from "semantic-ui-react";
import { form, box, change, pane } from "../../styles/form.module.css";
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
    errorName: false,
    errorPhone: false,
    errorAddress: false,
    errorEmail: false,
    errorLink: false,
    errorCampaign: false,
    errorMin: false,
    errorSummary: false,
    errorMessage: "",
    minimum: "",
    loading: false,
    nameOrganizer: "",
    phoneOrganizer: "",
    addressOrganizer: "",
    emailOrganizer: "",
    linkOrganizer: "",
    campaignName: "",
    campaignMinimum: "",
    campaignSummary: ""
  };

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
              phoneOrganizer={this.state.phoneOrganizer}
              addressOrganizer={this.state.addressOrganizer}
              emailOrganizer={this.state.emailOrganizer}
              linkOrganizer={this.state.linkOrganizer}
              errorName={this.state.errorName}
              errorPhone={this.state.errorPhone}
              errorAddress={this.state.errorAddress}
              errorEmail={this.state.errorEmail}
              errorLink={this.state.errorLink}
              onChangeValue={this.handleForm}
            />
          </Tab.Pane>
        )
      },
      ,
      {
        menuItem: "Campaign Detail",
        render: () => (
          <Tab.Pane>
            <CampaignDetailForm
              campaignName={this.state.campaignName}
              campaignSummary={this.state.campaignSummary}
              campaignMinimum={this.state.campaignMinimum}
              errorCampaign={this.state.errorCampaign}
              errorMin={this.state.errorMin}
              errorSummary={this.state.errorSummary}
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
    this.setState({
      errorName: false,
      errorPhone: false,
      errorAddress: false,
      errorEmail: false,
      errorLink: false,
      errorCampaign: false,
      errorMin: false,
      errorSummary: false
    });
    let validate = true;
    if (typeof this.state.nameOrganizer !== "undefined") {
      if (!this.state.nameOrganizer.match(/^[a-zA-Z]+$/)) {
        this.setState({ errorName: "Write a name properly" });
        validate = false;
      }
    }

    if (typeof this.state.phoneOrganizer !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(this.state.phoneOrganizer)) {
        this.setState({ errorPhone: "Write the phone numbers properly" });
        validate = false;
      } else if (this.state.phoneOrganizer.length <= 10) {
        this.setState({
          errorPhone: "The number need to be more than 10 digits"
        });
        validate = false;
      }
    }

    if (!this.state.addressOrganizer) {
      this.setState({ errorAddress: "Write address properly" });
      validate = false;
    }

    if (typeof this.state.emailOrganizer !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(this.state.emailOrganizer)) {
        this.setState({
          errorEmail: "The format of email is wrong"
        });
        validate = false;
      }
    }

    if (typeof this.state.linkOrganizer !== "undefined") {
      var pattern = new RegExp(
        /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/
      );

      if (!pattern.test(this.state.linkOrganizer)) {
        this.setState({
          errorLink: "The format of email is wrong"
        });
        validate = false;
      }
    }

    if (!this.state.campaignName) {
      this.setState({ errorCampaign: "Please fill the campaign name" });
      validate = false;
    }

    if (!this.state.campaignMinimum) {
      this.setState({
        errorMin: "Please fill the minimum donation of campaign"
      });
      validate = false;
    }

    if (!this.state.campaignSummary) {
      this.setState({
        errorSummary: "Please fill the summary of campaign"
      });
      validate = false;
    }

    if (validate) {
      try {
        this.setState({ loading: true, errorMessage: "" });
        const accounts = await web3.eth.getAccounts();
        const nameOrganizer = this.state.nameOrganizer;
        const phoneOrganizer = this.state.phoneOrganizer;
        const addressOrganizer = this.state.addressOrganizer;
        const emailOrganizer = this.state.emailOrganizer;
        const linkOrganizer = this.state.linkOrganizer;
        const campaignName = this.state.campaignName;
        const campaignSummary = this.state.campaignSummary;
        const campaignMinimum = this.state.campaignMinimum;
        await factory.methods
          .createCampaign(
            campaignMinimum,
            nameOrganizer,
            phoneOrganizer,
            addressOrganizer,
            emailOrganizer,
            linkOrganizer,
            campaignName,
            campaignSummary
          )
          .send({ from: accounts[0] });
        Router.pushRoute("/");
      } catch (err) {
        this.setState({ errorMessage: err.message });
      }
      this.setState({
        nameOrganizer: "",
        phoneOrganizer: "",
        addressOrganizer: "",
        emailOrganizer: "",
        linkOrganizer: "",
        campaignName: "",
        campaignSummary: "",
        campaignMinimum: "",
        loading: false
      });
    }
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
