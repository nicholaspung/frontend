import React from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/styles";
import SignUpForm from "./SignUpForm";

const styles = {
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

const ModalSignUp = props => {
  const { classes } = props;

  return (
    <>
      {props.isOpen ? (
        <Modal
          aria-labelledby="signup-modal-title"
          aria-describedby="signup-modal-description"
          open={props.isOpen}
          onClose={props.modaler}
          className={classes.modal}
        >
          <SignUpForm id={props.id} opener={props.modaler} problem={props.problem} />
        </Modal>
      ) : null}
    </>
  );
};

ModalSignUp.defaultProps = {
  classes: {},
  isOpen: false,
  modaler: function hi() {},
  id: 0
};

ModalSignUp.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  isOpen: PropTypes.bool,
  modaler: PropTypes.func,
  id: PropTypes.string
};

export default withStyles(styles)(ModalSignUp);
