import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Grid, Menu, Tab } from "semantic-ui-react";
import { form, box, change, pane } from "../../styles/form.module.css";
import ReferenceForm from "../../components/form/Reference";
import CampaignDetailForm from "../../components/form/Campaign";
import OrganizerForm from "../../components/form/Organizer";
import SubmitForm from "../../components/form/Submit";
class CampaignNew extends Component {
  renderForm() {
    const panes = [
      {
        menuItem: "Organizer Info",
        render: () => (
          <Tab.Pane>
            <OrganizerForm />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Reference Info",
        render: () => (
          <Tab.Pane>
            <ReferenceForm />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Campaign Detail",
        render: () => (
          <Tab.Pane>
            <CampaignDetailForm />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Submit",
        render: () => (
          <Tab.Pane>
            <SubmitForm />
          </Tab.Pane>
        )
      }
    ];

    return panes;
  }

  render() {
    return (
      <Layout>
        <div className={form}>
          <div className={box}>
            <Tab
              menu={{
                fluid: true,
                vertical: true,
                tabular: true,
                attached: true
              }}
              panes={this.renderForm()}
            />
          </div>
          <h1>New Campaign</h1>
        </div>
      </Layout>
    );
  }
}

export default CampaignNew;
