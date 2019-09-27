import React from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import RemoveRefWarning from "../RemoveRefWarning";

const styles = {
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  padding: { padding: "1.5rem" }
};

const ActionModal = props => (
  <Modal
    aria-labelledby={`${props.type}-modal-title`}
    aria-describedby={`${props.type}-modal-description`}
    open={props.isOpenApprove}
    disableAutoFocus
    className={props.classes.modal}
    onClose={props.closeModal}
  >
    <RemoveRefWarning>
      <Grid container justify="center">
        <Grid item xs={11} sm={7}>
          <Paper square>
            <Typography
              component="h4"
              variant="h6"
              className={props.classes.padding}
            >
              {props.text}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </RemoveRefWarning>
  </Modal>
);

export default withStyles(styles)(ActionModal);
