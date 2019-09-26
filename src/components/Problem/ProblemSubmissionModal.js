import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

const ProblemSubmissionModal = props => {
  // Can't figure out how to change style of Modal, didn't have enough time to change style completely
  return (
    <Dialog
      open={!props.hidden}
      aria-labelledby="confirmation-dialog-title"
      aria-describedby="confirmation-dialog-description"
    >
      <DialogTitle id="confirmation-dialog-title" disableTypography>
        {props.text}
      </DialogTitle>
    </Dialog>
  );
};

ProblemSubmissionModal.defaultProps = {
  hidden: true,
  text: ""
};

ProblemSubmissionModal.propTypes = {
  hidden: PropTypes.bool,
  text: PropTypes.string
};

export default ProblemSubmissionModal;
