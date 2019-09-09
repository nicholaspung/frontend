import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { styled, useTheme } from "@material-ui/styles";

const Marketing = styled(Paper)({
  margin: "20px",
  textAlign: "center"
});

const MarketingCard = ({
  title,
  description,
  displayButton,
  buttonLink,
  icon
}) => {
  const theme = useTheme();
  const CTAButton = styled(Button)({
    backgroundColor: theme.palette.lambdaRed.main,
    borderRadius: "0px",
    color: theme.palette.primary.main
  });
  const ButtonLink = styled(Link)({
    textDecoration: "none",
    flexGrow: 1,
    "&:hover": {
      backgroundColor: theme.palette.lambdaRed.secondary
    }
  });
  const CTACardActions = styled(CardActions)({
    padding: "0px"
  });
  return (
    <Marketing square>
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
      <CTACardActions>
        <ButtonLink to={buttonLink}>
          <CTAButton size="small" fullWidth disableRipple disableFocusRipple disableTouchRipple>
            {displayButton}
          </CTAButton>
        </ButtonLink>
      </CTACardActions>
    </Marketing>
  );
};

MarketingCard.defaultProps = {
  title: "Title",
  description: "Description",
  displayButton: "Button",
  buttonLink: "Link",
  icon: "<>"
};

MarketingCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  displayButton: PropTypes.string,
  buttonLink: PropTypes.string,
  icon: PropTypes.element
};

export default MarketingCard;
