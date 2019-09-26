import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

const ProblemSubmissionModal = props => {
  return (
    <div>
      <Dialog
        open={!props.hidden}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Hello there, changing CSS</DialogTitle>
      </Dialog>
    </div>
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
