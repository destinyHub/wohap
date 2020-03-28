import React from "react";
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

class PhoneNumber extends React.Component {
  state = { phone: "" };

  handleOnChange = value => {
    this.setState({ phone: value });
  };

  render() {
    return (
      <div>
        <ReactPhoneInput
          inputExtraProps={{
            name: "phone",
            required: true,
            autoFocus: true
          }}
          country={"id"}
          value={this.state.phone}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default PhoneNumber;
