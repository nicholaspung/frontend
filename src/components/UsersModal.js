import React, { Component } from "react";

import {
  //   ProblemCardLink,

  CallToActionBtn2
} from "../static/stylingComponents";

let dialogStyles = {
  width: "500px",
  height: "500px",
  maxWidth: "100%",
  margin: "2 auto",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: "999",
  backgroundColor: "#A9A9A9",
  // fontWeight: "bold",
  padding: "5px 5px 5px 5px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column"
};

let dialogCloseButtonStyles = {
  marginBottom: "15px",
  padding: "3px 8px",
  cursor: "pointer",
  borderRadius: "50%",
  border: "none",
  width: "30px",
  height: "30px",
  fontWeight: "bold",
  alignSelf: "flex-end"
};

class UsersModal extends Component {
  render() {
    let popup = (
      <div style={dialogStyles}>
        <CallToActionBtn2
          style={dialogCloseButtonStyles}
          onClick={this.props.onClose}
        >
          x
        </CallToActionBtn2>

        <div>{this.props.children}</div>
      </div>
    );

    if (!this.props.isOpenUsers) {
      popup = null;
    }
    return <div>{popup}</div>;
  }
}

export default UsersModal;
