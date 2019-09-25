import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";

const styles = {
  marketing: { margin: "1.5rem", textAlign: "center" },
  ctaButton: {
    backgroundColor: "#bb1333",
    borderRadius: "0px",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#750808"
    }
  },
  buttonLink: {
    textDecoration: "none",
    flexGrow: 1
  },
  noPadding: { padding: "0px" }
};

const MarketingCard = props => {
  const {
    classes,
    title,
    description,
    displayButton,
    buttonLink,
    icon
  } = props;

  return (
    <Paper square className={classes.marketing}>
      <CardContent>
        <Grid
          container
          wrap="nowrap"
          alignItems="center"
          justify="space-around"
        >
          <Grid item>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {description}
            </Typography>
          </Grid>
          <Grid item>{icon}</Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.noPadding}>
        <Link to={buttonLink} className={classes.buttonLink}>
          <Button
            size="small"
            fullWidth
            className={classes.ctaButton}
          >
            {displayButton}
          </Button>
        </Link>
      </CardActions>
    </Paper>
  );
};

MarketingCard.defaultProps = {
  title: "Title",
  description: "Description",
  displayButton: "Button",
  buttonLink: "Link",
  icon: "<>",
  classes: {}
};

MarketingCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  displayButton: PropTypes.string,
  buttonLink: PropTypes.string,
  icon: PropTypes.element,
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(MarketingCard);
