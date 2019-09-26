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

  // No idea what this does, but it removed a warning about React.forwardRef...
  // Didn't include in PropTypes validation, since no idea what this is
  const RemoveRefWarning = React.forwardRef((props, ref) => (
    <div ref={ref}>{props.children}</div>
  ));

  return (
    <>
      {props.isOpen ? (
        <Modal
          aria-labelledby="signup-modal-title"
          aria-describedby="signup-modal-description"
          open={props.isOpen}
          onClose={props.modaler}
          className={classes.modal}
          disableAutoFocus
        >
          <RemoveRefWarning>
            <SignUpForm
              id={props.id}
              opener={props.modaler}
              problem={props.problem}
            />
          </RemoveRefWarning>
        </Modal>
      ) : null}
    </>
  );
};

ModalSignUp.defaultProps = {
  classes: {},
  isOpen: false,
  modaler: function hi() {},
  id: 0,
  problem: {}
};

ModalSignUp.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  isOpen: PropTypes.bool,
  modaler: PropTypes.func,
  id: PropTypes.string,
  problem: PropTypes.shape({
    find: PropTypes.func,
    isApproved: PropTypes.bool,
    numOfRatings: PropTypes.number,
    isAccepting: PropTypes.bool,
    problem_description: PropTypes.string,
    problem_category: PropTypes.string,
    problem_title: PropTypes.string,
    id: PropTypes.number
  })
};

export default withStyles(styles)(ModalSignUp);
