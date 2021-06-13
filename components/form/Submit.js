import React, { Component } from "react";
import { Form, Checkbox, Button, Message, List } from "semantic-ui-react";
import { myCheckbox } from "../../styles/form.module.css";

class SubmitForm extends Component {
  state = {
    checked: false,
    disabled: true
  };

  handleChange = (e, { checked }) => {
    this.setState(prevState => ({
      checked: !prevState.checked,
      disabled: !!prevState.checked
    }));
  };
  render() {
    return (
      <div className={myCheckbox}>
        <Checkbox
          onChange={this.handleChange}
          checked={this.state.checked}
          label="I have ensured that the campaign details form have been filled up with convincing answers/story as to why a sponsor should support me. I also have reviewed the data I am submitting and confirmed their accuracy and are up to date."
        />
        <Message error header="Sorry...">
          {this.props.message}
        </Message>
        <Button
          size="big"
          loading={this.props.loading}
          primary
          disabled={this.state.disabled}
        >
          Create!
        </Button>
      </div>
    );
  }
}

export default SubmitForm;
