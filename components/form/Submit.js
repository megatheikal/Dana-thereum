import React, { Component } from "react";
import { Form, Checkbox, Button } from "semantic-ui-react";
import { myCheckbox } from "../../styles/form.module.css";

class SubmitForm extends Component {
  render() {
    return (
      <Form className={myCheckbox} size="huge">
        <Form.Field
          control={Checkbox}
          label="I have ensured that the campaign details form have been filled up with convincing answers/story as to why a sponsor should support me"
        />
        <Form.Field
          control={Checkbox}
          label="I have reviewed the data I am submitting and confirmed their accuracy and are up to date"
        />
        <Button size="big">Create!</Button>
      </Form>
    );
  }
}

export default SubmitForm;
